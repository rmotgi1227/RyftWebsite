'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Card from './Card';
import Button from './Button';

const keyFeatures = [
  {
    title: "Setup in Minutes",
    description: "Upload your commission plan, connect your CRM, invite your team. You'll be tracking commissions in under 10 minutes.",
    details: ["No IT setup required", "Works with any CRM", "Team gets access instantly"],
    highlight: "10 min setup"
  },
  {
    title: "AI Reads Your Comp Plans",
    description: "Got a complex commission structure? Just upload it as a PDF. Our AI figures out all the math automatically.",
    details: ["Handles complex plans", "No manual configuration", "Works with any structure"],
    highlight: "Just upload & go"
  },
  {
    title: "Change Plans Anytime",
    description: "Need to update your comp plan mid-quarter? Just upload the new one. RYFT adapts without breaking anything.",
    details: ["No system downtime", "Historical data preserved", "Team sees changes instantly"],
    highlight: "Update in real-time"
  },
  {
    title: "Connects to Everything",
    description: "Works with Salesforce, HubSpot, Pipedrive, and 100+ other tools. If it has an API, RYFT can connect to it.",
    details: ["Pre-built CRM connections", "Payroll system sync", "Custom integrations available"],
    highlight: "100+ integrations"
  },
  {
    title: "Numbers You Can Trust",
    description: "Every calculation is auditable. Your finance team will actually trust the commission numbers for once.",
    details: ["Full audit trails", "Error detection", "Matches your CRM data"],
    highlight: "Finance-approved"
  },
  {
    title: "No Surprise Fees",
    description: "One flat price per company. No per-user fees, no implementation costs, no gotcha pricing.",
    details: ["Flat company pricing", "No per-user fees", "Includes all features"],
    highlight: "Predictable costs"
  }
];

export default function KeyFeatures() {
  return (
    <Section background="navy-50">
      <SectionHeader 
        title="Why Teams Love RYFT"
        subtitle="We built the commission tool we wish we had when we were scaling our last company"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-s6 mb-s8">
        {keyFeatures.map((feature, index) => (
          <Card key={index} index={index} className="group h-full">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-bold text-accent-600 bg-accent-100 px-3 py-1 rounded-full">
                {feature.highlight}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-navy-900 mb-s3 group-hover:text-accent-700 transition-colors duration-300">
              {feature.title}
            </h3>
            
            <p className="text-navy-600 leading-relaxed mb-s4">
              {feature.description}
            </p>

            <div className="space-y-s2">
              {feature.details.map((detail, detailIndex) => (
                <motion.div
                  key={detailIndex}
                  className="flex items-center gap-s2 text-sm text-navy-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (index * 0.1) + (detailIndex * 0.05) }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{detail}</span>
                </motion.div>
              ))}
            </div>

            {/* Hover Learn More */}
            <div className="mt-s4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center text-accent-600 font-medium text-sm">
                Learn more
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="text-center bg-white border border-accent-200 rounded-2xl p-s8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-navy-900 mb-s4">
          Ready to Stop Fighting with Spreadsheets?
        </h3>
        <p className="text-navy-600 leading-relaxed mb-s6">
          Book a 15-minute demo and see how RYFT can automate your commission tracking. 
          No sales pitch, just a real demo with your actual data.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-s4 justify-center items-center">
          <Button 
            variant="secondary" 
            size="lg"
            href="/demo"
            className="w-full sm:w-auto"
          >
            Show Me How It Works →
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
      </motion.div>
    </Section>
  );
}