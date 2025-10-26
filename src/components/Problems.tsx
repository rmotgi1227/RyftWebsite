'use client';

import { motion } from 'framer-motion';

const problems = [
  {
    title: "Complex Setup",
    description: "Traditional commission systems take months to implement, requiring extensive IT resources and custom integrations.",
    icon: "⚙️",
  },
  {
    title: "Integration Hell",
    description: "Connecting with existing CRM, ERP, and payroll systems often requires expensive consultants and lengthy projects.",
    icon: "🔗",
  },
  {
    title: "Manual Errors",
    description: "Spreadsheet-based calculations lead to costly mistakes, disputes, and hours of manual reconciliation work.",
    icon: "❌",
  },
  {
    title: "No Visibility",
    description: "Sales teams lack real-time commission tracking, leading to confusion and reduced motivation.",
    icon: "👁️",
  },
];

export default function Problems() {
  return (
    <section className="py-s9 bg-navy-50">
      <div className="container">
        <div className="text-center mb-s8">
          <motion.h2 
            className="text-h1 font-semibold text-navy-900 mb-s4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Commission Crisis
          </motion.h2>
          <motion.p 
            className="text-lg text-navy-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Enterprise teams waste countless hours and resources battling outdated commission management systems
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-s6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-s6 shadow-lg hover:shadow-xl transition-all duration-300 border border-navy-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-s4">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-navy-900 mb-s3">
                {problem.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}