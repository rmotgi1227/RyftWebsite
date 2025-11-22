/**
 * Content audit utility for Nexus chatbot
 * Fetches and parses site content to provide accurate feature information
 */

export interface FeatureContent {
  name: string;
  title: string;
  description: string;
  benefits: string[];
  learnMoreUrl: string;
}

export interface SiteContentData {
  features: FeatureContent[];
  lastUpdated: number;
  cacheExpiry: number;
}

// Cache duration in milliseconds (1 hour)
const CACHE_DURATION = 60 * 60 * 1000;
const CACHE_KEY = 'ryft_site_content_cache';

/**
 * Get base URL for internal requests
 * Uses environment variable or constructs from headers
 */
function getBaseUrl(headers?: Headers): string {
  // Try environment variable first
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (baseUrl) {
    return baseUrl;
  }

  // Fallback to headers if available (server-side)
  if (headers) {
    const host = headers.get('host');
    const protocol = headers.get('x-forwarded-proto') || 'https';
    if (host) {
      return `${protocol}://${host}`;
    }
  }

  // Final fallback for development
  return 'http://localhost:3000';
}

/**
 * Fetch and parse content from a specific product page
 */
async function fetchPageContent(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Nexus-Content-Auditor/1.0',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.text();
  } catch (error) {
    console.error(`Error fetching page content from ${url}:`, error);
    throw error;
  }
}

/**
 * Decode HTML entities in text
 */
