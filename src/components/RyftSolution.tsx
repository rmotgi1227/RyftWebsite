'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Button from './Button';

const differentiators = [
  {
    title: "Actually Works Out of the Box",
    description: "Upload your comp plan, connect your CRM, and you're done. No 6-month implementation projects.",
    highlight: "Minutes, not months"
  },
  {
    title: "AI That Reads Your Comp Plans", 
    description: "Just upload a PDF of your commission structure. Our AI figures out the math so you don't have to.",
    highlight: "No manual setup"
  },
  {
    title: "Change Plans Mid-Quarter",
    description: "Market changed? Comp plan needs an update? Do it in real-time without breaking everything.",
    highlight: "Zero downtime changes"
  },
  {
    title: "Built for Growing Companies",
    description: "Enterprise tools are overkill. Spreadsheets are too simple. RYFT is built for companies that are scaling fast.",
    highlight: "Goldilocks solution"
  }
];

export default function RyftSolution() {
  return (
    <Section background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-s8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            title="How RYFT Actually Fixes This"
            subtitle="Stop fighting your commission system. Start using one that actually works."
            align="left"
          />

          <div className="space-y-s6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                className="flex gap-s4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-s2">
                    {diff.title}
                  </h3>
                  <p className="text-navy-600 mb-s2 leading-relaxed">
                    {diff.description}
                  </p>
                  <span className="inline-block bg-accent-100 text-accent-700 px-s3 py-1 rounded-full text-sm font-semibold">
                    {diff.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-s8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button variant="primary" size="lg" href="/vs-competitors">
              See Detailed Comparison →
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Interactive Demo Preview */}
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-s6 shadow-2xl">
            <div className="bg-white rounded-xl p-s6">
              {/* Browser Bar */}
              <div className="flex items-center gap-s3 mb-s5 pb-s3 border-b border-navy-100">
                <div className="flex gap-s2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-navy-600 text-sm font-medium">RYFT Dashboard - Commission Setup</span>
              </div>
              
              {/* Setup Progress */}
              <div className="mb-s5">
                <div className="flex justify-between items-center mb-s2">
                  <span className="text-navy-700 font-medium text-sm">Setup Progress</span>
                  <span className="text-accent-600 font-bold text-sm">4 of 4 Complete ✓</span>
                </div>
                <div className="w-full bg-navy-100 rounded-full h-2">
                  <motion.div 
                    className="bg-accent-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>

              {/* Commission Data */}
              <div className="space-y-s4">
                <div className="flex justify-between items-center p-s3 bg-accent-50 rounded-lg">
                  <span className="text-navy-700 font-medium">AI Plan Parsing</span>
                  <span className="text-accent-600 font-bold">Complete</span>
                </div>
                
                <div className="flex justify-between items-center p-s3 bg-green-50 rounded-lg">
                  <span className="text-navy-700 font-medium">CRM Integration</span>
                  <span className="text-green-600 font-bold">Connected</span>
                </div>

                <div className="flex justify-between items-center p-s3 bg-blue-50 rounded-lg">
                  <span className="text-navy-700 font-medium">Payroll Sync</span>
                  <span className="text-blue-600 font-bold">Active</span>
                </div>
                
                <div className="p-s4 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg text-white text-center">
                  <div className="text-2xl font-bold mb-s1">🎉 You're Live!</div>
                  <div className="text-sm opacity-90">Commission calculations running automatically</div>
                </div>
              </div>
            </div>

            {/* Time Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-accent-500 text-white px-s4 py-s2 rounded-full font-bold text-sm shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚡ 4 min 32s
            </motion.div>
          </div>

          {/* Competitor Comparison Badge */}
          <motion.div
            className="absolute -bottom-4 -left-4 bg-white border-2 border-accent-200 px-s4 py-s3 rounded-xl font-semibold text-sm shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-navy-900 mb-s1">Traditional Platforms:</div>
            <div className="text-red-500">3-6 months setup ❌</div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}