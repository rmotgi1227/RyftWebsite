'use client';

import { useState } from 'react';

export default function IntegrationsWorkflow() {
  const [selectedIntegration, setSelectedIntegration] = useState<'salesforce' | 'adp' | 'quickbooks'>('salesforce');

  const integrationFlows = {
    salesforce: {
      name: 'Salesforce',
      category: 'CRM',
      setupTime: '5 minutes',
      steps: [
        {
          step: 1,
          title: 'Connect Salesforce',
          description: 'OAuth authentication with read-only permissions',
          time: '30 seconds',
          technical: 'Uses Salesforce REST API v58.0'
        },
        {
          step: 2,
          title: 'Map Deal Fields',
          description: 'Automatically detect and map opportunity fields',
          time: '2 minutes',
          technical: 'Smart field detection with 95% accuracy'
        },
        {
          step: 3,
          title: 'Set Sync Rules',
          description: 'Configure which deals trigger commission calculations',
          time: '2 minutes',
          technical: 'Real-time webhook listeners'
        },
        {
          step: 4,
          title: 'Test & Go Live',
          description: 'Validate data flow and activate integration',
          time: '30 seconds',
          technical: 'Automated validation and health checks'
        }
      ],
      dataFlow: [
        'Deal closes in Salesforce',
        'Real-time webhook to RYFT',
        'Commission calculation triggered',
        'Results updated in dashboard',
        'Notifications sent to rep'
      ]
    },
    adp: {
      name: 'ADP Payroll',
      category: 'HR/Payroll',
      setupTime: '10 minutes',
      steps: [
        {
          step: 1,
          title: 'ADP Authorization',
          description: 'Secure API connection to ADP Workforce Now',
          time: '2 minutes',
          technical: 'ADP API Gateway with OAuth 2.0'
        },
        {
          step: 2,
          title: 'Employee Mapping',
          description: 'Match sales reps to ADP employee records',
          time: '3 minutes',
          technical: 'Fuzzy matching with manual override'
        },
        {
          step: 3,
          title: 'Payroll Schedule',
          description: 'Configure commission export timing and format',
          time: '3 minutes',
          technical: 'Automated CSV/API export scheduling'
        },
        {
          step: 4,
          title: 'Test Export',
          description: 'Validate export format and data accuracy',
          time: '2 minutes',
          technical: 'Dry-run validation with approval workflow'
        }
      ],
      dataFlow: [
        'Commission period closes',
        'RYFT calculates final amounts',
        'Export formatted for ADP',
        'Automated delivery to ADP',
        'Payroll team receives summary'
      ]
    },
    quickbooks: {
      name: 'QuickBooks',
      category: 'Accounting',
      setupTime: '7 minutes',
      steps: [
        {
          step: 1,
          title: 'QuickBooks Connect',
          description: 'Secure connection to QuickBooks Online API',
          time: '1 minute',
          technical: 'Intuit Developer Platform integration'
        },
        {
          step: 2,
          title: 'Chart of Accounts',
          description: 'Map commission expense accounts and categories',
          time: '3 minutes',
          technical: 'Intelligent account matching'
        },
        {
          step: 3,
          title: 'Export Settings',
          description: 'Configure journal entry format and timing',
          time: '2 minutes',
          technical: 'Custom journal entry templates'
        },
        {
          step: 4,
          title: 'Validation',
          description: 'Test export and verify accounting entries',
          time: '1 minute',
          technical: 'Automated reconciliation checks'
        }
      ],
      dataFlow: [
        'Commission calculations complete',
        'Journal entries generated',
        'Review and approval workflow',
        'Export to QuickBooks',
        'Accounting team notified'
      ]
    }
  };

  const integrations = Object.keys(integrationFlows) as Array<keyof typeof integrationFlows>;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              See how integrations work
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Step-by-step setup process and real-time data flow for popular integrations.
            </p>
          </div>

          {/* Integration Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {integrations.map((key) => {
              const integration = integrationFlows[key];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedIntegration(key)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-all duration-200 ${
                    selectedIntegration === key
                      ? 'bg-accent-50 border-accent-300 text-accent-700'
                      : 'bg-white border-gray-200 text-navy-700 hover:border-accent-200'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${
                    selectedIntegration === key ? 'bg-accent-500' : 'bg-gray-400'
                  }`}></div>
                  <div className="text-left">
                    <div className="font-semibold">{integration.name}</div>
                    <div className="text-sm opacity-75">{integration.category}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Integration Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Setup Process */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-navy-900">
                  {integrationFlows[selectedIntegration].name} Setup
                </h3>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {integrationFlows[selectedIntegration].setupTime} total
                </div>
              </div>

              <div className="space-y-6">
                {integrationFlows[selectedIntegration].steps.map((step, index) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-accent-500 text-white rounded-full flex items-center justify-center font-semibold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-navy-900">{step.title}</h4>
                        <span className="text-sm text-navy-500">{step.time}</span>
                      </div>
                      <p className="text-navy-600 text-sm mb-2">{step.description}</p>
                      <p className="text-xs text-navy-500 bg-navy-50 px-3 py-1 rounded">
                        {step.technical}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center block"
                >
                  Set Up This Integration
                </a>
              </div>
            </div>

            {/* Data Flow Visualization */}
            <div className="bg-navy-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Real-time Data Flow</h3>
              
              <div className="space-y-6">
                {integrationFlows[selectedIntegration].dataFlow.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-navy-100">{step}</p>
                    </div>
                    {index < integrationFlows[selectedIntegration].dataFlow.length - 1 && (
                      <div className="flex-shrink-0">
                        <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 pt-8 border-t border-navy-700">
                <h4 className="font-semibold text-white mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-navy-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent-400">99.9%</div>
                    <div className="text-navy-300 text-sm">Uptime</div>
                  </div>
                  <div className="bg-navy-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent-400">&lt;1s</div>
                    <div className="text-navy-300 text-sm">Sync Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Categories */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
              All integration categories
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">CRM Systems</h4>
                <p className="text-navy-600 text-sm mb-4">
                  Sync deal data and automate commission calculations
                </p>
                <div className="text-accent-600 font-medium text-sm">
                  Salesforce, HubSpot, Pipedrive, Monday.com +
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Payroll & HR</h4>
                <p className="text-navy-600 text-sm mb-4">
                  Export commission data directly to payroll systems
                </p>
                <div className="text-accent-600 font-medium text-sm">
                  ADP, Workday, Paychex, BambooHR +
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Accounting</h4>
                <p className="text-navy-600 text-sm mb-4">
                  Integrate with financial systems and ERP platforms
                </p>
                <div className="text-accent-600 font-medium text-sm">
                  QuickBooks, Xero, NetSuite, SAP +
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}