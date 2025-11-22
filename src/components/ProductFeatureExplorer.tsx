'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatureExplorer() {
  const [activeCategory, setActiveCategory] = useState<'core' | 'automation' | 'analytics' | 'enterprise'>('core');

  const featureCategories = {
    core: {
      name: 'Core Platform',
      description: 'Essential features that power your commission management',
      features: [
        {
          title: 'AI Plan Parsing',
          description: 'Upload commission plans as PDFs and let AI automatically configure rules, tiers, and calculations',
          benefits: ['Zero manual setup', '30-second deployment', 'Handles complex plan logic'],
          visual: 'ai-parser',
          metrics: { accuracy: '99.7%', time: '30 seconds', complexity: 'Any plan structure' }
        },
        {
          title: 'Real-time Calculations',
          description: 'Commission updates happen instantly as deals move through your sales pipeline',
          benefits: ['Live commission tracking', 'Instant notifications', 'No batch processing delays'],
          visual: 'real-time',
          metrics: { speed: '<1 second', uptime: '99.9%', scale: 'Unlimited deals' }
        },
        {
          title: 'Audit Trail',
          description: 'Complete visibility into every calculation, change, and adjustment',
          benefits: ['Full transaction history', 'Compliance ready', 'Dispute resolution'],
          visual: 'audit-trail',
          metrics: { retention: 'Forever', detail: 'Transaction-level', access: 'Role-based' }
        }
      ]
    },
    automation: {
      name: 'Automation',
      description: 'Eliminate manual work with intelligent automation',
      features: [
        {
          title: 'CRM Sync',
          description: 'Automatic data synchronization with your existing CRM and sales tools',
          benefits: ['No manual exports', 'Real-time data', '100+ pre-built integrations'],
          visual: 'crm-sync',
          metrics: { sync: 'Real-time', integrations: '100+', reliability: '99.9%' }
        },
        {
          title: 'Smart Notifications',
          description: 'Intelligent alerts for quota achievements, plan changes, and payment schedules',
          benefits: ['Personalized alerts', 'Multi-channel delivery', 'Smart timing'],
          visual: 'notifications',
          metrics: { channels: '5+', timing: 'Intelligent', personalization: 'Full' }
        },
        {
          title: 'Workflow Engine',
          description: 'Automate approvals, adjustments, and escalations based on your business rules',
          benefits: ['Custom workflows', 'Approval chains', 'Exception handling'],
          visual: 'workflows',
          metrics: { flexibility: 'Unlimited', speed: 'Instant', reliability: '100%' }
        }
      ]
    },
    analytics: {
      name: 'Analytics & Insights',
      description: 'Data-driven insights to optimize your commission strategy',
      features: [
        {
          title: 'Performance Analytics',
          description: 'Deep insights into rep performance, plan effectiveness, and commission trends',
          benefits: ['Predictive insights', 'Custom dashboards', 'Export capabilities'],
          visual: 'analytics',
          metrics: { metrics: '50+', refresh: 'Real-time', export: 'Any format' }
        },
        {
          title: 'Plan Optimization',
          description: 'AI-powered recommendations to improve commission plan performance',
          benefits: ['Plan effectiveness scoring', 'Optimization suggestions', 'A/B testing'],
          visual: 'optimization',
          metrics: { improvement: 'Up to 25%', suggestions: 'Weekly', testing: 'Built-in' }
        },
        {
          title: 'Forecasting',
          description: 'Predict commission costs and sales performance based on current trends',
          benefits: ['Commission forecasting', 'Budget planning', 'Scenario modeling'],
          visual: 'forecasting',
          metrics: { accuracy: '95%+', horizon: '12 months', scenarios: 'Unlimited' }
        }
      ]
    },
    enterprise: {
      name: 'Enterprise Features',
      description: 'Advanced capabilities for large-scale operations',
      features: [
        {
          title: 'Multi-entity Support',
          description: 'Manage commissions across multiple companies, regions, and currencies',
          benefits: ['Global operations', 'Multi-currency', 'Regional compliance'],
          visual: 'multi-entity',
          metrics: { entities: 'Unlimited', currencies: '50+', regions: 'Global' }
        },
        {
          title: 'Advanced Security',
          description: 'Enterprise-grade security with advanced encryption and custom security requirements',
          benefits: ['AES-256 encryption', 'Role-based access controls', 'Custom security policies'],
          visual: 'security',
          metrics: { compliance: 'Full', encryption: 'AES-256', monitoring: '24/7' }
        },
        {
          title: 'API & Extensibility',
          description: 'Comprehensive APIs and webhooks for custom integrations and workflows',
          benefits: ['REST & GraphQL APIs', 'Real-time webhooks', 'Custom integrations'],
          visual: 'api',
          metrics: { endpoints: '100+', uptime: '99.9%', documentation: 'Complete' }
        }
      ]
    }
  };

  const categories = Object.keys(featureCategories) as Array<keyof typeof featureCategories>;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Everything you need in one platform
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Explore the comprehensive features that make RYFT the most powerful commission management platform.
            </p>
          </motion.div>

          {/* Category Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-accent-500 text-white shadow-lg'
                    : 'bg-white text-navy-700 hover:bg-accent-50 border border-gray-200'
                }`}
              >
                {featureCategories[category].name}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Category Content */}
          <motion.div 
            className="mb-12"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold text-navy-900 mb-4">
                {featureCategories[activeCategory].name}
              </h3>
              <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                {featureCategories[activeCategory].description}
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featureCategories[activeCategory].features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {/* Feature Icon/Visual */}
                  <div className="bg-accent-50 rounded-lg p-6 mb-6">
                    <div className="w-12 h-12 bg-accent-500 rounded-lg mx-auto flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-navy-900 mb-3">
                    {feature.title}
                  </h4>
                  
                  <p className="text-navy-600 mb-6">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-navy-800 mb-3 text-sm">Key Benefits:</h5>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-navy-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="border-t border-gray-100 pt-6">
                    <h5 className="font-semibold text-navy-800 mb-3 text-sm">Performance Metrics:</h5>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(feature.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-navy-600 capitalize">{key}:</span>
                          <span className="font-medium text-navy-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center bg-navy-900 rounded-xl p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              See these features in action
            </h3>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Book a personalized demo to see how RYFT&apos;s features can transform your commission management process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Feature Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}