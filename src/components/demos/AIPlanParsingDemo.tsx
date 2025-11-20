'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIPlanParsingDemo() {
  const [parsingStep, setParsingStep] = useState(0);
  const [extractedRules, setExtractedRules] = useState<string[]>([]);

  const planText = [
    "Sales Commission Plan Q4 2024",
    "Base Rate: 8% on all sales",
    "Accelerator: 12% after $100K quota",
    "Clawback: 50% if deal churns <90 days",
    "Team Bonus: $5K if team hits 120%"
  ];

  const rules = [
    { label: "Base Rate", value: "8%", extracted: false },
    { label: "Accelerator", value: "12% > $100K", extracted: false },
    { label: "Clawback", value: "50% < 90 days", extracted: false },
    { label: "Team Bonus", value: "$5K @ 120%", extracted: false }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setParsingStep(prev => {
        if (prev >= planText.length + rules.length) {
          setExtractedRules([]);
          return 0;
        }
        
        if (prev >= planText.length) {
          const ruleIndex = prev - planText.length;
          if (ruleIndex < rules.length) {
            setExtractedRules(prev => [...prev, rules[ruleIndex].label]);
          }
        }
        
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 h-80 flex flex-col">
      <div className="text-center mb-6">
        <div className="text-2xl font-bold text-navy-900 mb-2">AI Plan Parsing</div>
        <div className="text-sm text-navy-600">Watch AI extract commission rules</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        
        {/* Left: Original Plan */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-semibold text-gray-700 mb-3">
            Commission Plan PDF
          </div>
          <div className="space-y-2 font-mono text-xs">
            {planText.map((line, index) => (
              <motion.div
                key={index}
                className={`p-2 rounded ${
                  index < parsingStep ? 'bg-blue-100 text-blue-800' : 'text-gray-400'
                }`}
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: index < parsingStep ? 1 : 0.3,
                  scale: index === parsingStep - 1 ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Extracted Rules */}
        <div className="bg-navy-50 rounded-lg p-4">
          <div className="text-sm font-semibold text-navy-700 mb-3 flex items-center gap-2">
            AI Extracted Rules
            {extractedRules.length > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
              />
            )}
          </div>
          <div className="space-y-3">
            {rules.map((rule, index) => (
              <AnimatePresence key={rule.label}>
                {extractedRules.includes(rule.label) && (
                  <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-white border border-green-200 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-navy-900">{rule.label}</div>
                      <div className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                        {rule.value}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {extractedRules.length === rules.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-green-100 border border-green-200 rounded-lg text-center"
            >
              <div className="text-green-700 font-semibold text-sm">
                Plan parsed successfully!
              </div>
              <div className="text-green-600 text-xs mt-1">
                Ready for automatic configuration
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}