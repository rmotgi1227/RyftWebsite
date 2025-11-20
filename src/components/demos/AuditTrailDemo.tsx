'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuditTrailDemo() {
  const [selectedTransaction, setSelectedTransaction] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const transactions = [
    {
      id: 'TXN-001',
      rep: 'Sarah Johnson',
      action: 'Commission Calculated',
      amount: '$4,500',
      time: '2:34 PM',
      details: ['Deal value: $45,000', 'Base rate: 8%', 'Q4 accelerator: +2%', 'Final: 10%']
    },
    {
      id: 'TXN-002', 
      rep: 'Mike Chen',
      action: 'Plan Rule Updated',
      amount: '$0',
      time: '2:31 PM',
      details: ['Changed: Accelerator threshold', 'From: $100K to $80K', 'Approved by: Admin', 'Auto-applied to team']
    },
    {
      id: 'TXN-003',
      rep: 'Alex Rivera',
      action: 'Dispute Resolved', 
      amount: '+$1,200',
      time: '2:28 PM',
      details: ['Issue: Missing Q3 bonus', 'Root cause: Late deal sync', 'Adjustment: +$1,200', 'Status: Resolved']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTransaction(prev => (prev + 1) % transactions.length);
      setShowDetails(false);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const detailTimer = setTimeout(() => {
      setShowDetails(true);
    }, 1500);

    return () => clearTimeout(detailTimer);
  }, [selectedTransaction]);

  return (
    <div className="bg-white rounded-lg p-6 h-80 flex flex-col">
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-navy-900 mb-2">Audit Trail</div>
        <div className="text-sm text-navy-600">Complete transaction transparency</div>
      </div>

      {/* Transaction List */}
      <div className="space-y-2 mb-4 flex-1">
        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
              index === selectedTransaction 
                ? 'bg-orange-50 border-orange-200 ring-2 ring-orange-300' 
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
            animate={{ 
              scale: index === selectedTransaction ? 1.02 : 1,
            }}
            onClick={() => setSelectedTransaction(index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  transaction.action.includes('Calculated') ? 'bg-green-500' :
                  transaction.action.includes('Updated') ? 'bg-blue-500' :
                  'bg-orange-500'
                }`} />
                <div>
                  <div className="font-medium text-navy-900 text-sm">{transaction.rep}</div>
                  <div className="text-xs text-navy-600">{transaction.action}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm">{transaction.amount}</div>
                <div className="text-xs text-gray-500">{transaction.time}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Transaction Details */}
      <div className="bg-navy-900 rounded-lg p-3 h-20">
        <div className="text-white text-sm font-medium mb-2">
          Transaction Details: {transactions[selectedTransaction].id}
        </div>
        <AnimatePresence mode="wait">
          {showDetails ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-1"
            >
              {transactions[selectedTransaction].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-navy-200 text-xs flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-orange-400 rounded-full" />
                  {detail}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-navy-300 text-xs"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 border border-navy-400 border-t-transparent rounded-full"
              />
              Loading transaction details...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}