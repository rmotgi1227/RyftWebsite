'use client';

import { useState, useEffect } from 'react';

export default function InteractiveProblems() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [chaosLevel, setChaosLevel] = useState(0);

  const painScenarios = [
    {
      id: 'disputes',
      icon: '⚠️',
      title: 'Commission disputes are derailing your revenue operations',
      visual: 'dispute-chaos',
      metrics: { cost: '$50K+', time: 'Weekly', impact: 'High' }
    },
    {
      id: 'distrust',
      icon: '💸',
      title: 'Your sales team doesn\'t trust their pay statements',
      visual: 'trust-breakdown',
      metrics: { cost: '40hrs', time: 'Monthly', impact: 'Critical' }
    },
    {
      id: 'drowning',
      icon: '📊',
      title: 'Your finance team is drowning in spreadsheets',
      visual: 'spreadsheet-hell',
      metrics: { cost: '60hrs', time: 'Per cycle', impact: 'Severe' }
    }
  ];

  // Auto-cycle through pain scenarios
  useEffect(() => {
    if (!isAnimating) return;
    
    const timer = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % painScenarios.length);
      setChaosLevel((prev) => (prev + 25) % 100);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [isAnimating, painScenarios.length]);

  const renderPainVisual = (scenario: string) => {
    switch(scenario) {
      case 'dispute-chaos':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 overflow-hidden">
            {/* Animated Background Chaos */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 w-16 h-16 bg-red-500 rounded-full animate-ping opacity-20"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-orange-500 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-yellow-500 rounded-full animate-bounce opacity-25"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce">⚠️</div>
                <div className="text-2xl font-bold text-red-700 mb-2">Commission Dispute Alert</div>
                <div className="text-red-600">Active disputes requiring immediate attention</div>
              </div>

              <div className="space-y-3">
                <div className="bg-red-100 border border-red-300 rounded-lg p-3 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="text-red-700 font-medium">Sarah J. - Q4 Commission</div>
                    <div className="text-red-600 text-sm">$12,847 disputed</div>
                  </div>
                  <div className="text-red-600 text-xs mt-1">Claims: "Accelerator not applied correctly"</div>
                </div>

                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 animate-pulse" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center justify-between">
                    <div className="text-orange-700 font-medium">Mike R. - Deal Attribution</div>
                    <div className="text-orange-600 text-sm">$8,923 questioned</div>
                  </div>
                  <div className="text-orange-600 text-xs mt-1">Claims: "Team split calculation wrong"</div>
                </div>

                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 animate-pulse" style={{animationDelay: '1s'}}>
                  <div className="flex items-center justify-between">
                    <div className="text-yellow-700 font-medium">Team Alpha - Bonus Tier</div>
                    <div className="text-yellow-600 text-sm">$15,632 pending</div>
                  </div>
                  <div className="text-yellow-600 text-xs mt-1">Escalated to: Finance Director</div>
                </div>
              </div>

              {activeScenario === 0 && (
                <div className="mt-4 bg-red-600 text-white rounded-lg p-3 text-center animate-pulse">
                  <div className="font-bold text-lg">Revenue Impact: $37,402</div>
                  <div className="text-sm opacity-90">3 weeks unresolved • 47 Slack messages • 12 meetings scheduled</div>
                </div>
              )}
            </div>
          </div>
        );

      case 'trust-breakdown':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💸</div>
                <div className="text-2xl font-bold text-blue-700 mb-2">Sales Team Confidence Crisis</div>
                <div className="text-blue-600">Trust eroding with every pay cycle</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Trust Meter */}
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="text-sm text-blue-600 mb-2">Team Trust Level</div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-4 rounded-full transition-all duration-2000"
                        style={{ width: activeScenario === 1 ? '28%' : '85%' }}
                      ></div>
                    </div>
                    <div className="text-xs text-center mt-1 font-bold text-red-600">
                      {activeScenario === 1 ? '28% Confident' : 'Declining...'}
                    </div>
                  </div>
                </div>

                {/* Complaint Counter */}
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="text-sm text-blue-600 mb-2">This Month</div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${activeScenario === 1 ? 'text-red-600 animate-pulse' : 'text-blue-900'}`}>
                      {activeScenario === 1 ? '47' : '12'}
                    </div>
                    <div className="text-xs text-blue-600">Commission Questions</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="text-blue-700 text-sm">"I can't verify my accelerator bonus calculation"</div>
                  </div>
                </div>
                <div className="bg-purple-100 border border-purple-300 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <div className="text-purple-700 text-sm">"Why is my commission different from last month's rate?"</div>
                  </div>
                </div>
                <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="text-red-700 text-sm">"The spreadsheet shows something completely different"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'spreadsheet-hell':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-gray-50 to-yellow-50 rounded-xl p-6 overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-spin">📊</div>
                <div className="text-2xl font-bold text-gray-700 mb-2">Spreadsheet Nightmare</div>
                <div className="text-gray-600">Finance drowning in manual calculations</div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white border border-gray-300 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">commission_Q4_FINAL_v47.xlsx</div>
                    <div className="text-red-600 text-xs bg-red-100 px-2 py-1 rounded">16 ERRORS</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">#REF! errors in cells C12:C89</div>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">team_splits_December_v12.xlsx</div>
                    <div className="text-yellow-600 text-xs bg-yellow-100 px-2 py-1 rounded">PENDING</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Manual verification required for 23 reps</div>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">accelerator_logic_NEW.xlsx</div>
                    <div className="text-orange-600 text-xs bg-orange-100 px-2 py-1 rounded">BROKEN</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Formula doesn't match new commission plan</div>
                </div>
              </div>

              {activeScenario === 2 && (
                <div className="mt-4 bg-gray-700 text-white rounded-lg p-3 text-center">
                  <div className="font-bold">Finance Team Status:</div>
                  <div className="text-sm opacity-90">Working weekends • 60+ hrs/month • 3 resignations this quarter</div>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return <div>Scenario not found</div>;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              REVENUE CRISIS IN PROGRESS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Commission disputes are derailing your revenue operations.<br />
              <span className="text-blue-700">Your sales team doesn't trust their pay statements.</span><br />
              <span className="text-gray-700">Your finance team is drowning in spreadsheets.</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <span className="font-bold text-navy-900">RYFT fixes this in 5 minutes.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Pain Point Controls */}
            <div>
              {/* Auto-play Control */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">The Reality</h3>
                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  {isAnimating ? '⏸️' : '▶️'}
                  {isAnimating ? 'Pause' : 'Play'}
                </button>
              </div>

              {/* Pain Scenario Navigation */}
              <div className="space-y-4">
                {painScenarios.map((scenario, index) => (
                  <div
                    key={scenario.id}
                    onClick={() => {setActiveScenario(index); setIsAnimating(false);}}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      activeScenario === index
                        ? 'border-red-500 bg-red-50 transform scale-105'
                        : 'border-gray-200 hover:border-red-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{scenario.icon}</div>
                      <div className="flex-1">
                        <div className={`font-semibold text-lg leading-tight ${
                          activeScenario === index ? 'text-red-700' : 'text-gray-700'
                        }`}>
                          {scenario.title}
                        </div>
                        <div className="flex gap-4 mt-2 text-xs">
                          <span className="bg-gray-100 px-2 py-1 rounded">Cost: {scenario.metrics.cost}</span>
                          <span className="bg-gray-100 px-2 py-1 rounded">Frequency: {scenario.metrics.time}</span>
                          <span className={`px-2 py-1 rounded ${
                            scenario.metrics.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                            scenario.metrics.impact === 'Severe' ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {scenario.metrics.impact} Impact
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Urgency CTA */}
              <div className="mt-8 p-6 bg-navy-900 text-white rounded-lg">
                <div className="text-lg font-bold mb-2">This is happening right now.</div>
                <div className="text-navy-200 mb-4">Every day you wait costs you money, trust, and talent.</div>
                <a
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-navy-900 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors"
                >
                  Stop the bleeding - Fix this now
                </a>
              </div>
            </div>

            {/* Right: Interactive Pain Visual */}
            <div className="relative">
              {renderPainVisual(painScenarios[activeScenario].visual)}
              
              {/* Chaos Indicator */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Current Crisis Level</span>
                  <span className="font-bold text-red-600">
                    {activeScenario === 0 ? 'CRITICAL' : activeScenario === 1 ? 'HIGH' : 'SEVERE'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      activeScenario === 0 ? 'bg-red-500' : 
                      activeScenario === 1 ? 'bg-orange-500' : 
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${75 + (activeScenario * 8)}%` }}
                  ></div>
                </div>
              </div>
            </div>

          </div>

          {/* Cost Calculator */}
          <div className="mt-16 bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <div className="text-red-700 font-bold text-lg mb-4">
              🔥 This is costing you right now:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <div className="text-2xl font-bold text-red-600">$150K+</div>
                <div className="text-red-700">Annual revenue leakage</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <div className="text-2xl font-bold text-red-600">480hrs</div>
                <div className="text-red-700">Wasted team hours yearly</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <div className="text-2xl font-bold text-red-600">3 people</div>
                <div className="text-red-700">Lost due to frustration</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}