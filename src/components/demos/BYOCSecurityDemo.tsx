'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BYOCSecurityDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 h-80 flex flex-col justify-center">
      <div className="text-center mb-8">
        <div className="text-2xl font-bold text-navy-900 mb-2">BYOC Architecture</div>
        <div className="text-sm text-navy-600">Your data never leaves your cloud</div>
      </div>

      {/* Simple Security Flow */}
      <div className="flex items-center justify-between px-8">
        
        {/* Your Cloud */}
        <motion.div
          className={`w-24 h-24 rounded-lg border-2 flex flex-col items-center justify-center ${
            step === 0 ? 'bg-blue-50 border-blue-500 shadow-lg' : 'bg-gray-50 border-gray-200'
          }`}
          animate={{ scale: step === 0 ? 1.05 : 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-6 h-6 bg-blue-500 rounded mb-1" />
          <div className="text-xs text-navy-900 font-medium text-center">Your<br />Cloud</div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="flex items-center px-4"
          animate={{ opacity: step === 1 ? 1 : 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-2xl text-blue-500"
            animate={{ x: step === 1 ? [0, 10, 0] : 0 }}
            transition={{ repeat: step === 1 ? Infinity : 0, duration: 1.5 }}
          >
            →
          </motion.div>
        </motion.div>

        {/* RYFT Service */}
        <motion.div
          className={`w-24 h-24 rounded-lg border-2 flex flex-col items-center justify-center ${
            step === 2 ? 'bg-purple-50 border-purple-500 shadow-lg' : 'bg-gray-50 border-gray-200'
          }`}
          animate={{ scale: step === 2 ? 1.05 : 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-6 h-6 bg-purple-500 rounded mb-1" />
          <div className="text-xs text-navy-900 font-medium text-center">RYFT<br />Service</div>
        </motion.div>
      </div>

      {/* Status Messages */}
      <div className="mt-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-navy-700"
          >
            {step === 0 && "Your data stays in your cloud infrastructure"}
            {step === 1 && "Encrypted API calls for calculations only"}
            {step === 2 && "RYFT has zero access to your commission data"}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}