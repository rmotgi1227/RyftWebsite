'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '../Navigation';
import AIPlanParsingDemo from '../demos/AIPlanParsingDemo';
import Footer from '../Footer';

export default function AIPlanParsingFeaturePage() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Side-by-Side Layout */}
<section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="space-y-6"
              >
                <div>
                  <div className="text-sm font-semibold text-accent-600 mb-3 uppercase tracking-wide">
                    AI Plan Parsing
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 leading-tight">
                    Upload document.
                    <span className="block text-accent-600">AI does the rest.</span>
                  </h1>
                  
                  <p className="text-lg text-navy-600 mb-8 leading-relaxed">
                    From PDFs to spreadsheets, our AI reads commission plans in any format and automatically configures your system.
                  </p>
                </div>

                {/* Document Types */}
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 font-medium text-sm">Supports:</span>
                  <div className="flex gap-2">
                    {[
                      { format: "PDF", color: "bg-red-50 text-red-700 border border-red-200" },
                      { format: "Word", color: "bg-blue-50 text-blue-700 border border-blue-200" },
                      { format: "Excel", color: "bg-green-50 text-green-700 border border-green-200" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                        className={`${item.color} rounded-md px-2 py-1 text-xs font-semibold`}
                      >
                        {item.format}
                      </motion.div>
                    ))}
                  </div>
                </div>


                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2 }}
                >
                  <a
                    href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Test AI Parsing
                    <span className="text-lg">→</span>
                  </a>
                </motion.div>
              </motion.div>

              {/* Right: Stats Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="text-center space-y-6">
                    <div>
                      <div className="text-3xl font-bold text-navy-900 mb-1">99.9%</div>
                      <div className="text-gray-600 text-sm">Parsing Accuracy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent-600 mb-1">&lt;30s</div>
                      <div className="text-gray-600 text-sm">Average Parse Time</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-navy-900 mb-1">10K+</div>
                      <div className="text-gray-600 text-sm">Plans Processed</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Intelligence */}
      <section className="py-32 bg-white">
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Reads plans humans can't understand
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complex commission structures that confuse even seasoned sales ops professionals
              </p>
            </motion.div>

            {/* Simple Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  level: "Basic Plans",
                  examples: ["5% on all sales", "Fixed per deal", "Simple rates"]
                },
                {
                  level: "Tiered Plans", 
                  examples: ["3% → 5% tiers", "Product-specific", "Territory rates"]
                },
                {
                  level: "Advanced Rules",
                  examples: ["Accelerators", "Multi-touch splits", "Clawbacks"]
                },
                {
                  level: "Complex Logic",
                  examples: ["20+ variables", "Time-based decay", "ML adjustments"]
                }
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="font-bold text-navy-900 text-lg mb-4">{tier.level}</h3>
                  <ul className="space-y-2">
                    {tier.examples.map((example, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Upload Challenge CTA */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-40 blur-2xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Challenge Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-12 border border-purple-100 relative"
            >
              {/* Challenge Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                AI PARSING CHALLENGE
              </div>
              
              <div className="text-center pt-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Think your plan is
                  <span className="block text-accent-600">too complex?</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Upload your most complicated commission document. 
                  Watch our AI parse it in under 30 seconds.
                </p>
                
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {[
                    { number: "10,000+", label: "Plans Parsed" },
                    { number: "99.9%", label: "Accuracy Rate" },
                    { number: "<30s", label: "Average Time" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-accent-600 mb-2">{stat.number}</div>
                      <div className="text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-accent-600 to-blue-600 hover:from-accent-700 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Take the Challenge
                  </a>
                  
                  <Link
                    href="/product/real-time-dashboards"
                    className="border-2 border-accent-300 text-accent-700 hover:bg-accent-50 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  >
                    Next: Dashboards →
                  </Link>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}