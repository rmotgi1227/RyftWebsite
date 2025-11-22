'use client';

export default function SimpleFeatures() {
  const features = [
    {
      title: "Setup in Minutes",
      description: "Upload your commission plan, connect your CRM, invite your team. You'll be tracking commissions in under 10 minutes.",
      details: ["No IT setup required", "Works with any CRM", "Team gets access instantly"]
    },
    {
      title: "AI Reads Your Comp Plans", 
      description: "Got a complex commission structure? Just upload it as a PDF. Our AI figures out all the math automatically.",
      details: ["Handles complex plans", "No manual configuration", "Works with any structure"]
    },
    {
      title: "Change Plans Anytime",
      description: "Need to update your comp plan mid-quarter? Just upload the new one. RYFT adapts without breaking anything.", 
      details: ["No system downtime", "Historical data preserved", "Team sees changes instantly"]
    },
    {
      title: "Connects to Everything",
      description: "Works with Salesforce, HubSpot, Pipedrive, and 100+ other tools. If it has an API, RYFT can connect to it.",
      details: ["Pre-built CRM connections", "Payroll system sync", "Custom integrations available"]
    },
    {
      title: "Numbers You Can Trust",
      description: "Every calculation is auditable. Your finance team will actually trust the commission numbers for once.",
      details: ["Full audit trails", "Error detection", "Matches your CRM data"]
    },
    {
      title: "No Surprise Fees", 
      description: "One flat price per company. No per-user fees, no implementation costs, no gotcha pricing.",
      details: ["Flat company pricing", "No per-user fees", "Includes all features"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Why teams love RYFT
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              We built the commission tool we wish we had when we were scaling our last company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-navy-700">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-white rounded-lg p-12 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Ready to stop fighting with spreadsheets?
            </h3>
            <p className="text-navy-600 mb-8 max-w-2xl mx-auto">
              Book a 15-minute demo and see how RYFT can automate your commission tracking. 
              No sales pitch, just a real demo with your actual data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Show Me How It Works →
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