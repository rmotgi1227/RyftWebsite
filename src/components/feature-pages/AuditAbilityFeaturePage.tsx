'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '../Navigation';
import AuditTrailDemo from '../demos/AuditTrailDemo';
import Footer from '../Footer';

export default function AuditAbilityFeaturePage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Audit Trail Timeline Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Left sidebar with title and timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              
              {/* Left: Title and controls */}
              <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  
                  <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight">
                    Every calculation
                    <span className="block text-accent-600">fully tracked</span>
                  </h1>
                  
                  <p className="text-xl text-navy-600 mb-8 leading-relaxed">
                    See exactly how every commission was calculated, who approved it, and when changes were made.
                  </p>

                  {/* Quick stats */}
                  <div className="space-y-4 mb-8">
                    {[
                      { number: "100%", label: "Transparency" },
                      { number: "0", label: "Disputes" },
                      { number: "<1min", label: "Resolution" }
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-navy-900">{stat.number}</div>
                        <div className="text-base text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    See Audit Trail Demo
                  </a>
                </motion.div>
              </div>

              {/* Right: Audit timeline visualization */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  {/* Timeline container */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 relative overflow-hidden">
                    
                    {/* Audit Trail Header */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                      <h3 className="text-2xl font-bold text-navy-900">Commission Audit Trail</h3>
                      <div className="text-sm text-gray-500">Deal #12,847 • Sarah Johnson</div>
                    </div>

                    {/* Timeline events */}
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                      
                      <div className="space-y-6">
                        {[
                          { 
                            time: "14:23", 
                            action: "Deal created", 
                            user: "John Smith", 
                            detail: "$50,000 deal value", 
                            type: "create" 
                          },
                          { 
                            time: "14:24", 
                            action: "Commission calculated", 
                            user: "RYFT System", 
                            detail: "5% base rate = $2,500", 
                            type: "calculate" 
                          },
                          { 
                            time: "14:25", 
                            action: "Accelerator applied", 
                            user: "RYFT System", 
                            detail: "+2% Q4 bonus = $1,000", 
                            type: "bonus" 
                          },
                          { 
                            time: "14:26", 
                            action: "Total approved", 
                            user: "Sarah Johnson", 
                            detail: "Final amount: $3,500", 
                            type: "approve" 
                          }
                        ].map((event, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 + (index * 0.2) }}
                            className="relative flex items-start gap-6"
                          >
                            {/* Timeline dot */}
                            <div className={`relative z-10 w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                              event.type === 'create' ? 'bg-blue-500' :
                              event.type === 'calculate' ? 'bg-purple-500' :
                              event.type === 'bonus' ? 'bg-orange-500' :
                              'bg-green-500'
                            }`}></div>
                            
                            {/* Event details */}
                            <div className="flex-1 bg-gray-50 rounded-lg p-4 -mt-1">
                              <div className="flex items-center justify-between mb-2">
                                <div className="font-semibold text-navy-900">{event.action}</div>
                                <div className="text-sm text-gray-500">{event.time}</div>
                              </div>
                              <div className="text-sm text-gray-600 mb-1">{event.user}</div>
                              <div className="text-sm font-medium text-navy-700">{event.detail}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Diagonal Split Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white transform skew-y-2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              
              {/* Left: Visual Timeline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline visualization */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="space-y-6">
                    {[
                      { time: "14:23", action: "Deal created", user: "John Smith", amount: "$50,000" },
                      { time: "14:24", action: "Commission calculated", user: "RYFT System", amount: "5% = $2,500" },
                      { time: "14:25", action: "Accelerator applied", user: "RYFT System", amount: "+2% = $1,000" },
                      { time: "14:26", action: "Total approved", user: "Sarah Johnson", amount: "$3,500" }
                    ].map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="text-sm text-gray-500 w-12">{event.time}</div>
                        <div className="w-2 h-2 bg-accent-500 rounded-full" />
                        <div className="flex-1">
                          <div className="font-semibold text-navy-900">{event.action}</div>
                          <div className="text-sm text-gray-600">{event.user}</div>
                        </div>
                        <div className="font-bold text-accent-600">{event.amount}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold text-navy-900 mb-8 leading-tight">
                  Deep visibility into
                  <span className="block text-accent-600">every decision</span>
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                  No more guessing games. See exactly how every commission was calculated,
                  who approved it, and when changes were made.
                </p>

                {/* Interactive Features List */}
                <div className="space-y-6">
                  {[
                    {
                      title: "Transaction-level detail",
                      description: "Deal value, rates, bonuses - everything tracked"
                    },
                    {
                      title: "Complete change history", 
                      description: "Who, what, when - full audit trail of modifications"
                    },
                    {
                      title: "Instant dispute resolution",
                      description: "Step-by-step calculation breakdowns in seconds"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Massive Trust Impact Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Side-by-Side Layout - Title Left, Metrics Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left: Large Impact Statement */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-9xl font-bold text-navy-900 mb-6 leading-none">0</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                    Disputes with
                    <span className="block text-accent-600">complete transparency</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    When every calculation is fully auditable, questions get resolved before they become disputes. Sales teams trust the numbers, and finance has complete visibility.
                  </p>
                </motion.div>
              </div>

              {/* Right: Vertical Metrics Stack */}
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  {[
                    {
                      metric: "100%",
                      label: "Calculation Transparency",
                      description: "Every commission calculation fully auditable with complete step-by-step breakdown"
                    },
                    {
                      metric: "<1min",
                      label: "Resolution Time", 
                      description: "Instant access to audit trails means questions get answered immediately"
                    },
                    {
                      metric: "Zero",
                      label: "Black Boxes",
                      description: "No hidden formulas or mysterious calculations - everything is transparent"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-8 bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="text-4xl font-bold text-accent-600 min-w-[100px]">{item.metric}</div>
                      <div>
                        <div className="text-2xl font-semibold text-navy-900 mb-3">{item.label}</div>
                        <div className="text-lg text-gray-600 leading-relaxed">{item.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Minimalist */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                Ready for complete
                <span className="block text-accent-600">transparency?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-16 leading-relaxed">
                See how audit trails transform commission disputes into instant resolutions.
              </p>
              
              <div className="space-y-6">
                <a
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-navy-900 hover:bg-navy-800 text-white px-12 py-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  See Audit Trails in Action
                </a>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}