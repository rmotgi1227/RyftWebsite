'use client';

import { useState } from 'react';

export default function InteractiveProductDemo() {
  const [activeDemo, setActiveDemo] = useState<'before' | 'after'>('before');

  const beforeAfterData = {
    before: {
      title: "Manual Commission Tracking",
      subtitle: "The old way of doing things",
      features: [
        "3-6 month implementation timeline",
        "Complex spreadsheet management",
        "Manual plan interpretation",
        "Error-prone calculations",
        "Limited integration options"
      ],
      screenshot: "/demo-before-placeholder.png",
      pain_points: [
        "Sales team disputes commissions monthly",
        "Finance spends 40+ hours on calculations",
        "Plan changes require weeks to implement",
        "No real-time visibility into earnings"
      ]
    },
    after: {
      title: "RYFT Commission Automation",
      subtitle: "The modern approach",
      features: [
        "5-minute setup and deployment",
        "AI-powered plan parsing",
        "Real-time calculation engine",
        "100+ pre-built integrations",
        "Self-service plan modifications"
      ],
      screenshot: "/demo-after-placeholder.png",
      benefits: [
        "Zero commission disputes",
        "15 hours saved per month",
        "Instant plan change deployment",
        "Real-time earnings transparency"
      ]
    }
  };

  const dashboardFeatures = [
    {
      title: "Real-time Commission Tracking",
      description: "Live updates as deals close and quota progress",
      mockup: "commission-tracking"
    },
    {
      title: "AI Plan Parser",
      description: "Upload commission plans and get automatic setup",
      mockup: "plan-parser"
    },
    {
      title: "Team Performance Dashboard",
      description: "Manager view with team metrics and trends",
      mockup: "team-dashboard"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              See the transformation
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Watch how RYFT transforms complex commission management into a seamless, automated process.
            </p>
          </div>

          {/* Before/After Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-2">
              <button
                onClick={() => setActiveDemo('before')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors duration-200 ${
                  activeDemo === 'before'
                    ? 'bg-white text-navy-900 shadow-sm'
                    : 'text-navy-600 hover:text-navy-800'
                }`}
              >
                Before RYFT
              </button>
              <button
                onClick={() => setActiveDemo('after')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors duration-200 ${
                  activeDemo === 'after'
                    ? 'bg-white text-navy-900 shadow-sm'
                    : 'text-navy-600 hover:text-navy-800'
                }`}
              >
                After RYFT
              </button>
            </div>
          </div>

          {/* Demo Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            
            {/* Left Side - Description */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-navy-900 mb-3">
                  {beforeAfterData[activeDemo].title}
                </h3>
                <p className="text-lg text-navy-600 mb-6">
                  {beforeAfterData[activeDemo].subtitle}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-navy-900 mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {beforeAfterData[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        activeDemo === 'after' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-navy-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-navy-900 mb-4">
                  {activeDemo === 'after' ? 'Business Impact:' : 'Common Challenges:'}
                </h4>
                <ul className="space-y-3">
                  {(activeDemo === 'after' 
                    ? beforeAfterData[activeDemo].benefits 
                    : beforeAfterData[activeDemo].pain_points
                  ).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        activeDemo === 'after' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Visual Mockup */}
            <div className="relative">
              <div className={`rounded-lg border-2 p-6 transition-colors duration-300 ${
                activeDemo === 'after' 
                  ? 'border-accent-200 bg-accent-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                {activeDemo === 'before' ? (
                  /* Before - Spreadsheet Chaos */
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-300 rounded p-4">
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="font-semibold">Rep Name</div>
                        <div className="font-semibold">Q1 Sales</div>
                        <div className="font-semibold">Commission %</div>
                        <div className="font-semibold">Total</div>
                        <div className="text-gray-600">John Smith</div>
                        <div className="text-gray-600">$125,000</div>
                        <div className="text-red-600">#REF!</div>
                        <div className="text-red-600">ERROR</div>
                        <div className="text-gray-600">Sarah Johnson</div>
                        <div className="text-gray-600">$98,500</div>
                        <div className="text-yellow-600">3.5% (pending)</div>
                        <div className="text-gray-600">$3,447.50</div>
                      </div>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded p-3 text-sm">
                      <div className="text-red-700 font-medium">⚠ Issues Detected:</div>
                      <div className="text-red-600 text-xs mt-1">
                        • Formula errors in cells C3:C7<br/>
                        • Manual calculations pending review<br/>
                        • Plan changes not reflected
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 text-center py-4">
                      Last updated: 3 weeks ago
                    </div>
                  </div>
                ) : (
                  /* After - RYFT Dashboard */
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-navy-900">Commission Dashboard</h4>
                        <div className="flex items-center gap-2 text-green-600 text-xs">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Live
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="bg-accent-50 rounded p-3 text-center">
                          <div className="font-bold text-accent-700">$247K</div>
                          <div className="text-accent-600 text-xs">Total Earned</div>
                        </div>
                        <div className="bg-green-50 rounded p-3 text-center">
                          <div className="font-bold text-green-700">89%</div>
                          <div className="text-green-600 text-xs">Quota Attained</div>
                        </div>
                        <div className="bg-blue-50 rounded p-3 text-center">
                          <div className="font-bold text-blue-700">$18K</div>
                          <div className="text-blue-600 text-xs">This Month</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                      <div className="text-green-700 font-medium">✓ All Systems Operational</div>
                      <div className="text-green-600 text-xs mt-1">
                        • Real-time CRM sync active<br/>
                        • All calculations verified<br/>
                        • Zero manual intervention required
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 text-center py-2">
                      Updated: Just now • Next sync: 2 minutes
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Dashboard Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
              Explore RYFT&apos;s key features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-accent-200 transition-colors duration-200">
                  <div className="bg-accent-50 rounded-lg p-8 mb-4 text-center">
                    {feature.mockup === 'commission-tracking' && (
                      <div className="space-y-3">
                        <div className="w-full bg-accent-200 rounded h-2"></div>
                        <div className="flex justify-between text-xs text-navy-700">
                          <span>$0</span>
                          <span className="font-bold">$87,450</span>
                          <span>$100K</span>
                        </div>
                        <div className="text-sm font-semibold text-accent-700">87.4% to quota</div>
                      </div>
                    )}
                    {feature.mockup === 'plan-parser' && (
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-accent-200 rounded mx-auto flex items-center justify-center">
                          <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" />
                          </svg>
                        </div>
                        <div className="text-sm text-navy-700">Upload PDF → AI Parse → Deploy</div>
                      </div>
                    )}
                    {feature.mockup === 'team-dashboard' && (
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="bg-green-100 p-2 rounded">
                          <div className="font-bold text-green-700">5</div>
                          <div className="text-green-600">On Track</div>
                        </div>
                        <div className="bg-yellow-100 p-2 rounded">
                          <div className="font-bold text-yellow-700">2</div>
                          <div className="text-yellow-600">Behind</div>
                        </div>
                        <div className="bg-blue-100 p-2 rounded">
                          <div className="font-bold text-blue-700">1</div>
                          <div className="text-blue-600">Ahead</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-navy-900 mb-2">{feature.title}</h4>
                  <p className="text-navy-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-navy-900 rounded-lg p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to see RYFT in action?
            </h3>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Book a 15-minute demo to see how RYFT can transform your commission management process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                Book Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/product"
                className="border border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Explore All Features
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}