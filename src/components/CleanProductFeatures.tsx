'use client';

export default function CleanProductFeatures() {
  const featureCategories = [
    {
      title: "Setup & Deployment",
      description: "Get running in minutes, not months",
      features: [
        {
          title: "Self-Service Setup",
          description: "Upload your commission plan, connect your CRM, and go live. No IT team required."
        },
        {
          title: "AI Plan Reader",
          description: "Upload any commission document as PDF. Our AI parses it and sets up all calculations automatically."
        },
        {
          title: "Instant Integrations",
          description: "Pre-built connectors for Salesforce, HubSpot, Pipedrive, and 100+ other platforms."
        }
      ]
    },
    {
      title: "Calculations & Processing",
      description: "Accurate commission tracking in real-time",
      features: [
        {
          title: "Real-Time Processing", 
          description: "Commission calculations update instantly as deals move through your CRM pipeline."
        },
        {
          title: "Complex Plan Support",
          description: "Handles multi-tier, split commissions, accelerators, and any structure you can think of."
        },
        {
          title: "Mid-Year Changes",
          description: "Update commission structures anytime without losing historical data or breaking the system."
        }
      ]
    },
    {
      title: "Data & Reporting",
      description: "Transparency and insights your team can trust",
      features: [
        {
          title: "Live Dashboards",
          description: "Real-time commission tracking with role-based views for reps, managers, and finance."
        },
        {
          title: "Audit Trails",
          description: "Complete calculation history and audit logs for compliance and dispute resolution."
        },
        {
          title: "Export Anywhere",
          description: "Push commission data to your payroll system, accounting software, or download as spreadsheets."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Complete commission platform
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Everything you need to replace spreadsheets with automated, accurate commission tracking.
            </p>
          </div>

          <div className="space-y-24">
            {featureCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-lg text-navy-600">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4">
                        {feature.title}
                      </h4>
                      <p className="text-navy-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-24 bg-white rounded-lg p-12 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Ready to see RYFT in action?
            </h3>
            <p className="text-navy-600 mb-8 max-w-2xl mx-auto">
              Book a personalized demo to see how RYFT can automate your commission tracking 
              and eliminate manual work.
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
                href="/vs-competitors"
                className="border border-navy-300 hover:border-navy-400 text-navy-700 hover:text-navy-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Compare Solutions
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}