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
    <section className="bg-white pt-16 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          

          {/* Main Content - Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            
            {/* Left: Headline & Copy */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight font-display"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Stop Wasting Hours Every Month on Commissions
              </motion.h1>
              
              <motion.p 
                className="text-xl text-navy-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                RYFT is the first zero-setup commission platform that deploys in under 2 minutes with AI-powered automation.
              </motion.p>

              {/* Interactive Toggle */}
              <motion.div 
                className="flex items-center justify-center gap-6 mb-8 bg-gray-50 rounded-full px-6 py-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button
                  onClick={() => setActiveDemo('chaos')}
                  className={`px-3 py-1 text-sm font-medium transition-all duration-300 ${
                    activeDemo === 'chaos' 
                      ? 'text-red-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Manual Process
                </button>
                <div className="text-gray-400">→</div>
                <button
                  onClick={() => setActiveDemo('ryft')}
                  className={`px-3 py-1 text-sm font-medium transition-all duration-300 ${
                    activeDemo === 'ryft' 
                      ? 'text-green-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  RYFT Automation
                </button>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.a
                  href="https://app.ryft.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-bold text-center transition-all duration-200 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try it Free
                </motion.a>
                <motion.a
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-navy-300 hover:border-navy-400 text-navy-700 hover:text-navy-900 px-8 py-4 rounded-lg font-bold transition-all duration-200 hover:bg-navy-50 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Talk to Sales
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Interactive Dashboard Demo */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 shadow-2xl border relative overflow-hidden">
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
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

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                5min setup
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold"
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