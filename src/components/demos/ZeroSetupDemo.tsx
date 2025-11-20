'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ZeroSetupDemo() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { label: 'Connect CRM', status: 'pending' },
    { label: 'Connect HRIS', status: 'pending' },
    { label: 'Upload Comp Plans', status: 'pending' },
    { label: 'AI Does Everything', status: 'pending' },
    { label: 'Go Live!', status: 'pending' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev >= steps.length - 1) {
          setProgress(0);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [steps.length]);

  useEffect(() => {
    if (step < steps.length) {
      const progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 100;
          }
          return prev + 5;
        });
      }, 100);

      return () => clearInterval(progressTimer);
    }
  }, [step]);

  return (
    <div className="bg-white rounded-lg p-8 min-h-96 flex flex-col justify-center">
      <div className="text-center mb-6">
        <div className="text-2xl font-bold text-navy-900 mb-2">5-Minute Setup</div>
        <div className="text-sm text-navy-600">Watch RYFT deploy automatically</div>
      </div>

      {/* Steps Progress */}
      <div className="space-y-3 mb-8">
        {steps.map((stepItem, index) => (
          <motion.div 
            key={index}
            className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
              index === step ? 'bg-blue-50 border-l-4 border-blue-500' : 
              index < step ? 'bg-green-50 border-l-4 border-green-500' : 
              'bg-gray-50'
            }`}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: index <= step ? 1 : 0.5 }}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              index === step ? 'bg-blue-500' : 
              index < step ? 'bg-green-500' : 
              'bg-gray-300'
            }`}>
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <div className="flex-1">
              <div className={`font-medium ${
                index === step ? 'text-blue-700' : 
                index < step ? 'text-green-700' : 
                'text-gray-600'
              }`}>
                {stepItem.label}
              </div>
              {index === step && (
                <div className="mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}
            </div>
            {index < step && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Current Step Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-center p-4 bg-navy-900 rounded-lg text-white"
        >
          {step === 0 && "Connect your CRM to sync deals and reps"}
          {step === 1 && "Connect HRIS to map team hierarchies"}
          {step === 2 && "Upload your commission plan documents"}
          {step === 3 && "AI parses plans and configures everything automatically"}
          {step === 4 && "Ready to process commissions!"}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}