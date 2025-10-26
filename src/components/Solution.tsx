'use client';

import { motion } from 'framer-motion';

const benefits = [
  "True zero-setup deployment",
  "Enterprise-grade security & compliance",
  "Real-time commission tracking",
  "Seamless integrations with 100+ tools",
  "Automated calculations & reconciliation",
  "Mobile-first dashboard experience"
];

export default function Solution() {
  return (
    <section className="py-s9 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-s8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h1 font-semibold text-navy-900 mb-s5">
              RYFT Changes{' '}
              <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">
                Everything
              </span>
            </h2>
            
            <p className="text-lg text-navy-600 mb-s6 leading-relaxed">
              We've reimagined commission management from the ground up. 
              No complex setup. No integration headaches. Just pure, 
              enterprise-grade performance that works out of the box.
            </p>

            <div className="space-y-s3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-s3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-navy-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-s7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                See RYFT in Action
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Dashboard Mockup */}
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-s6 shadow-2xl">
              <div className="bg-white rounded-xl p-s5">
                <div className="flex items-center gap-s3 mb-s5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-s3 text-navy-600 text-sm font-medium">RYFT Dashboard</span>
                </div>
                
                <div className="space-y-s4">
                  <div className="flex justify-between items-center p-s3 bg-navy-50 rounded-lg">
                    <span className="text-navy-700 font-medium">Total Commissions</span>
                    <span className="text-2xl font-bold text-accent-600">$847,392</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-s3">
                    <div className="p-s3 bg-accent-50 rounded-lg">
                      <div className="text-accent-600 text-sm font-medium">This Month</div>
                      <div className="text-xl font-bold text-navy-900">$124,567</div>
                    </div>
                    <div className="p-s3 bg-green-50 rounded-lg">
                      <div className="text-green-600 text-sm font-medium">Growth</div>
                      <div className="text-xl font-bold text-navy-900">+23.4%</div>
                    </div>
                  </div>
                  
                  <div className="h-20 bg-gradient-to-r from-accent-100 to-accent-200 rounded-lg flex items-end justify-between p-s3">
                    <div className="w-2 bg-accent-500 rounded-t" style={{height: '40%'}}></div>
                    <div className="w-2 bg-accent-500 rounded-t" style={{height: '60%'}}></div>
                    <div className="w-2 bg-accent-500 rounded-t" style={{height: '80%'}}></div>
                    <div className="w-2 bg-accent-500 rounded-t" style={{height: '90%'}}></div>
                    <div className="w-2 bg-accent-600 rounded-t" style={{height: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-accent-500 text-white px-s4 py-s2 rounded-full font-semibold text-sm shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚡ Zero Setup
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}