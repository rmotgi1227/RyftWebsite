'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Button from './Button';
import Card from './Card';

const ryftAdvantages = [
  {
    title: "Unmatched Time-to-Value",
    description: "While competitors require 3-6 months of implementation, RYFT gets you live in 5 minutes with our revolutionary B2C-style onboarding.",
    icon: "⚡",
    metric: "5 minutes vs 3-6 months",
    details: [
      "No IT involvement required",
      "Self-service setup process", 
      "Immediate value realization",
      "Start calculating commissions today"
    ]
  },
  {
    title: "AI-First Approach",
    description: "Our proprietary AI agents parse commission plans, adapt to changes, and continuously learn from your data - capabilities no competitor offers.",
    icon: "🧠",
    metric: "Industry-first AI parsing",
    details: [
      "Automatic plan interpretation",
      "Mid-year structure changes",
      "Self-improving accuracy",
      "Natural language processing"
    ]
  },
  {
    title: "SMB/Mid-Market Optimized",
    description: "Built specifically for growing companies that need enterprise features without enterprise complexity or pricing.",
    icon: "🎯",
    metric: "70% cost savings vs enterprise",
    details: [
      "No per-user pricing traps",
      "Transparent, predictable costs",
      "Features that scale with growth",
      "Business user-friendly design"
    ]
  },
  {
    title: "Zero Vendor Lock-in",
    description: "Open APIs, easy data export, and flexible integrations mean you're never trapped with RYFT if your needs change.",
    icon: "🔓",
    metric: "100% data portability",
    details: [
      "Full API access included",
      "Standard data formats",
      "Easy migration paths",
      "No proprietary dependencies"
    ]
  }
];

const migrationProcess = [
  {
    step: "1",
    title: "Data Assessment",
    description: "We analyze your current commission data and structure",
    duration: "1 day"
  },
  {
    step: "2", 
    title: "AI Plan Setup",
    description: "Upload your commission document, our AI does the rest",
    duration: "5 minutes"
  },
  {
    step: "3",
    title: "Integration Connect",
    description: "Link your CRM and payroll systems with pre-built connectors",
    duration: "15 minutes"
  },
  {
    step: "4",
    title: "Go Live",
    description: "Start processing commissions with full team access",
    duration: "Immediate"
  }
];

export default function WhyChooseRyft() {
  return (
    <>
      {/* Advantages Section */}
      <Section background="navy-50">
        <SectionHeader 
          title="Why RYFT Outperforms Traditional Platforms"
          subtitle="Four key advantages that deliver immediate and lasting value to your business"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-s8">
          {ryftAdvantages.map((advantage, index) => (
            <Card key={index} index={index} className="h-full">
              <div className="flex items-start justify-between mb-s4">
                <div className="text-5xl">{advantage.icon}</div>
                <span className="text-xs font-bold text-accent-600 bg-accent-100 px-s3 py-s1 rounded-full">
                  {advantage.metric}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-navy-900 mb-s4">
                {advantage.title}
              </h3>
              
              <p className="text-navy-600 leading-relaxed mb-s6">
                {advantage.description}
              </p>

              <div className="space-y-s2">
                {advantage.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    className="flex items-center gap-s3 text-sm text-navy-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.1) + (detailIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5 h-5 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Migration Process */}
      <Section background="white">
        <SectionHeader 
          title="Migrating from Legacy Platforms"
          subtitle="Our proven 4-step process gets you up and running faster than any competitor's initial setup"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-s6 mb-s8">
          {migrationProcess.map((step, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-s4 relative z-10">
                {step.step}
              </div>
              
              {/* Connecting Line */}
              {index < migrationProcess.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent-200 transform translate-x-8 z-0"></div>
              )}

              <h3 className="text-lg font-semibold text-navy-900 mb-s2">
                {step.title}
              </h3>
              <p className="text-navy-600 text-sm mb-s3">
                {step.description}
              </p>
              <span className="inline-block bg-navy-100 text-navy-700 px-s3 py-s1 rounded-full text-xs font-semibold">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center bg-accent-50 border border-accent-200 rounded-2xl p-s8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-navy-900 mb-s4">
            Ready to Leave Legacy Platforms Behind?
          </h3>
          <p className="text-navy-600 leading-relaxed mb-s6 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their commission management 
            with RYFT's innovative approach. See the difference for yourself.
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
              href="/product"
              className="w-full sm:w-auto"
            >
              Explore All Features
            </Button>
          </div>

          {/* Risk-Free Badge */}
          <motion.div 
            className="mt-s6 inline-flex items-center gap-s2 bg-green-100 text-green-700 px-s4 py-s2 rounded-full text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            30-day money-back guarantee
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}