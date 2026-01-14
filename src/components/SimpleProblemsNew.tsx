'use client';

import { motion } from 'framer-motion';

export default function SimpleProblemsNew() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Message */}
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight font-display px-4">
              The problem with commission tracking
            </h2>
            <p className="text-lg sm:text-xl text-navy-600 max-w-3xl mx-auto px-4">
              Manual processes, spreadsheet errors, and trust issues cost companies millions every year.
            </p>
          </motion.div>

          {/* Simple Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            
            {/* Card 1: Revenue Loss */}
            <motion.div 
              className="bg-gray-50 rounded-xl border border-gray-200 p-6 sm:p-8 text-left hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 sm:mb-4">Revenue Loss</div>
              <div className="text-base sm:text-lg text-navy-700 leading-relaxed">Companies lose $15M+ annually from commission errors and disputes that delay payments and damage relationships.</div>
            </motion.div>

            {/* Card 2: Trust Crisis */}
            <motion.div 
              className="bg-gray-50 rounded-xl border border-gray-200 p-6 sm:p-8 text-left hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 sm:mb-4">Trust Crisis</div>
              <div className="text-base sm:text-lg text-navy-700 leading-relaxed">Only 47% of sales reps trust their commission calculations, leading to disputes and low team morale.</div>
            </motion.div>

            {/* Card 3: Setup Costs */}
            <motion.div 
              className="bg-gray-50 rounded-xl border border-gray-200 p-6 sm:p-8 text-left hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 sm:mb-4">Setup Burden</div>
              <div className="text-base sm:text-lg text-navy-700 leading-relaxed">3-6 month implementations with $25K+ setup fees make switching platforms painful and expensive.</div>
            </motion.div>

          </div>


        </div>
      </div>
    </section>
  );
}