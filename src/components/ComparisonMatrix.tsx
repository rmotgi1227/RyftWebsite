'use client';

import { useState } from 'react';

export default function ComparisonMatrix() {
  const [activeComparison, setActiveComparison] = useState('features');

  const comparisonTypes = {
    features: {
      title: 'Feature Comparison',
      description: 'Head-to-head comparison of key features',
      categories: [
        {
          name: 'Setup & Implementation',
          features: [
            {
              feature: 'Setup Time',
              ryft: '5 minutes',
              spiff: '3-6 months',
              xactly: '6-12 months',
              captivateiq: '3-5 months',
              quotapath: '2-4 weeks'
            },
            {
              feature: 'Implementation Method',
              ryft: 'Self-service',
              spiff: 'Professional services required',
              xactly: 'Enterprise implementation team',
              captivateiq: 'Custom configuration',
              quotapath: 'Guided setup'
            },
            {
              feature: 'AI Plan Parsing',
              ryft: '✓ Advanced',
              spiff: '✗',
              xactly: '✗',
              captivateiq: '✗',
              quotapath: '✗'
            }
          ]
        },
        {
          name: 'Calculation & Processing',
          features: [
            {
              feature: 'Real-time Calculations',
              ryft: '✓ Instant',
              spiff: '✓ Real-time',
              xactly: 'Batch processing',
              captivateiq: '✓ Real-time',
              quotapath: '✓ Real-time'
            },
            {
              feature: 'Plan Change Deployment',
              ryft: 'Instant',
              spiff: 'Hours to days',
              xactly: 'Weeks',
              captivateiq: 'Days to weeks',
              quotapath: 'Hours'
            },
            {
              feature: 'Accuracy Rate',
              ryft: '99.9%',
              spiff: '98.5%',
              xactly: '99.2%',
              captivateiq: '98.8%',
              quotapath: '97.5%'
            }
          ]
        },
        {
          name: 'Integrations & Scalability',
          features: [
            {
              feature: 'Pre-built Integrations',
              ryft: '100+',
              spiff: '50+',
              xactly: '25+ (Enterprise)',
              captivateiq: 'Custom development',
              quotapath: '20+'
            },
            {
              feature: 'API Capabilities',
              ryft: 'REST + GraphQL',
              spiff: 'REST API',
              xactly: 'Enterprise API',
              captivateiq: 'REST API',
              quotapath: 'Limited API'
            },
            {
              feature: 'Mobile Access',
              ryft: 'Native app',
              spiff: 'Mobile responsive',
              xactly: 'Web only',
              captivateiq: 'Web responsive',
              quotapath: 'Mobile app'
            }
          ]
        }
      ]
    },
    pricing: {
      title: 'Pricing Comparison',
      description: 'Total cost of ownership analysis',
      breakdown: {
        ryft: {
          name: 'RYFT',
          startingPrice: '$49',
          priceUnit: 'per user/month',
          setupCost: '$0',
          implementationTime: '5 minutes',
          yearOneCost: '$5,880',
          features: [
            'All features included',
            'Unlimited integrations',
            'Self-service setup',
            '24/7 support included',
            'No hidden fees'
          ],
          highlight: true
        },
        spiff: {
          name: 'Spiff',
          startingPrice: '$75',
          priceUnit: 'per user/month',
          setupCost: '$15,000+',
          implementationTime: '3-6 months',
          yearOneCost: '$24,000+',
          features: [
            'Professional services required',
            'Setup and training fees',
            'Limited integrations',
            'Tiered support pricing',
            'Additional feature costs'
          ],
          highlight: false
        },
        xactly: {
          name: 'Xactly',
          startingPrice: 'Custom',
          priceUnit: 'Enterprise pricing',
          setupCost: '$50,000+',
          implementationTime: '6-12 months',
          yearOneCost: '$100,000+',
          features: [
            'Enterprise-only focus',
            'Long implementation cycles',
            'Professional services mandatory',
            'Complex pricing structure',
            'High minimum commitments'
          ],
          highlight: false
        },
        captivateiq: {
          name: 'CaptivateIQ',
          startingPrice: '$60',
          priceUnit: 'per user/month',
          setupCost: '$10,000+',
          implementationTime: '3-5 months',
          yearOneCost: '$17,200+',
          features: [
            'Configuration complexity',
            'Technical expertise required',
            'Custom pricing tiers',
            'Implementation consulting',
            'Integration development costs'
          ],
          highlight: false
        },
        quotapath: {
          name: 'Quotapath',
          startingPrice: '$35',
          priceUnit: 'per user/month',
          setupCost: '$2,000+',
          implementationTime: '2-4 weeks',
          yearOneCost: '$6,200+',
          features: [
            'Limited complex plan support',
            'Basic integration options',
            'Manual setup required',
            'Restricted customization',
            'Additional feature costs'
          ],
          highlight: false
        }
      }
    },
    roi: {
      title: 'ROI Analysis',
      description: 'Time and cost savings comparison',
      metrics: {
        ryft: {
          name: 'RYFT',
          timeToValue: '5 minutes',
          monthlyTimeSaved: '15 hours',
          annualCostSavings: '$52,000',
          paybackPeriod: '0.1 months',
          efficiency: '95%'
        },
        traditional: {
          name: 'Traditional Methods',
          timeToValue: '3-6 months',
          monthlyTimeSaved: '0 hours',
          annualCostSavings: '$0',
          paybackPeriod: 'N/A',
          efficiency: '60%'
        },
        competitors: {
          name: 'Other Platforms',
          timeToValue: '3-5 months',
          monthlyTimeSaved: '8 hours',
          annualCostSavings: '$25,000',
          paybackPeriod: '6-12 months',
          efficiency: '75%'
        }
      }
    }
  };

  const comparisonKeys = Object.keys(comparisonTypes) as Array<keyof typeof comparisonTypes>;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Navigation */}
          <div className="text-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {comparisonKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveComparison(key)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                    activeComparison === key
                      ? 'bg-white text-navy-900 shadow-sm'
                      : 'text-navy-600 hover:text-navy-800'
                  }`}
                >
                  {comparisonTypes[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Comparison Content */}
          {activeComparison === 'features' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">
                  {comparisonTypes.features.title}
                </h2>
                <p className="text-lg text-navy-600">
                  {comparisonTypes.features.description}
                </p>
              </div>

              {comparisonTypes.features.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
                    {category.name}
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left py-4 px-6 font-semibold text-navy-900 w-1/4">Feature</th>
                          <th className="text-center py-4 px-4 font-semibold text-accent-600 bg-accent-50">RYFT</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-700">Spiff</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-700">Xactly</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-700">CaptivateIQ</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-700">Quotapath</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.features.map((feature, index) => (
                          <tr key={index} className="border-t border-gray-100 hover:bg-gray-25">
                            <td className="py-4 px-6 font-medium text-navy-800">
                              {feature.feature}
                            </td>
                            <td className="text-center py-4 px-4 bg-accent-25 font-semibold text-accent-700">
                              {feature.ryft}
                            </td>
                            <td className="text-center py-4 px-4 text-gray-700">
                              {feature.spiff}
                            </td>
                            <td className="text-center py-4 px-4 text-gray-700">
                              {feature.xactly}
                            </td>
                            <td className="text-center py-4 px-4 text-gray-700">
                              {feature.captivateiq}
                            </td>
                            <td className="text-center py-4 px-4 text-gray-700">
                              {feature.quotapath}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeComparison === 'pricing' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">
                  {comparisonTypes.pricing.title}
                </h2>
                <p className="text-lg text-navy-600">
                  {comparisonTypes.pricing.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {Object.values(comparisonTypes.pricing.breakdown).map((platform, index) => (
                  <div
                    key={index}
                    className={`rounded-lg border-2 p-6 relative ${
                      platform.highlight 
                        ? 'bg-accent-50 border-accent-200' 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    {platform.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Best Value
                        </span>
                      </div>
                    )}

                    <h3 className={`text-xl font-bold mb-4 ${
                      platform.highlight ? 'text-accent-700' : 'text-navy-900'
                    }`}>
                      {platform.name}
                    </h3>

                    <div className="mb-4">
                      <div className={`text-2xl font-bold ${
                        platform.highlight ? 'text-accent-600' : 'text-navy-900'
                      }`}>
                        {platform.startingPrice}
                      </div>
                      <div className="text-sm text-navy-600">{platform.priceUnit}</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-navy-600">Setup cost:</span>
                        <span className="font-medium">{platform.setupCost}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-navy-600">Implementation:</span>
                        <span className="font-medium">{platform.implementationTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-navy-600">Year 1 total:</span>
                        <span className="font-bold text-lg">{platform.yearOneCost}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {platform.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${
                            platform.highlight ? 'bg-accent-500' : 'bg-gray-400'
                          }`}></div>
                          <span className="text-navy-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeComparison === 'roi' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">
                  {comparisonTypes.roi.title}
                </h2>
                <p className="text-lg text-navy-600">
                  {comparisonTypes.roi.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.values(comparisonTypes.roi.metrics).map((option, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-8 ${
                      option.name === 'RYFT'
                        ? 'bg-accent-50 border-2 border-accent-200'
                        : 'bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    <h3 className={`text-xl font-bold mb-6 ${
                      option.name === 'RYFT' ? 'text-accent-700' : 'text-navy-900'
                    }`}>
                      {option.name}
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-navy-600">Time to value:</span>
                        <span className="font-semibold">{option.timeToValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-navy-600">Monthly time saved:</span>
                        <span className="font-semibold">{option.monthlyTimeSaved}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-navy-600">Annual savings:</span>
                        <span className="font-semibold">{option.annualCostSavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-navy-600">Payback period:</span>
                        <span className="font-semibold">{option.paybackPeriod}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-navy-600">Efficiency gain:</span>
                        <span className="font-semibold">{option.efficiency}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-16 bg-navy-900 rounded-xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to see the difference?
            </h3>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Get a personalized comparison based on your specific requirements and team size.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                Get Custom Comparison
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#roi-calculator"
                className="border border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Calculate Your ROI
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}