'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import SectionHeader from './SectionHeader';
import ComparisonTable from './ComparisonTable';

const comparisonFeatures = [
  {
    feature: "Setup Time",
    ryft: "5 minutes",
    competitors: {
      "Spiff": "3-6 months",
      "Xactly": "4-8 months", 
      "Quotapath": "2-4 months",
      "CaptivateIQ": "3-5 months"
    }
  },
  {
    feature: "Implementation Complexity",
    ryft: "Self-service",
    competitors: {
      "Spiff": "Professional services",
      "Xactly": "Enterprise implementation",
      "Quotapath": "Technical setup required",
      "CaptivateIQ": "Custom configuration"
    }
  },
  {
    feature: "AI Plan Parsing",
    ryft: true,
    competitors: {
      "Spiff": false,
      "Xactly": false,
      "Quotapath": false,
      "CaptivateIQ": false
    }
  },
  {
    feature: "Mid-Year Plan Changes",
    ryft: true,
    competitors: {
      "Spiff": "Limited",
      "Xactly": "Complex process",
      "Quotapath": "Requires rebuild",
      "CaptivateIQ": "Professional services"
    }
  },
  {
    feature: "Real-time Calculations",
    ryft: true,
    competitors: {
      "Spiff": true,
      "Xactly": "Batch processing",
      "Quotapath": true,
      "CaptivateIQ": true
    }
  },
  {
    feature: "CRM Integrations",
    ryft: "100+ pre-built",
    competitors: {
      "Spiff": "50+ integrations",
      "Xactly": "Enterprise only",
      "Quotapath": "Limited selection",
      "CaptivateIQ": "Custom development"
    }
  },
  {
    feature: "Pricing Model",
    ryft: "Transparent, flat-rate",
    competitors: {
      "Spiff": "Per user + fees",
      "Xactly": "Enterprise pricing",
      "Quotapath": "Per user",
      "CaptivateIQ": "Custom pricing"
    }
  },
  {
    feature: "SMB/Mid-Market Focus",
    ryft: true,
    competitors: {
      "Spiff": "Enterprise focus",
      "Xactly": "Enterprise only",
      "Quotapath": "Limited features",
      "CaptivateIQ": "Enterprise focus"
    }
  },
  {
    feature: "Self-Learning AI",
    ryft: true,
    competitors: {
      "Spiff": false,
      "Xactly": false,
      "Quotapath": false,
      "CaptivateIQ": false
    }
  },
  {
    feature: "Mobile-First Design",
    ryft: true,
    competitors: {
      "Spiff": "Limited mobile",
      "Xactly": "Basic mobile",
      "Quotapath": true,
      "CaptivateIQ": "Web-focused"
    }
  },
  {
    feature: "Customer Support",
    ryft: "24/7 chat + dedicated CSM",
    competitors: {
      "Spiff": "Business hours",
      "Xactly": "Enterprise support",
      "Quotapath": "Email support",
      "CaptivateIQ": "Tiered support"
    }
  }
];

const competitors = ["Spiff", "Xactly", "Quotapath", "CaptivateIQ"];

