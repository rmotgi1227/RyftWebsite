'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    number: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability"
  },
  {
    number: "< 5min",
    label: "Average Setup",
    description: "From signup to first calculation"
  },
  {
    number: "500K+",
    label: "Commissions Processed",
    description: "Trusted by leading teams"
  },
  {
    number: "95%",
    label: "Time Savings",
    description: "Reduced manual work"
  }
];

const logos = [
  { name: "Enterprise Corp", width: "120" },
  { name: "Global Solutions", width: "140" },
  { name: "TechFlow Inc", width: "110" },
  { name: "Scale Ventures", width: "130" },
  { name: "InnovateNow", width: "125" },
];

export default function SocialProof() {
  return (
    <section className="py-s9 bg-white">
      <div className="container">
        {/* Trust Indicators */}
        <motion.div 
          className="text-center mb-s8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-navy-600 mb-s6">Trusted by enterprise teams worldwide</p>
          
          {/* Company Logos */}
          <div className="flex flex-wrap justify-center items-center gap-s6 mb-s8 opacity-60">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="bg-navy-100 rounded-lg px-s4 py-s3 font-semibold text-navy-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ width: logo.width + 'px' }}
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-s6 mb-s8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-s5 rounded-xl bg-navy-50 border border-navy-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-s2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-navy-900 mb-s1">
                {stat.label}
              </div>
              <div className="text-sm text-navy-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-s6 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-s2 bg-navy-50 px-s4 py-s2 rounded-lg border border-navy-100">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-navy-700 font-medium text-sm">SOC 2 Compliant</span>
          </div>
          
          <div className="flex items-center gap-s2 bg-navy-50 px-s4 py-s2 rounded-lg border border-navy-100">
            <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-navy-700 font-medium text-sm">256-bit Encryption</span>
          </div>
          
          <div className="flex items-center gap-s2 bg-navy-50 px-s4 py-s2 rounded-lg border border-navy-100">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-navy-700 font-medium text-sm">GDPR Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}