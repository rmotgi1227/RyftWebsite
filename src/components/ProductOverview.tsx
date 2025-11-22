'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductOverview() {
  const features = [
    {
      id: 'zero-setup',
      title: 'Zero Setup',
      subtitle: '5-minute deployment',
      description: 'From signup to first commission calculation in under 5 minutes. No technical configuration, no implementation team, no delays.',
      highlights: [
        'Upload commission plan PDF',
        'AI configures everything automatically', 
        'Go live instantly'
      ],
      icon: '⚡',
      link: '/product/zero-setup'
    },
    {
      id: 'ai-parsing',
      title: 'AI Plan Parsing',
      subtitle: 'Understands any commission structure',
      description: 'Upload your commission plan as a PDF and watch AI automatically understand tiers, accelerators, clawbacks, and complex rules.',
      highlights: [
        'Reads commission plans from PDFs',
        'Handles complex scenarios automatically',
        'No manual rule configuration'
      ],
      icon: '🤖',
      link: '/product/ai-plan-parsing'
    },
    {
      id: 'real-time',
      title: 'Real-time Calculations',
      subtitle: 'Instant commission updates',
      description: 'Commission calculations happen in real-time as deals close. No batch processing, no delays, no waiting until month-end.',
      highlights: [
        'Sub-second calculation speed',
        'Live CRM synchronization', 
        'Instant notifications to reps'
      ],
      icon: '🔄',
      link: '/product/real-time-calculations'
    },
    {
      id: 'audit-ability',
      title: 'Complete Auditability',
      subtitle: 'Full transparency & dispute resolution',
      description: 'Every calculation is tracked with complete audit trails. Resolve disputes instantly with detailed breakdowns of every commission decision.',
      highlights: [
        'Transaction-level audit trails',
        'Instant dispute resolution',
        'Compliance-ready reporting'
      ],
      icon: '📋',
      link: '/product/audit-ability'
    }
  ];

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              The Commission Platform
              <span className="block text-accent-600">Built for Modern Teams</span>
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto mb-8">
              Five breakthrough features that eliminate manual commission work forever. 
              Deploy in minutes, not months.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-accent-600">5min</div>
                <div className="text-sm text-navy-600">Setup Time</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-accent-600">&lt;1s</div>
                <div className="text-sm text-navy-600">Calculation Speed</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-accent-600">99.9%</div>
                <div className="text-sm text-navy-600">Accuracy Rate</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-accent-600">100%</div>
                <div className="text-sm text-navy-600">Audit Visibility</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Feature Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-accent-600 mb-3">
                      {feature.subtitle}
                    </p>
                    <p className="text-navy-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0"></div>
                        <span className="text-navy-700 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link 
                  href={feature.link}
                  className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div 
            className="bg-navy-900 rounded-2xl p-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See These Features in Action
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Book a 15-minute demo to see how RYFT's breakthrough features can eliminate your commission headaches forever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
              <motion.a
                href="#roi-calculator"
                className="border border-navy-600 hover:border-navy-500 text-white hover:bg-navy-800 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Calculate Your Savings
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}