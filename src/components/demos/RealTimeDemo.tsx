'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RealTimeDemo() {
  const [deals, setDeals] = useState<any[]>([]);
  const [totalCommissions, setTotalCommissions] = useState(0);

  const sampleDeals = [
    { id: 1, rep: 'Sarah J.', amount: 45000, commission: 3600, time: 'now' },
    { id: 2, rep: 'Mike R.', amount: 78000, commission: 6240, time: 'now' },
    { id: 3, rep: 'Alex T.', amount: 32000, commission: 2560, time: 'now' },
    { id: 4, rep: 'Emma L.', amount: 67000, commission: 5360, time: 'now' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomDeal = sampleDeals[Math.floor(Math.random() * sampleDeals.length)];
      const newDeal = {
        ...randomDeal,
        id: Date.now(),
        time: 'now'
      };

      setDeals(prev => [newDeal, ...prev.slice(0, 2)]);
      setTotalCommissions(prev => prev + newDeal.commission);

      // Update time stamps
      setTimeout(() => {
        setDeals(prev => prev.map(deal => ({
          ...deal,
          time: deal.id === newDeal.id ? '30s ago' : deal.time === 'now' ? '1m ago' : '2m ago'
        })));
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 h-80 flex flex-col">
      <div className="text-center mb-6">
        <div className="text-2xl font-bold text-navy-900 mb-2">Real-time Calculations</div>
        <div className="text-sm text-navy-600">Watch live commission processing</div>
      </div>

      {/* Stats Header */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 rounded-lg p-3 text-center">
          <motion.div 
            className="text-xl font-bold text-green-600"
            key={totalCommissions}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            ${totalCommissions.toLocaleString()}
          </motion.div>
          <div className="text-xs text-green-700">Total Commissions</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <div className="text-xl font-bold text-blue-600">&lt;1s</div>
          <div className="text-xs text-blue-700">Processing Time</div>
        </div>
      </div>

      {/* Live Deal Feed */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="text-sm font-semibold text-navy-700">Live Deal Feed</div>
        </div>

        <div className="space-y-3 h-32 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {deals.map((deal) => (
              <motion.div
                key={deal.id}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.8 }}
                className="bg-navy-900 text-white rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">{deal.rep}</div>
                  <div className="text-xs bg-green-500 px-2 py-1 rounded">
                    CALCULATED
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-navy-300">Deal Value</div>
                    <div className="font-bold">${deal.amount.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-navy-300">Commission</div>
                    <div className="font-bold text-green-400">${deal.commission.toLocaleString()}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 text-xs">
                  <div className="text-navy-300">{deal.time}</div>
                  <div className="flex items-center gap-1 text-green-400">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    <span>Notification sent</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {deals.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              <div className="w-8 h-8 mx-auto mb-3 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin" />
              <div className="text-sm">Waiting for deals to close...</div>
            </div>
          )}
        </div>
      </div>

      {/* Processing Indicator */}
      {deals.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-3 bg-blue-50 rounded-lg text-center"
        >
          <div className="text-blue-700 font-semibold text-sm flex items-center justify-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
            />
            Processing next commission...
          </div>
        </motion.div>
      )}
    </div>
  );
}