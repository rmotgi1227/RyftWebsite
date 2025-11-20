'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Button from './Button';

const integrationCategories = [
  {
    category: "CRM Systems",
    description: "Bi-directional sync with leading CRM platforms",
    platforms: [
      { name: "Salesforce", logo: "🏢", status: "Live" },
      { name: "HubSpot", logo: "🧭", status: "Live" },
      { name: "Pipedrive", logo: "🔄", status: "Live" },
      { name: "Monday.com", logo: "📅", status: "Live" },
      { name: "Zoho CRM", logo: "📊", status: "Beta" },
      { name: "Microsoft Dynamics", logo: "🏛️", status: "Coming Soon" },
    ]
  },
  {
    category: "Payroll Systems",
    description: "Seamless export to payroll and HR platforms",
    platforms: [
      { name: "ADP", logo: "💼", status: "Live" },
      { name: "Workday", logo: "👥", status: "Live" },
      { name: "Paychex", logo: "💰", status: "Live" },
      { name: "BambooHR", logo: "🎋", status: "Beta" },
      { name: "Gusto", logo: "💸", status: "Beta" },
      { name: "Paylocity", logo: "🏪", status: "Coming Soon" },
    ]
  },
  {
    category: "Finance & ERP",
    description: "Connect with accounting and financial systems",
    platforms: [
      { name: "QuickBooks", logo: "📚", status: "Live" },
      { name: "Xero", logo: "📈", status: "Live" },
      { name: "NetSuite", logo: "🌐", status: "Live" },
      { name: "SAP", logo: "🏗️", status: "Beta" },
      { name: "Oracle", logo: "🔮", status: "Beta" },
      { name: "Sage", logo: "🌿", status: "Coming Soon" },
    ]
  }
];

const apiFeatures = [
  {
    title: "RESTful APIs",
    description: "Full CRUD operations for all commission data",
    icon: "⚙️"
  },
  {
    title: "Webhooks",
    description: "Real-time notifications for commission events",
    icon: "🔔"
  },
  {
    title: "GraphQL Support",
    description: "Flexible queries for complex data requirements",
    icon: "🔗"
  },
  {
    title: "SDKs Available",
    description: "JavaScript, Python, and Go libraries",
    icon: "📦"
  }
];

export default function IntegrationsShowcase() {
  return (
    <Section background="navy-50">
      <SectionHeader 
        title="Integrate with Your Existing Stack"
        subtitle="RYFT connects seamlessly with 100+ platforms through pre-built integrations and flexible APIs"
      />

      {/* Integration Categories */}
      <div className="space-y-s8 mb-s8">
        {integrationCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="bg-white rounded-2xl p-s8 shadow-lg border border-navy-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-s6">
              <h3 className="text-2xl font-bold text-navy-900 mb-s2">
                {category.category}
              </h3>
              <p className="text-navy-600">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-s4">
              {category.platforms.map((platform, platformIndex) => (
                <motion.div
                  key={platformIndex}
                  className="bg-navy-50 rounded-xl p-s4 text-center border border-navy-100 hover:border-accent-200 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (platformIndex * 0.05) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-s2">{platform.logo}</div>
                  <div className="font-medium text-navy-900 text-sm mb-s1">
                    {platform.name}
                  </div>
                  <div className={`text-xs font-semibold px-s2 py-1 rounded-full ${
                    platform.status === 'Live' ? 'bg-green-100 text-green-700' :
                    platform.status === 'Beta' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {platform.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* API Features */}
      <motion.div
        className="bg-navy-900 rounded-2xl p-s8 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-s8">
          <h3 className="text-3xl font-bold mb-s4">
            Developer-First API Platform
          </h3>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto">
            Need a custom integration? Our comprehensive API platform gives you full control 
            over your commission data and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-s6 mb-s8">
          {apiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-navy-800 rounded-xl p-s6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-s4">{feature.icon}</div>
              <h4 className="font-semibold text-white mb-s2">
                {feature.title}
              </h4>
              <p className="text-navy-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* API CTA */}
        <div className="text-center">
          <Button 
            variant="secondary" 
            size="lg"
            href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
            className="mr-s4"
          >
            Talk to Our Team →
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            href="#"
            className="border-white/20 hover:border-white/40 text-white hover:bg-white/10"
          >
            API Documentation
          </Button>
        </div>
      </motion.div>

      {/* Integration Request */}
      <motion.div 
        className="text-center mt-s8 bg-white border border-accent-200 rounded-2xl p-s8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-navy-900 mb-s4">
          Don't See Your Platform?
        </h3>
        <p className="text-navy-600 leading-relaxed mb-s6">
          We're constantly adding new integrations. Let us know what you need and we'll 
          prioritize it in our development roadmap.
        </p>
        
        <Button 
          variant="outline" 
          size="lg"
          href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
        >
          Request Integration
        </Button>
      </motion.div>
    </Section>
  );
}