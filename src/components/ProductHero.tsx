'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import Button from './Button';
import InteractiveCounter from './InteractiveCounter';

export default function ProductHero() {
  return (
    <Section background="navy-900" padding="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-3 h-3 bg-accent-400 rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-s6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Enterprise Commission Management.{' '}
          <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
            Simplified.
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-navy-200 mb-s8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Everything you need to automate, calculate, and manage commissions with enterprise-grade precision and zero setup complexity.
        </motion.p>

        {/* Key Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-s8 mb-s8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400 mb-s2">5min</div>
            <div className="text-navy-300 text-sm">Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400 mb-s2">99.99%</div>
            <div className="text-navy-300 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400 mb-s2">100+</div>
            <div className="text-navy-300 text-sm">Integrations</div>
          </div>
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
            Book a Demo →
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            href="/vs-competitors"
            className="w-full sm:w-auto border-white/20 hover:border-white/40 text-white hover:bg-white/10"
          >
            See Comparison
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}