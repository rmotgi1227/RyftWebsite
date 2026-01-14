'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function InteractiveHero() {
  const [activeDemo, setActiveDemo] = useState<'chaos' | 'ryft'>('chaos');
  const [calculationStep, setCalculationStep] = useState(0);
  const [dealAmount, setDealAmount] = useState(75000);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-cycle between chaos and RYFT every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo(prev => prev === 'chaos' ? 'ryft' : 'chaos');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Calculation animation steps
  useEffect(() => {
    if (activeDemo === 'ryft') {
      const steps = setInterval(() => {
        setCalculationStep(prev => (prev + 1) % 4);
      }, 800);
      return () => clearInterval(steps);
    }
  }, [activeDemo]);

  const triggerCalculation = () => {
    setIsAnimating(true);
    setDealAmount(Math.floor(Math.random() * 100000) + 50000);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <section className="bg-white pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Tagline */}
          <motion.div 
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm font-semibold text-accent-600 uppercase tracking-wider">
              AI for Commission Management
            </span>
          </motion.div>

          {/* Main Content - Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center mb-12 sm:mb-16 md:mb-20">
            
            {/* Left: Headline & Copy */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-4 sm:mb-6 md:mb-8 leading-[1.1] font-display px-4 lg:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Commission tracking that just works.
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-navy-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 lg:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Zero-setup commission automation. Deploy in minutes, eliminate manual work forever.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-4 lg:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="https://app.ryft.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-900 hover:bg-navy-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-center transition-all duration-200 w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try it Free
                </motion.a>
                <motion.a
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-navy-900 hover:bg-navy-900 hover:text-white text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 text-center w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Demo
                </motion.a>
              </motion.div>

              {/* Interactive Toggle */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-4 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button
                  onClick={() => setActiveDemo('chaos')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeDemo === 'chaos' 
                      ? 'text-red-600 bg-red-50' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Manual Process
                </button>
                <div className="text-gray-300">→</div>
                <button
                  onClick={() => setActiveDemo('ryft')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeDemo === 'ryft' 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  RYFT Automation
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Interactive Dashboard Demo */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl border border-gray-200 relative overflow-hidden">
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30, 41, 59, 0.15) 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }}></div>
                </div>

                {activeDemo === 'chaos' ? (
                  /* Spreadsheet Chaos */
                  <div className="relative z-10 transition-all duration-500">
                    <div className="bg-white rounded-lg border shadow-sm">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="ml-2 font-medium">commission_tracking_Q4_FINAL_v23.xlsx</span>
                      </div>
                      
                      <div className="p-4">
                        <div className="grid grid-cols-4 gap-2 text-xs mb-3">
                          <div className="font-bold bg-gray-100 p-2 rounded">Rep Name</div>
                          <div className="font-bold bg-gray-100 p-2 rounded">Q4 Sales</div>
                          <div className="font-bold bg-gray-100 p-2 rounded">Commission %</div>
                          <div className="font-bold bg-gray-100 p-2 rounded">Total</div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="grid grid-cols-4 gap-2 text-xs">
                            <div className="p-2">John Smith</div>
                            <div className="p-2">$125,000</div>
                            <div className="p-2 bg-red-100 text-red-600 font-bold rounded animate-pulse">#REF!</div>
                            <div className="p-2 bg-red-100 text-red-600 font-bold rounded">ERROR</div>
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-xs">
                            <div className="p-2">Sarah Johnson</div>
                            <div className="p-2">$98,500</div>
                            <div className="p-2 bg-yellow-100 text-yellow-600 rounded">3.5% (?)</div>
                            <div className="p-2">$3,447.50</div>
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-xs">
                            <div className="p-2">Mike Chen</div>
                            <div className="p-2 bg-orange-100 text-orange-600 rounded">PENDING</div>
                            <div className="p-2">5.2%</div>
                            <div className="p-2">???</div>
                          </div>
                        </div>

                        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                          <div className="text-red-700 font-medium text-xs mb-1">⚠️ Issues Detected:</div>
                          <div className="text-red-600 text-xs space-y-1">
                            <div>• Formula errors in cells C3:C7</div>
                            <div>• Manual calculations pending review</div>
                            <div>• Plan changes not reflected</div>
                            <div>• 47 Slack messages about missing commissions</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* RYFT Dashboard */
                  <div className="relative z-10 transition-all duration-500">
                    <div className="bg-white rounded-lg border shadow-sm">
                      <div className="bg-navy-900 text-white px-4 py-2 rounded-t-lg flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="font-medium">RYFT Commission Dashboard</span>
                        </div>
                        <div className="text-green-400 text-xs">LIVE</div>
                      </div>
                      
                      <div className="p-4">
                        {/* Live Calculation Demo */}
                        <div className="bg-navy-50 rounded-lg p-4 mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-navy-700">New Deal Closed</span>
                            <div className={`w-2 h-2 rounded-full ${isAnimating ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                          </div>
                          <div className="text-lg font-bold text-navy-900">${dealAmount.toLocaleString()}</div>
                          <div className="text-xs text-navy-500 mt-1">
                            {calculationStep === 0 && "Syncing from Salesforce..."}
                            {calculationStep === 1 && "Applying commission rules..."}
                            {calculationStep === 2 && "Calculating payout..."}
                            {calculationStep === 3 && "✅ Commission processed: $" + (dealAmount * 0.08).toLocaleString()}
                          </div>
                        </div>

                        {/* Team Performance */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="text-center bg-green-50 rounded-lg p-3">
                            <div className="text-lg font-bold text-green-600">$247K</div>
                            <div className="text-xs text-green-700">Total Earned</div>
                          </div>
                          <div className="text-center bg-blue-50 rounded-lg p-3">
                            <div className="text-lg font-bold text-blue-600">89%</div>
                            <div className="text-xs text-blue-700">Quota Attained</div>
                          </div>
                          <div className="text-center bg-purple-50 rounded-lg p-3">
                            <div className="text-lg font-bold text-purple-600">$18K</div>
                            <div className="text-xs text-purple-700">This Month</div>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="text-green-700 font-medium text-xs mb-1">✅ All Systems Operational</div>
                          <div className="text-green-600 text-xs space-y-1">
                            <div>• Real-time CRM sync active</div>
                            <div>• All calculations verified</div>
                            <div>• Zero manual intervention required</div>
                            <div>• Next sync: 2 minutes</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Elements - More subtle */}
              <motion.div 
                className="absolute -top-2 -right-2 bg-navy-900 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                5min setup
              </motion.div>
              <motion.div 
                className="absolute -bottom-2 -left-2 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                99.9% accurate
              </motion.div>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
}