const competitorAnalysis = [
  {
    name: "RYFT",
    logo: "🚀",
    strengths: [
      "5-minute setup with B2C-style onboarding",
      "AI-powered plan parsing and mid-year changes",
      "Self-learning system improves over time",
      "Transparent pricing with no hidden fees",
      "Built specifically for SMB/Mid-market efficiency"
    ],
    idealFor: "Growing companies that need enterprise features without enterprise complexity",
    pricing: "Transparent, flat-rate pricing starting at competitive rates",
    highlight: true
  },
  {
    name: "Spiff",
    logo: "⚡",
    strengths: [
      "Good enterprise features",
      "Decent integration library",
      "Real-time calculations"
    ],
    weaknesses: [
      "3-6 month implementation timeline",
      "Requires technical expertise for setup",
      "Per-user pricing gets expensive",
      "No AI plan parsing capabilities"
    ],
    idealFor: "Large enterprises with dedicated IT resources",
    pricing: "Per-user pricing + implementation fees"
  },
  {
    name: "Xactly",
    logo: "🏢",
    strengths: [
      "Mature platform with enterprise features",
      "Strong analytics capabilities",
      "Established market presence"
    ],
    weaknesses: [
      "4-8 month implementation required",
      "Enterprise-only focus, not suitable for SMB",
      "Complex setup requires consultants",
      "Expensive licensing model"
    ],
    idealFor: "Large enterprises with complex commission structures",
    pricing: "Enterprise pricing, custom quotes"
  },
  {
    name: "Quotapath", 
    logo: "📈",
    strengths: [
      "Simpler than enterprise solutions",
      "Good mobile experience",
      "Reasonable pricing for small teams"
    ],
    weaknesses: [
      "Limited advanced features",
      "2-4 month setup process",
      "Cannot handle complex commission plans",
      "Requires plan rebuilds for changes"
    ],
    idealFor: "Small teams with simple commission structures",
    pricing: "Per-user pricing model"
  },
  {
    name: "CaptivateIQ",
    logo: "📊",
    strengths: [
      "Strong calculation engine",
      "Good enterprise features",
      "Flexible configuration"
    ],
    weaknesses: [
      "3-5 month implementation timeline",
      "Requires technical expertise",
      "Web-focused, limited mobile",
      "Custom pricing without transparency"
    ],
    idealFor: "Mid-to-large enterprises with technical resources",
    pricing: "Custom pricing, tiered plans"
  }
];

export default function DetailedComparison() {
  return (
    <Section background="white">
      <SectionHeader 
        title="Comprehensive Feature Comparison"
        subtitle="See how RYFT delivers superior time-to-value across every dimension that matters"
      />

      {/* Feature Comparison Table */}
      <ComparisonTable 
        features={comparisonFeatures}
        competitors={competitors}
        className="mb-s8"
      />

      {/* Detailed Analysis */}
      <SectionHeader 
        title="Platform Deep Dive"
        subtitle="Understanding the strengths and limitations of each solution"
        className="mt-s8"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-s6">
        {competitorAnalysis.map((platform, index) => (
          <motion.div
            key={index}
            className={`p-s6 rounded-2xl border-2 h-full ${
              platform.highlight 
                ? 'bg-accent-50 border-accent-200 relative' 
                : 'bg-white border-navy-200'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {platform.highlight && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-500 text-white px-s4 py-s1 rounded-full text-sm font-bold">
                  Recommended
                </span>
              </div>
            )}

            <div className="flex items-center gap-s3 mb-s4">
              <div className="text-4xl">{platform.logo}</div>
              <h3 className={`text-xl font-bold ${
                platform.highlight ? 'text-accent-700' : 'text-navy-900'
              }`}>
                {platform.name}
              </h3>
            </div>

            <div className="space-y-s4">
              <div>
                <h4 className="font-semibold text-navy-900 mb-s2">Strengths</h4>
                <ul className="space-y-s1">
                  {platform.strengths.map((strength, strengthIndex) => (
                    <li key={strengthIndex} className="flex items-start gap-s2 text-sm text-navy-700">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {platform.weaknesses && (
                <div>
                  <h4 className="font-semibold text-navy-900 mb-s2">Limitations</h4>
                  <ul className="space-y-s1">
                    {platform.weaknesses.map((weakness, weaknessIndex) => (
                      <li key={weaknessIndex} className="flex items-start gap-s2 text-sm text-navy-700">
                        <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-navy-200 pt-s4">
                <div className="mb-s3">
                  <span className="text-xs font-semibold text-navy-800 uppercase tracking-wide">Ideal For</span>
                  <p className="text-sm text-navy-700 mt-s1">{platform.idealFor}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-navy-800 uppercase tracking-wide">Pricing</span>
                  <p className="text-sm text-navy-700 mt-s1">{platform.pricing}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}