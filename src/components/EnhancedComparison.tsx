'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EnhancedComparison() {
  const [activeView, setActiveView] = useState<'before-after' | 'side-by-side'>('side-by-side');

  const beforeAfterComparison = {
    before: {
      title: "The Old Way",
      subtitle: "Manual commission tracking nightmare",
      timeline: [
        { step: 1, title: "Export Data", time: "2-4 hours", description: "Manually export deal data from CRM" },
        { step: 2, title: "Clean & Format", time: "3-6 hours", description: "Fix data inconsistencies and formatting" },
        { step: 3, title: "Apply Rules", time: "4-8 hours", description: "Manually interpret and apply commission rules" },
        { step: 4, title: "Calculate", time: "2-3 hours", description: "Build formulas and calculate commissions" },
        { step: 5, title: "Review & Fix", time: "2-4 hours", description: "Find errors and recalculate" },
        { step: 6, title: "Distribute", time: "1-2 hours", description: "Send statements and handle disputes" }
      ],
      totalTime: "14-27 hours",
      accuracy: "85%",
      disputes: "High",
      satisfaction: "Low"
    },
    after: {
      title: "The RYFT Way",
      subtitle: "Automated commission management",
      timeline: [
        { step: 1, title: "Auto-Sync", time: "Real-time", description: "Automatic CRM data synchronization" },
        { step: 2, title: "AI Parse", time: "Instant", description: "AI automatically interprets commission plans" },
        { step: 3, title: "Calculate", time: "Instant", description: "Real-time commission calculations" },
        { step: 4, title: "Validate", time: "Instant", description: "Automated accuracy verification" },
        { step: 5, title: "Distribute", time: "Instant", description: "Automatic statement generation and delivery" }
      ],
      totalTime: "5 minutes setup",
      accuracy: "99.9%",
      disputes: "Near Zero",
      satisfaction: "High"
    }
  };

  const sideComparison = {
    categories: [
      {
        name: "Setup Time",
        competitors: {
          "Excel/Sheets": "Manual setup, no automation",
          "Spiff": "3-6 month implementation",
          "Xactly": "6-12 month enterprise deployment", 
          "CaptivateIQ": "3-5 month custom configuration"
        },
        ryft: "5-minute self-service setup"
      },
      {
        name: "Plan Changes",
        competitors: {
          "Excel/Sheets": "Rebuild formulas from scratch",
          "Spiff": "Professional services required",
          "Xactly": "Complex approval workflow",
          "CaptivateIQ": "Technical expertise needed"
        },
        ryft: "AI-powered instant deployment"
      },
      {
        name: "Data Sources",
        competitors: {
          "Excel/Sheets": "Manual data exports",
          "Spiff": "Limited pre-built connectors",
          "Xactly": "Enterprise-only integrations",
          "CaptivateIQ": "Custom development required"
        },
        ryft: "API-first with major CRM integrations"
      },
      {
        name: "Accuracy & Auditability",
        competitors: {
          "Excel/Sheets": "Error-prone manual calculations",
          "Spiff": "Complex rule validation",
          "Xactly": "Black box calculations",
          "CaptivateIQ": "Limited audit trails"
        },
        ryft: "100% transparent with complete audit logs"
      }
    ]
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              RYFT vs Competitors
            </h2>
            
          </motion.div>

          {activeView === 'before-after' ? (
            /* Before/After Process Flow */
            <div className="space-y-16">
              {/* Before */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    {beforeAfterComparison.before.title}
                  </h3>
                  <p className="text-gray-600">{beforeAfterComparison.before.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                  {beforeAfterComparison.before.timeline.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white border border-gray-300 rounded-lg p-4 mb-3">
                        <div className="w-8 h-8 bg-gray-400 text-white rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-semibold">
                          {item.step}
                        </div>
                        <div className="font-medium text-gray-900 text-sm mb-1">{item.title}</div>
                        <div className="text-red-600 text-xs font-semibold">{item.time}</div>
                      </div>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-semibold text-red-600">{beforeAfterComparison.before.totalTime}</div>
                    <div className="text-gray-600 text-sm">Total Time</div>
                  </div>
                  <div>
                    <div className="font-semibold text-red-600">{beforeAfterComparison.before.accuracy}</div>
                    <div className="text-gray-600 text-sm">Accuracy</div>
                  </div>
                  <div>
                    <div className="font-semibold text-red-600">{beforeAfterComparison.before.disputes}</div>
                    <div className="text-gray-600 text-sm">Disputes</div>
                  </div>
                  <div>
                    <div className="font-semibold text-red-600">{beforeAfterComparison.before.satisfaction}</div>
                    <div className="text-gray-600 text-sm">Team Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 text-white rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* After */}
              <div className="bg-accent-50 rounded-lg p-8 border border-accent-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-accent-700 mb-2">
                    {beforeAfterComparison.after.title}
                  </h3>
                  <p className="text-accent-600">{beforeAfterComparison.after.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                  {beforeAfterComparison.after.timeline.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white border border-accent-300 rounded-lg p-4 mb-3">
                        <div className="w-8 h-8 bg-accent-500 text-white rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-semibold">
                          {item.step}
                        </div>
                        <div className="font-medium text-accent-900 text-sm mb-1">{item.title}</div>
                        <div className="text-green-600 text-xs font-semibold">{item.time}</div>
                      </div>
                      <p className="text-xs text-accent-700">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-semibold text-green-600">{beforeAfterComparison.after.totalTime}</div>
                    <div className="text-accent-700 text-sm">Total Time</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">{beforeAfterComparison.after.accuracy}</div>
                    <div className="text-accent-700 text-sm">Accuracy</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">{beforeAfterComparison.after.disputes}</div>
                    <div className="text-accent-700 text-sm">Disputes</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">{beforeAfterComparison.after.satisfaction}</div>
                    <div className="text-accent-700 text-sm">Team Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Side-by-Side Feature Comparison */
            <motion.div 
              className="overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-4 px-6 font-semibold text-navy-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-blue-600 bg-blue-50">RYFT</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-700">Excel/Sheets</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-700">Spiff</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-700">Xactly</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-700">CaptivateIQ</th>
                  </tr>
                </thead>
                <tbody>
                  {sideComparison.categories.map((category, index) => (
                    <motion.tr 
                      key={index} 
                      className="border-t border-gray-100 hover:bg-gray-25"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <td className="py-4 px-6 font-medium text-navy-800">
                        {category.name}
                      </td>
                      <td className="text-center py-4 px-4 bg-blue-25 font-semibold text-blue-700 text-sm">
                        {category.ryft}
                      </td>
                      {Object.values(category.competitors).map((value, compIndex) => (
                        <td key={compIndex} className="text-center py-4 px-4 text-gray-700 text-sm">
                          {value}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}


        </div>
      </div>
    </section>
  );
}