function decodeHtmlEntities(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'",
    '&#39;': "'",
    '&apos;': "'",
    '&#x2F;': '/',
  };
  
  return text.replace(/&[#\w\d]+;/g, (entity) => htmlEntities[entity] || entity);
}

/**
 * Extract feature information from page metadata and content
 */
function parseFeatureFromMetadata(html: string, path: string): FeatureContent | null {
  try {
    // Extract title from meta description or title tag
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const descriptionMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
    
    if (!titleMatch && !descriptionMatch) {
      return null;
    }

    // Extract feature name from path
    const pathSegments = path.split('/').filter(Boolean);
    const featureName = pathSegments[pathSegments.length - 1] || 'unknown';
    
    // Convert kebab-case to title case
    const name = featureName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const title = titleMatch ? decodeHtmlEntities(titleMatch[1].replace(' - RYFT', '').trim()) : name;
    const description = descriptionMatch ? decodeHtmlEntities(descriptionMatch[1].trim()) : '';

    // Extract benefits from description or use defaults
    const benefits: string[] = [];
    if (description.includes('AI') && description.includes('automatic')) {
      benefits.push('AI-powered automation');
    }
    if (description.includes('real-time') || description.includes('live')) {
      benefits.push('Real-time updates');
    }
    if (description.includes('zero') && description.includes('setup')) {
      benefits.push('Zero setup required');
    }
    if (description.includes('audit') || description.includes('compliance')) {
      benefits.push('Complete auditability');
    }
    if (description.includes('security') || description.includes('cloud')) {
      benefits.push('Enterprise security');
    }

    return {
      name,
      title,
      description,
      benefits,
      learnMoreUrl: path,
    };
  } catch (error) {
    console.error('Error parsing feature metadata:', error);
    return null;
  }
}

/**
 * Fetch all product feature content
 */
async function fetchProductFeatures(baseUrl: string): Promise<FeatureContent[]> {
  const featurePaths = [
    '/product/zero-setup',
    '/product/ai-plan-parsing',
    '/product/real-time-dashboards',
    '/product/audit-ability',
    '/product/security',
  ];

  const features: FeatureContent[] = [];

  for (const path of featurePaths) {
    try {
      const url = `${baseUrl}${path}`;
      const html = await fetchPageContent(url);
      const feature = parseFeatureFromMetadata(html, path);
      
      if (feature) {
        features.push(feature);
      }
    } catch (error) {
      console.error(`Failed to fetch feature content for ${path}:`, error);
      // Continue with other features even if one fails
    }
  }

  return features;
}

/**
 * Get cached content or fetch fresh content
 */
export async function getSiteContent(headers?: Headers): Promise<SiteContentData> {
  // Check cache first (only on server side)
  if (typeof window === 'undefined') {
    try {
      const cachedData = await getCachedContent();
      if (cachedData && !isCacheExpired(cachedData)) {
        return cachedData;
      }
    } catch (error) {
      console.warn('Error reading cache, fetching fresh content:', error);
    }
  }

  // Fetch fresh content
  const baseUrl = getBaseUrl(headers);
  const features = await fetchProductFeatures(baseUrl);
  
  const siteContent: SiteContentData = {
    features,
    lastUpdated: Date.now(),
    cacheExpiry: Date.now() + CACHE_DURATION,
  };

  // Cache the result (only on server side)
  if (typeof window === 'undefined') {
    try {
      await setCachedContent(siteContent);
    } catch (error) {
      console.warn('Error caching content:', error);
    }
  }

  return siteContent;
}

/**
 * Simple in-memory cache for content (server-side only)
 */
let memoryCache: SiteContentData | null = null;

async function getCachedContent(): Promise<SiteContentData | null> {
  return memoryCache;
}

async function setCachedContent(content: SiteContentData): Promise<void> {
  memoryCache = content;
}

function isCacheExpired(content: SiteContentData): boolean {
  return Date.now() > content.cacheExpiry;
}

/**
 * Find relevant features based on user query
 */
export function findRelevantFeatures(
  query: string,
  siteContent: SiteContentData
): FeatureContent[] {
  const searchTerms = query.toLowerCase().split(/\s+/);
  const relevantFeatures: { feature: FeatureContent; score: number }[] = [];

  for (const feature of siteContent.features) {
    const featureName = feature.name.toLowerCase();
    const featureTitle = feature.title.toLowerCase();
    const featureDescription = feature.description.toLowerCase();
    const featureBenefits = feature.benefits.join(' ').toLowerCase();
    
    let score = 0;
    
    // High priority matches - feature name or specific terms
    for (const term of searchTerms) {
      if (term.length < 3) continue; // Skip short words
      
      // Exact feature name match (highest score)
      if (featureName.includes(term) || featureTitle.includes(term)) {
        score += 10;
      }
      
      // Specific feature keywords
      if (term === 'zero' && featureName.includes('zero')) score += 8;
      if (term === 'setup' && featureName.includes('setup')) score += 8;
      if (term === 'ai' && featureName.includes('ai')) score += 8;
      if (term === 'parsing' && featureName.includes('parsing')) score += 8;
      if (term === 'dashboard' && featureName.includes('dashboard')) score += 8;
      if (term === 'audit' && featureName.includes('audit')) score += 8;
      if (term === 'security' && featureName.includes('security')) score += 8;
      if (term === 'real-time' && featureName.includes('real')) score += 8;
      
      // Description and benefits match (lower score)
      if (featureDescription.includes(term)) score += 3;
      if (featureBenefits.includes(term)) score += 2;
    }
    
    // Boost score for exact phrase matches
    const queryLower = query.toLowerCase();
    if (featureName.includes(queryLower) || featureTitle.includes(queryLower)) {
      score += 15;
    }
    
    if (score > 0) {
      relevantFeatures.push({ feature, score });
    }
  }

  // Sort by relevance score and return top matches
  relevantFeatures.sort((a, b) => b.score - a.score);
  
  // Return top 2 most relevant features, or all if query is very general
  const isGeneralQuery = searchTerms.includes('feature') || searchTerms.includes('features') || 
                        searchTerms.includes('capability') || searchTerms.includes('abilities');
  
  const maxResults = isGeneralQuery ? relevantFeatures.length : 2;
  return relevantFeatures.slice(0, maxResults).map(item => item.feature);
}

/**
 * Generate feature-specific response based on site content
 */
export function generateFeatureResponse(
  query: string,
  siteContent: SiteContentData
): string {
  const relevantFeatures = findRelevantFeatures(query, siteContent);

  if (relevantFeatures.length === 0) {
    return "I'd be happy to tell you about Ryft's features! Our platform includes Zero Setup, AI Plan Parsing, Real-time Dashboards, Audit Ability, and Enterprise Security. What specific area interests you most?";
  }

  if (relevantFeatures.length === 1) {
    const feature = relevantFeatures[0];
    const benefits = feature.benefits.length > 0 
      ? `Key benefits include: ${feature.benefits.join(', ')}.` 
      : '';
    
    return `${feature.description} ${benefits} You can learn more about this feature at [${feature.title}](${feature.learnMoreUrl}).`;
  }

  // Multiple features found
  const featureList = relevantFeatures
    .map(f => `• **${f.name}**: ${f.description}`)
    .join('\n');

  return `Ryft offers several features that match your query:\n\n${featureList}\n\nWould you like me to dive deeper into any specific feature?`;
}