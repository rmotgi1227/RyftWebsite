'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedFeatureSection from './AnimatedFeatureSection';
import ZeroSetupDemo from './demos/ZeroSetupDemo';
import AIPlanParsingDemo from './demos/AIPlanParsingDemo';
import RealTimeDemo from './demos/RealTimeDemo';
import AuditTrailDemo from './demos/AuditTrailDemo';
import BYOCSecurityDemo from './demos/BYOCSecurityDemo';

export default function ModernProductOverview() {
  return (
    <div className="bg-white">

      {/* Features Section */}
      <section id="features" className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Zero Setup */}
            <motion.div 
              className="mb-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-sm font-semibold text-accent-600 mb-4 uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Zero Setup
                  </motion.div>
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Deploy in 5 minutes, not 5 months
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-navy-600 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Upload your commission plan as a PDF. AI reads it, configures everything automatically, 
                    and you're live instantly. No consultants, no configuration, no delays.
                  </motion.p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Upload PDF commission plan",
                      "AI auto-configures rules and calculations", 
                      "Start processing commissions immediately"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
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
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href="/product/zero-setup"
                      className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold group"
                    >
                      Learn more about zero setup
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ZeroSetupDemo />
                </motion.div>
              </div>
            </motion.div>

            {/* AI Plan Parsing */}
            <motion.div 
              className="mb-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  className="order-2 lg:order-1 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <AIPlanParsingDemo />
                </motion.div>
                <motion.div
                  className="order-1 lg:order-2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-sm font-semibold text-accent-600 mb-4 uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    AI Plan Parsing
                  </motion.div>
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    AI that understands any commission structure
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-navy-600 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    From simple percentage-based plans to complex accelerators, clawbacks, and tiered structures. 
                    RYFT's AI reads and configures any commission plan automatically.
                  </motion.p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Reads commission plans from any format",
                      "Handles accelerators, clawbacks, and complex rules", 
                      "No manual rule configuration required"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
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
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href="/product/ai-plan-parsing"
                      className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold group"
                    >
                      See AI plan parsing in action
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Real-time Dashboards */}
            <AnimatedFeatureSection
              tag="Real-time Dashboards"
              title="Live commission tracking and analytics"
              description="Watch commissions update in real-time as deals close. Interactive dashboards give your team instant visibility into earnings, quotas, and performance."
              features={[
                "Live commission tracking",
                "Real-time performance analytics", 
                "Interactive team dashboards"
              ]}
              linkHref="/product/real-time-dashboards"
              linkText="Explore real-time dashboards"
              demoComponent={<RealTimeDemo />}
            />

            {/* Complete Auditability */}
            <AnimatedFeatureSection
              tag="Complete Auditability"
              title="Full transparency, zero disputes"
              description="Every calculation is tracked with complete audit trails. Resolve disputes instantly with detailed breakdowns of every commission decision."
              features={[
                "Transaction-level audit trails",
                "Instant dispute resolution", 
                "Compliance-ready reporting"
              ]}
              linkHref="/product/audit-ability"
              linkText="Explore audit capabilities"
              imageLeft={true}
              demoComponent={<AuditTrailDemo />}
            />


          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-navy-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                See these features in action
              </h2>
              <p className="text-xl text-navy-200 mb-12 leading-relaxed">
                Book a 15-minute demo to see how RYFT eliminates commission headaches forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Book a Demo
                </a>
                <a
                  href="/#roi-calculator"
                  className="border border-navy-600 text-white hover:bg-navy-800 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Calculate Your Savings
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}