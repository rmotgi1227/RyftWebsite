'use client';

import { motion } from 'framer-motion';
import ZeroSetupDemo from '@/components/demos/ZeroSetupDemo';
import AIPlanParsingDemo from '@/components/demos/AIPlanParsingDemo';
import RealTimeDemo from '@/components/demos/RealTimeDemo';
import AuditTrailDemo from '@/components/demos/AuditTrailDemo';

export default function FeatureDemos() {
  const features = [
    {
      id: 'zero-setup',
      tag: 'Zero Setup',
      title: 'Deploy in 5 minutes, not 5 months',
      description: 'Upload your commission plan as a PDF. AI reads it, configures everything automatically, and you\'re live instantly. No consultants, no configuration, no delays.',
      features: [
        'Upload PDF commission plan',
        'AI auto-configures rules and calculations',
        'Start processing commissions immediately'
      ],
      demo: <ZeroSetupDemo />,
      alignment: 'left' as const,
    },
    {
      id: 'ai-plan-parsing',
      tag: 'AI Plan Parsing',
      title: 'AI that understands any commission structure',
      description: 'From simple percentage-based plans to complex accelerators, clawbacks, and tiered structures. RYFT\'s AI reads and configures any commission plan automatically.',
      features: [
        'Reads commission plans from any format',
        'Handles accelerators, clawbacks, and complex rules',
        'No manual rule configuration required'
      ],
      demo: <AIPlanParsingDemo />,
      alignment: 'right' as const,
    },
    {
      id: 'real-time',
      tag: 'Real-time Dashboards',
      title: 'Live commission tracking and analytics',
      description: 'Watch commissions update in real-time as deals close. Interactive dashboards give your team instant visibility into earnings, quotas, and performance.',
      features: [
        'Live commission tracking',
        'Real-time performance analytics',
        'Interactive team dashboards'
      ],
      demo: <RealTimeDemo />,
      alignment: 'left' as const,
    },
    {
      id: 'auditability',
      tag: 'Complete Auditability',
      title: 'Full transparency, zero disputes',
      description: 'Every calculation is tracked with complete audit trails. Resolve disputes instantly with detailed breakdowns of every commission decision.',
      features: [
        'Transaction-level audit trails',
        'Instant dispute resolution',
        'Compliance-ready reporting'
      ],
      demo: <AuditTrailDemo />,
      alignment: 'right' as const,
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {features.map((feature, index) => (
            <motion.div
              key={feature.tag}
              id={feature.id}
              className={`mb-16 sm:mb-24 md:mb-32 scroll-mt-32 ${index === features.length - 1 ? 'mb-0' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              viewport={{ once: true, margin: "-150px" }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center ${
                  feature.alignment === 'right' ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <motion.div
                  className={`${feature.alignment === 'right' ? 'lg:col-start-2' : ''} px-4 lg:px-0`}
                  initial={{ opacity: 0, x: feature.alignment === 'left' ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-xs sm:text-sm font-semibold text-accent-600 mb-3 sm:mb-4 uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {feature.tag}
                  </motion.div>
                  
                  <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {feature.title}
                  </motion.h2>
                  
                  <motion.p
                    className="text-base sm:text-lg text-navy-600 mb-6 sm:mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                  
                  <ul className="space-y-4">
                    {feature.features.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-navy-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Demo */}
                <motion.div
                  className={`rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${feature.alignment === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  {feature.demo}
                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

