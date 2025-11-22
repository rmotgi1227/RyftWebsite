'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import Button from './Button';

const competitorStats = [
  { name: "Traditional Platforms", setup: "3-6 months", cost: "High", complexity: "Expert Required" },
  { name: "RYFT", setup: "5 minutes", cost: "Transparent", complexity: "Business User Friendly" }
];

export default function ComparisonHero() {
  return (
    <Section background="navy-900" padding="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-s6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose RYFT Over{' '}
          <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
            Legacy Platforms?
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-navy-200 mb-s8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          While Spiff, Xactly, Quotapath, and CaptivateIQ require months of setup and technical expertise, 
          RYFT delivers enterprise-grade results in minutes.
        </motion.p>

        {/* Quick Comparison */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-s6 mb-s8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {competitorStats.map((stat, index) => (
            <div 
              key={index}
              className={`p-s6 rounded-2xl border-2 ${
                stat.name === 'RYFT' 
                  ? 'bg-accent-500 border-accent-400 text-white' 
                  : 'bg-white/10 border-white/20 text-white backdrop-blur-sm'
              }`}
            >
              <h3 className={`text-xl font-bold mb-s4 ${
                stat.name === 'RYFT' ? 'text-white' : 'text-navy-200'
              }`}>
                {stat.name}
              </h3>
              <div className="space-y-s3">
                <div className="flex justify-between">
                  <span className="opacity-80">Setup Time:</span>
                  <span className="font-semibold">{stat.setup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Pricing:</span>
                  <span className="font-semibold">{stat.cost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Complexity:</span>
                  <span className="font-semibold">{stat.complexity}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-s4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            variant="secondary" 
            size="lg"
            href="/demo"
            className="w-full sm:w-auto"
          >
            See RYFT in Action →
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            href="/product"
            className="w-full sm:w-auto border-white/20 hover:border-white/40 text-white hover:bg-white/10"
          >
            Explore Features
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}