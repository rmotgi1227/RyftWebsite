'use client';

import { useState, useEffect } from 'react';

export default function InteractiveSolution() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [dealValue, setDealValue] = useState(85000);

  const transformationSteps = [
    {
      id: 'upload',
      title: 'Upload Your Commission Plan',
      description: 'Drop your PDF or Excel file',
      visual: 'file-upload',
      duration: 4000
    },
    {
      id: 'parse',
      title: 'AI Parses Your Rules',
      description: 'Understanding complex commission logic',
      visual: 'ai-parsing',
      duration: 5000
    },
    {
      id: 'integrate',
      title: 'Connect Your CRM',
      description: 'Syncing with Salesforce, HubSpot, etc.',
      visual: 'crm-sync',
      duration: 4000
    },
    {
      id: 'calculate',
      title: 'Real-time Calculations',
      description: 'Commission updated instantly',
      visual: 'live-calc',
      duration: 4500
    },
    {
      id: 'complete',
      title: 'Done in 5 Minutes',
      description: 'Your entire team is automated',
      visual: 'celebration',
      duration: 4000
    }
  ];

  // Auto-play through steps
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % transformationSteps.length);
    }, transformationSteps[currentStep].duration);
    
    return () => clearTimeout(timer);
  }, [currentStep, isPlaying, transformationSteps]);

  const renderVisual = (step: string) => {
    switch(step) {
      case 'file-upload':
        return (
          <div className="relative">
            <div className="w-full h-64 border-4 border-dashed border-navy-300 rounded-xl bg-navy-50 flex items-center justify-center relative overflow-hidden">
              <div className={`transition-all duration-1000 ${currentStep === 0 ? 'scale-100 opacity-100' : 'scale-75 opacity-50'}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-navy-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v1.816a2 2 0 00.825 1.628l8.5 6.187a1 1 0 001.35 0l8.5-6.187A2 2 0 0023 6.816V5a2 2 0 00-2-2H4z"/>
                    </svg>
                  </div>
                  <div className="text-navy-700 font-medium">commission_plan_2024.pdf</div>
                  <div className="text-navy-500 text-sm">Drag & drop your file here</div>
                </div>
              </div>
              {currentStep === 0 && (
                <div className="absolute inset-0 border-4 border-green-400 rounded-xl animate-pulse"></div>
              )}
            </div>
          </div>
        );

      case 'ai-parsing':
        return (
          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                    <div className={`w-8 h-8 text-white ${currentStep === 1 ? 'animate-spin' : ''}`}>
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                  {currentStep === 1 && (
                    <>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    </>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-purple-200 rounded w-3/4 mx-auto">
                    <div className={`h-full bg-purple-500 rounded transition-all duration-2000 ${currentStep === 1 ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  <div className="text-purple-700 font-medium">Analyzing commission rules...</div>
                  <div className="text-purple-600 text-sm">
                    {currentStep === 1 ? 'Found 12 rules, 3 tiers, 2 accelerators' : 'Ready to parse'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'crm-sync':
        return (
          <div className="relative">
            <div className="w-full h-64 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
              <div className="flex items-center justify-between w-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">CRM</span>
                  </div>
                  <div className="text-blue-600 text-sm font-medium">Salesforce</div>
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  {currentStep === 2 ? (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  ) : (
                    <div className="text-gray-400">→ → →</div>
                  )}
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy-900 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">RYFT</span>
                  </div>
                  <div className="text-navy-600 text-sm font-medium">Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'live-calc':
        return (
          <div className="relative">
            <div className="w-full h-64 bg-navy-900 rounded-xl p-6 text-white">
              <div className="text-center mb-6">
                <div className="text-green-400 text-sm mb-2">🔴 LIVE CALCULATION</div>
                <div className="text-lg font-bold">New Deal Closed</div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-navy-800 rounded-lg p-4">
                  <div className="text-sm text-navy-300">Deal Value</div>
                  <div className="text-2xl font-bold text-white">${dealValue.toLocaleString()}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-navy-800 rounded-lg p-3">
                    <div className="text-xs text-navy-300">Rep Commission</div>
                    <div className="text-lg font-bold text-green-400">
                      {currentStep === 3 ? `$${(dealValue * 0.08).toLocaleString()}` : '$--'}
                    </div>
                  </div>
                  <div className="bg-navy-800 rounded-lg p-3">
                    <div className="text-xs text-navy-300">Manager Override</div>
                    <div className="text-lg font-bold text-blue-400">
                      {currentStep === 3 ? `$${(dealValue * 0.02).toLocaleString()}` : '$--'}
                    </div>
                  </div>
                </div>
                
                {currentStep === 3 && (
                  <div className="bg-green-900 border border-green-400 rounded-lg p-3 animate-pulse">
                    <div className="text-green-400 text-sm">✅ Commissions calculated and synced</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'celebration':
        return (
          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center">
                {currentStep === 4 && (
                  <>
                    <div className="text-6xl mb-4 animate-bounce">🎉</div>
                    <div className="text-2xl font-bold text-green-600 mb-2">Setup Complete!</div>
                    <div className="text-green-700 mb-4">Your entire commission system is automated</div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-lg font-bold text-navy-900">5min</div>
                        <div className="text-xs text-navy-600">Total Setup Time</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-lg font-bold text-navy-900">∞</div>
                        <div className="text-xs text-navy-600">Hours Saved Monthly</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return <div>Step not found</div>;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Watch RYFT eliminate your commission chaos
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              See exactly how RYFT transforms your broken manual process into automated perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Step Controls */}
            <div>
              {/* Play/Pause Control */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-navy-900">5-Minute Transformation</h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-4 py-2 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
              </div>

              {/* Step Navigation */}
              <div className="space-y-4">
                {transformationSteps.map((step, index) => (
                  <div
                    key={step.id}
                    onClick={() => {setCurrentStep(index); setIsPlaying(false);}}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      currentStep === index
                        ? 'border-navy-500 bg-navy-50 transform scale-105'
                        : 'border-gray-200 hover:border-navy-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        currentStep === index
                          ? 'bg-navy-500 text-white'
                          : currentStep > index
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {currentStep > index ? '✓' : index + 1}
                      </div>
                      <div>
                        <div className={`font-semibold ${
                          currentStep === index ? 'text-navy-900' : 'text-gray-700'
                        }`}>
                          {step.title}
                        </div>
                        <div className="text-sm text-gray-600">{step.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-bold text-center transition-all duration-200 transform hover:scale-105"
                >
                  Start Your 5-Minute Setup
                </a>
              </div>
            </div>

            {/* Right: Interactive Visual */}
            <div className="relative">
              {renderVisual(transformationSteps[currentStep].visual)}
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-navy-600 mb-2">
                  <span>Step {currentStep + 1} of {transformationSteps.length}</span>
                  <span>{transformationSteps[currentStep].title}</span>
                </div>
                <div className="w-full bg-navy-100 rounded-full h-2">
                  <div 
                    className="bg-navy-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / transformationSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}