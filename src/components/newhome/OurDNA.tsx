'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurDNA() {
  const institutions = [
    { name: 'Y Combinator', logo: '/yc-logo.png', alt: 'Y Combinator' },
    { name: 'Yale', logo: '/yale-logo.png', alt: 'Yale University' },
    { name: 'Duke', logo: '/duke-logo.png', alt: 'Duke University' },
    { name: 'UNC', logo: '/unc-logo.png', alt: 'UNC' },
    // Add more logos as needed - you can use placeholder or actual logos
  ];

  // For now, we'll use text placeholders that look clean
  const displayInstitutions = [
    { name: 'Y Combinator', abbreviation: 'YC' },
    { name: 'Yale University', abbreviation: 'Yale' },
    { name: 'Duke University', abbreviation: 'Duke' },
    { name: 'UNC Chapel Hill', abbreviation: 'UNC' },
    { name: 'Bank of America', abbreviation: 'BofA' },
    { name: 'Wells Fargo', abbreviation: 'Wells Fargo' },
    { name: 'KPMG', abbreviation: 'KPMG' },
    { name: 'Mayo Clinic', abbreviation: 'Mayo Clinic' },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight font-display">
              Our DNA
            </h2>
          </motion.div>

          {/* Logos Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {displayInstitutions.map((institution, index) => (
              <motion.div
                key={institution.name}
                className="flex items-center justify-center w-full h-16 text-gray-400 hover:text-navy-700 transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg font-semibold text-center">
                  {institution.abbreviation}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Built by operators who've seen commission chaos firsthand. 
              Backed by Y Combinator and trusted by teams who can't afford mistakes.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

