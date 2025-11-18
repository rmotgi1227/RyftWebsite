'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: "Instant Deployment",
    description: "Go live in under 5 minutes with our zero-configuration platform. No IT team required.",
    icon: "🚀",
    highlight: "5 min setup"
  },
  {
    title: "Advanced Analytics",
    description: "Real-time insights with customizable dashboards and automated reporting for data-driven decisions.",
    icon: "📊",
    highlight: "Real-time data"
  },
  {
    title: "Team Collaboration",
    description: "Multi-team workspace with role-based permissions and seamless communication tools.",
    icon: "👥",
    highlight: "Enterprise ready"
  },
  {
    title: "Smart Automation",
    description: "AI-powered calculations that eliminate errors and reduce manual work by 95%.",
    icon: "🤖",
    highlight: "95% less manual work"
  },
  {
    title: "Global Compliance",
    description: "Built-in compliance for international markets with automatic tax calculations and reporting.",
    icon: "🌍",
    highlight: "Multi-region support"
  },
  {
    title: "API-First Platform",
    description: "Connect with any system using our robust API and pre-built integrations ecosystem.",
    icon: "🔌",
    highlight: "100+ integrations"
  }
];

export default function Features() {
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
            Built for Enterprise Scale
          </motion.h2>
          <motion.p 
            className="text-lg text-navy-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Every feature designed with enterprise needs in mind, delivering power without complexity
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-s6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-xl p-s6 shadow-lg hover:shadow-xl transition-all duration-500 border border-navy-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-navy-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-s4">
                  <div className="text-4xl">{feature.icon}</div>
                  <span className="text-xs font-semibold text-accent-600 bg-accent-100 px-s2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-navy-900 mb-s3 group-hover:text-accent-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-navy-600 leading-relaxed group-hover:text-navy-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-s4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-accent-600 font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subtle Border Animation */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent-200 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-s8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}