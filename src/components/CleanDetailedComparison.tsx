'use client';

export default function CleanDetailedComparison() {
  const comparisonFeatures = [
    {
      feature: "Setup Time",
      ryft: "5 minutes",
      spiff: "3-6 months",
      xactly: "4-8 months",
      quotapath: "2-4 months",
      captivateiq: "3-5 months"
    },
    {
      feature: "Implementation Complexity",
      ryft: "Self-service",
      spiff: "Professional services",
      xactly: "Enterprise implementation",
      quotapath: "Technical setup required",
      captivateiq: "Custom configuration"
    },
    {
      feature: "AI Plan Parsing",
      ryft: "✓",
      spiff: "✗",
      xactly: "✗",
      quotapath: "✗",
      captivateiq: "✗"
    },
    {
      feature: "Mid-Year Plan Changes",
      ryft: "✓ Real-time",
      spiff: "Limited",
      xactly: "Complex process",
      quotapath: "Requires rebuild",
      captivateiq: "Professional services"
    },
    {
      feature: "Real-time Calculations",
      ryft: "✓",
      spiff: "✓",
      xactly: "Batch processing",
      quotapath: "✓",
      captivateiq: "✓"
    },
    {
      feature: "CRM Integrations",
      ryft: "100+ pre-built",
      spiff: "50+ integrations",
      xactly: "Enterprise only",
      quotapath: "Limited selection",
      captivateiq: "Custom development"
    },
    {
      feature: "Pricing Model",
      ryft: "Transparent, flat-rate",
      spiff: "Per user + fees",
      xactly: "Enterprise pricing",
      quotapath: "Per user",
      captivateiq: "Custom pricing"
    },
    {
      feature: "SMB/Mid-Market Focus",
      ryft: "✓",
      spiff: "Enterprise focus",
      xactly: "Enterprise only",
      quotapath: "Limited features",
      captivateiq: "Enterprise focus"
    }
  ];

  const competitorAnalysis = [
    {
      name: "RYFT",
      type: "recommended",
      description: "Built for growing companies that need enterprise features without enterprise complexity",
      strengths: [
        "5-minute setup with self-service onboarding",
        "AI-powered plan parsing and mid-year changes", 
        "Transparent pricing with no hidden fees",
        "Built specifically for SMB/Mid-market efficiency"
      ],
      pricing: "Transparent, flat-rate pricing"
    },
    {
      name: "Spiff",
      description: "Good enterprise features but complex implementation",
      strengths: ["Real-time calculations", "Decent integration library"],
      weaknesses: ["3-6 month implementation", "Per-user pricing gets expensive", "No AI plan parsing"],
      pricing: "Per-user pricing + implementation fees"
    },
    {
      name: "Xactly",
      description: "Mature enterprise platform with long implementation cycles",
      strengths: ["Established market presence", "Strong analytics"],
      weaknesses: ["4-8 month implementation required", "Enterprise-only focus", "Expensive licensing"],
      pricing: "Enterprise pricing, custom quotes"
    },
    {
      name: "Quotapath",
      description: "Simpler than enterprise solutions but limited features",
      strengths: ["Good mobile experience", "Reasonable pricing for small teams"],
      weaknesses: ["2-4 month setup", "Cannot handle complex plans", "Requires plan rebuilds"],
      pricing: "Per-user pricing model"
    },
    {
      name: "CaptivateIQ",
      description: "Strong calculation engine but requires technical expertise",
      strengths: ["Flexible configuration", "Good enterprise features"],
      weaknesses: ["3-5 month implementation", "Web-focused, limited mobile", "Custom pricing"],
      pricing: "Custom pricing, tiered plans"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Feature comparison
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              See how RYFT delivers superior time-to-value across every dimension that matters.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-24">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 font-semibold text-navy-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-accent-600 bg-accent-50">RYFT</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Spiff</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Xactly</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Quotapath</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">CaptivateIQ</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
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
                      {feature.quotapath}
                    </td>
                    <td className="text-center py-4 px-4 text-gray-700">
                      {feature.captivateiq}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Platform Analysis */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Platform breakdown
            </h3>
            <p className="text-lg text-navy-600">
              Understanding the strengths and limitations of each solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {competitorAnalysis.map((platform, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg border-2 ${
                  platform.type === 'recommended' 
                    ? 'bg-accent-50 border-accent-200 relative' 
                    : 'bg-white border-gray-200'
                }`}
              >
                {platform.type === 'recommended' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}

                <h4 className={`text-xl font-bold mb-3 ${
                  platform.type === 'recommended' ? 'text-accent-700' : 'text-navy-900'
                }`}>
                  {platform.name}
                </h4>
                
                <p className="text-navy-600 text-sm mb-6">
                  {platform.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-navy-900 mb-2 text-sm">Strengths</h5>
                    <ul className="space-y-1">
                      {platform.strengths.map((strength, strengthIndex) => (
                        <li key={strengthIndex} className="flex items-start text-sm text-navy-700">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {platform.weaknesses && (
                    <div>
                      <h5 className="font-semibold text-navy-900 mb-2 text-sm">Limitations</h5>
                      <ul className="space-y-1">
                        {platform.weaknesses.map((weakness, weaknessIndex) => (
                          <li key={weaknessIndex} className="flex items-start text-sm text-navy-700">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-4">
                    <h5 className="font-semibold text-navy-900 mb-1 text-sm">Pricing</h5>
                    <p className="text-sm text-navy-700">{platform.pricing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 bg-white rounded-lg p-12 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Ready to make the switch?
            </h3>
            <p className="text-navy-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their commission management 
              with RYFT's innovative approach. See the difference for yourself.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Book a Demo →
              </a>
              <a
                href="/product"
                className="border border-navy-300 hover:border-navy-400 text-navy-700 hover:text-navy-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
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