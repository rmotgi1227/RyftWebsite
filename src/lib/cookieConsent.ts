export const COOKIE_CONSENT_KEY = 'ryft_cookie_consent';
export const COOKIE_CONSENT_VERSION = '1.0';

export interface CookieConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  version: string;
  timestamp: number;
}

export const DEFAULT_COOKIE_CONSENT: CookieConsentState = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  version: COOKIE_CONSENT_VERSION,
  timestamp: 0,
};

export const COOKIE_CATEGORIES = {
  necessary: {
    id: 'necessary' as const,
    name: 'Necessary Cookies',
    description: 'Essential for website functionality and cannot be disabled.',
    required: true,
  },
  analytics: {
    id: 'analytics' as const,
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website.',
    required: false,
  },
  marketing: {
    id: 'marketing' as const,
    name: 'Marketing Cookies',
    description: 'Used to deliver personalized content and advertisements.',
    required: false,
  },
} as const;

export type CookieCategory = keyof typeof COOKIE_CATEGORIES;

export const getCookieConsent = (): CookieConsentState | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored) as CookieConsentState;
    
    // Check if stored version matches current version
    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null;
    }
    
    return parsed;
  } catch {
    return null;
  }
};

export const setCookieConsent = (consent: Partial<CookieConsentState>): void => {
  if (typeof window === 'undefined') return;
  
  const fullConsent: CookieConsentState = {
    ...DEFAULT_COOKIE_CONSENT,
    ...consent,
    version: COOKIE_CONSENT_VERSION,
    timestamp: Date.now(),
  };
  
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(fullConsent));
  } catch (error) {
    console.warn('Failed to store cookie consent:', error);
  }
};

export const clearCookieConsent = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch (error) {
    console.warn('Failed to clear cookie consent:', error);
  }
};

export const hasValidConsent = (): boolean => {
  const consent = getCookieConsent();
  return consent !== null && consent.timestamp > 0;
};