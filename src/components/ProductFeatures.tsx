'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Card from './Card';
import Button from './Button';

const featureCategories = [
  {
    category: "Deployment & Setup",
    icon: "🚀",
    description: "Get live in minutes, not months",
    features: [
      {
        title: "B2C-Style Onboarding",
        description: "Self-service setup with guided workflows that any business user can complete in under 5 minutes.",
        icon: "⚡"
      },
      {
        title: "AI Plan Parser",
        description: "Upload any commission document - our AI instantly understands and implements your compensation structure.",
        icon: "🧠"
      },
      {
        title: "Zero IT Requirements",
        description: "No technical resources needed. No custom coding. No lengthy implementation projects.",
        icon: "🔧"
      }
    ]
  },
  {
    category: "Calculation Engine",
    icon: "🔢",
    description: "Enterprise-grade precision and reliability",
    features: [
      {
        title: "Advanced AI Calculations",
        description: "Machine learning algorithms that handle complex, multi-tiered commission structures with 99.99% accuracy.",
        icon: "🎯"
      },
      {
        title: "Real-time Processing",
        description: "Commission calculations update instantly as deals progress through your CRM pipeline.",
        icon: "⚡"
      },
      {
        title: "Mid-Year Plan Changes",
        description: "Modify commission structures mid-quarter without breaking your system or losing historical data.",
        icon: "🔄"
      }
    ]
  },
  {
    category: "Integrations & Data",
    icon: "🔌",
    description: "Seamless connectivity with your existing stack",
    features: [
      {
        title: "CRM Integrations",
        description: "Direct bi-directional sync with Salesforce, HubSpot, Pipedrive, and 50+ other CRM platforms.",
        icon: "📊"
      },
      {
        title: "Payroll System Sync",
        description: "Automated export to ADP, Workday, Paychex, and other payroll systems for seamless processing.",
        icon: "💰"
      },
      {
        title: "Custom API Access",
        description: "RESTful APIs and webhooks for custom integrations and advanced workflow automation.",
        icon: "⚙️"
      }
    ]
  },
  {
    category: "Analytics & Reporting",
    icon: "📈",
    description: "Data-driven insights for better decisions",
    features: [
      {
        title: "Real-time Dashboards",
        description: "Live commission tracking with customizable views for different roles and stakeholders.",
        icon: "📋"
      },
      {
        title: "Predictive Analytics",
        description: "AI-powered forecasting to predict commission expenses and optimize compensation strategies.",
        icon: "🔮"
      },
      {
        title: "Compliance Reporting",
        description: "Automated audit trails and comprehensive reporting for financial audits and regulatory requirements.",
        icon: "📑"
      }
    ]
  },
  {
    category: "Security & Scale",
    icon: "🛡️",
    description: "Enterprise-grade security and reliability",
    features: [
      {
        title: "Bank-Level Security",
        description: "Enterprise-grade data protection with 256-bit encryption and advanced access controls.",
        icon: "🔒"
      },
      {
        title: "Global Scalability",
        description: "Multi-region deployment with support for international tax calculations and currency handling.",
        icon: "🌍"
      },
      {
        title: "99.9% Uptime SLA",
        description: "Guaranteed availability with redundant infrastructure and 24/7 monitoring.",
        icon: "⏰"
      }
    ]
  },
  {
    category: "User Experience",
    icon: "👥",
    description: "Built for business users, not engineers",
    features: [
      {
        title: "Intuitive Interface",
        description: "Clean, modern UI designed for non-technical users with contextual help and guided workflows.",
        icon: "✨"
      },
      {
        title: "Mobile-First Design",
        description: "Full-featured mobile apps for iOS and Android with offline sync capabilities.",
        icon: "📱"
      },
      {
        title: "Multi-Team Workspaces",
        description: "Role-based access controls with team-specific views and collaborative features.",
        icon: "🤝"
      }
    ]
  }
];

export default function ProductFeatures() {
  return (
    <Section background="white">
      <SectionHeader 
        title="Complete Commission Management Platform"
        subtitle="Everything you need to replace spreadsheets and legacy systems with a modern, intelligent solution"
      />

      <div className="space-y-s8">
        {featureCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category Header */}
            <div className="text-center mb-s8">
              <div className="text-6xl mb-s4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-navy-900 mb-s2">
                {category.category}
              </h3>
              <p className="text-lg text-navy-600">
                {category.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-s6">
              {category.features.map((feature, featureIndex) => (
                <Card key={featureIndex} index={featureIndex} className="h-full">
                  <div className="text-4xl mb-s4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-navy-900 mb-s3">
                    {feature.title}
                  </h4>
                  <p className="text-navy-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div 
        className="text-center mt-s8 bg-navy-50 border border-navy-200 rounded-2xl p-s8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-navy-900 mb-s4">
          Ready to See RYFT in Action?
        </h3>
        <p className="text-navy-600 leading-relaxed mb-s6 max-w-2xl mx-auto">
          Book a personalized demo to see how RYFT can transform your commission management 
          and deliver immediate value to your team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-s4 justify-center items-center">
          <Button 
            variant="primary" 
            size="lg"
            href="/demo"
            className="w-full sm:w-auto"
          >
            Book a Demo →
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            href="/vs-competitors"
            className="w-full sm:w-auto"
          >
            Compare with Competitors
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}