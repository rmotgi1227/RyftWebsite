'use client';

import { motion } from 'framer-motion';

export default function SimpleProblemsNew() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Message */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display">
              Commission chaos is killing your growth.
            </h2>
          </motion.div>

          {/* Simple Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Card 1: Revenue Loss */}
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-xl font-bold text-navy-900 mb-3">Revenue Loss</div>
              <div className="text-navy-700 mb-4">Companies lose $15M+ annually from commission errors and disputes</div>
            </motion.div>

            {/* Card 2: Trust Crisis */}
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-xl font-bold text-navy-900 mb-3">Trust Crisis</div>
              <div className="text-navy-700 mb-4">Only 47% of sales reps trust their commission calculations</div>
            </motion.div>

            {/* Card 3: Setup Costs */}
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-xl font-bold text-navy-900 mb-3">Setup Burden</div>
              <div className="text-navy-700 mb-4">3-6 month implementations with $25K+ setup fees</div>
            </motion.div>

          </div>


        </div>
      </div>
    </section>
  );
}