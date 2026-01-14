'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LiveDashboardDemo() {
  const [demoState, setDemoState] = useState('empty');
  const [dealValue, setDealValue] = useState(0);
  const [commissionData, setCommissionData] = useState({
    totalEarned: 0,
    thisMonth: 0,
    quotaAttained: 0,
    activeReps: 0
  });
  const [notifications, setNotifications] = useState<Array<{id: number; type: string; message: string; time: string}>>([]);
  const [syncProgress, setSyncProgress] = useState(0);

  // Demo states progression
  useEffect(() => {
    const sequence = [
      { state: 'empty', duration: 2000 },
      { state: 'syncing', duration: 3000 },
      { state: 'calculating', duration: 2500 },
      { state: 'live', duration: 4000 },
      { state: 'complete', duration: 3000 }
    ];

    let currentIndex = 0;
    
    const runSequence = () => {
      const currentPhase = sequence[currentIndex];
      setDemoState(currentPhase.state);
      
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % sequence.length;
        runSequence();
      }, currentPhase.duration);
    };

    runSequence();
  }, []);

  // Animate data based on demo state
  useEffect(() => {
    switch(demoState) {
      case 'empty':
        setDealValue(0);
        setCommissionData({ totalEarned: 0, thisMonth: 0, quotaAttained: 0, activeReps: 0 });
        setSyncProgress(0);
        setNotifications([]);
        break;
        
      case 'syncing':
        setSyncProgress(0);
        const syncInterval = setInterval(() => {
          setSyncProgress(prev => {
            if (prev >= 100) {
              clearInterval(syncInterval);
              return 100;
            }
            return prev + 8;
          });
        }, 100);
        break;
        
      case 'calculating':
        setDealValue(0);
        const dealInterval = setInterval(() => {
          setDealValue(prev => {
            if (prev >= 75000) {
              clearInterval(dealInterval);
              return 75000;
            }
            return prev + 2500;
          });
        }, 50);
        break;
        
      case 'live':
        setCommissionData({
          totalEarned: 247000,
          thisMonth: 18500,
          quotaAttained: 89,
          activeReps: 12
        });
        setNotifications([
          { id: 1, type: 'success', message: 'Commission calculated for Sarah J.', time: 'now' },
          { id: 2, type: 'sync', message: 'Salesforce data synced', time: '1m ago' }
        ]);
        break;
        
      case 'complete':
        setNotifications(prev => [...prev, 
          { id: 3, type: 'resolved', message: 'Dispute auto-resolved for Mike R.', time: 'just now' }
        ]);
        break;
    }
  }, [demoState]);

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight font-display px-4">
              See RYFT in action
            </h2>
            <p className="text-lg sm:text-xl text-navy-600 max-w-3xl mx-auto px-4">
              Watch commissions calculate in real-time as deals close. No manual work required.
            </p>
          </motion.div>

          {/* Demo and Features Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            
            {/* Left: Live Dashboard Demo */}
            <motion.div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-4 sm:p-6 shadow-2xl border relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
            
            {/* Dashboard Header */}
            <div className="bg-white rounded-lg border shadow-sm min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex flex-col">
              <div className="bg-navy-900 text-white px-3 sm:px-4 py-2 rounded-t-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    demoState === 'empty' ? 'bg-gray-400' :
                    demoState === 'syncing' ? 'bg-yellow-400 animate-pulse' :
                    'bg-green-400 animate-pulse'
                  }`}></div>
                  <span className="font-medium text-sm sm:text-base">RYFT</span>
                </div>
                <div className="text-green-400 text-xs">
                  {demoState === 'empty' && 'Connecting...'}
                  {demoState === 'syncing' && 'Syncing Data'}
                  {demoState === 'calculating' && 'Processing'}
                  {(demoState === 'live' || demoState === 'complete') && 'LIVE'}
                </div>
              </div>

              <div className="p-3 sm:p-4 h-72 sm:h-80 md:h-96 overflow-hidden">
                
                {/* Sync Progress Bar - Always Present but Hidden */}
                <div className={`bg-gray-50 rounded-lg p-4 mb-4 ${(demoState === 'syncing' || demoState === 'calculating') ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {demoState === 'syncing' ? 'Syncing CRM Data' : 'Processing Commission Rules'}
                    </span>
                    <span className="text-sm text-gray-600">{syncProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-navy-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${syncProgress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Real-time Deal Processing - Always Present but Hidden */}
                <div className={`bg-navy-900 rounded-lg p-4 text-white mb-4 ${(demoState === 'calculating' || demoState === 'live' || demoState === 'complete') ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-400 text-sm font-medium">LIVE DEAL PROCESSING</span>
                    <div className={`w-2 h-2 rounded-full ${dealValue > 0 ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold">${dealValue.toLocaleString()}</div>
                      <div className="text-navy-300 text-sm">New Deal Value</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-400">
                        ${(dealValue * 0.08).toLocaleString()}
                      </div>
                      <div className="text-navy-300 text-sm">Commission Calculated</div>
                    </div>
                  </div>
                  
                  {dealValue > 0 && (
                    <div className="mt-3 text-xs text-green-400 bg-green-900/30 rounded px-2 py-1">
                      ✅ Auto-applied: 8% base rate + Q4 accelerator
                    </div>
                  )}
                </div>

                {/* Team Performance Metrics - Always Present but Hidden */}
                <div className={`grid grid-cols-2 gap-2 mb-4 ${(demoState === 'live' || demoState === 'complete') ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-navy-900">
                      ${commissionData.totalEarned.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">Total Earned</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-navy-900">
                      ${commissionData.thisMonth.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">This Month</div>
                  </div>
                </div>

                {/* Empty State - Always Present but Hidden */}
                <div className={`text-center py-12 ${demoState === 'empty' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-4xl mb-4">📊</div>
                  <div className="text-gray-500 mb-2">Connecting to your systems...</div>
                  <div className="text-sm text-gray-400">This will take about 5 minutes to set up</div>
                </div>
              </div>
            </div>
            </motion.div>

            {/* Right: Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="px-4 lg:px-0"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-8">Watch RYFT in Action</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <motion.div 
                  className="border-l-4 border-navy-900 pl-4 sm:pl-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-lg sm:text-xl font-bold text-navy-900 mb-2">Zero Manual Setup</div>
                  <div className="text-sm sm:text-base text-navy-600">Connect CRM & HRIS in minutes. AI automatically maps your architecture and configures everything.</div>
                </motion.div>
                
                <motion.div 
                  className="border-l-4 border-navy-900 pl-4 sm:pl-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-lg sm:text-xl font-bold text-navy-900 mb-2">AI Powered Parsing</div>
                  <div className="text-sm sm:text-base text-navy-600">Upload commission plans in any format. AI reads PDFs, Word docs, and Excel files automatically.</div>
                </motion.div>
                
                <motion.div 
                  className="border-l-4 border-navy-900 pl-4 sm:pl-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-lg sm:text-xl font-bold text-navy-900 mb-2">Deal Transparency</div>
                  <div className="text-sm sm:text-base text-navy-600">Complete audit trails for every calculation. Your team sees exactly how commissions are calculated.</div>
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get This Dashboard For Your Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}