'use client';

export default function CleanIntegrationsList() {
  const integrationCategories = [
    {
      title: "CRM Systems",
      description: "Sync deal data and commission calculations",
      platforms: [
        { name: "Salesforce", status: "Live" },
        { name: "HubSpot", status: "Live" },
        { name: "Pipedrive", status: "Live" },
        { name: "Monday.com", status: "Live" },
        { name: "Zoho CRM", status: "Beta" },
        { name: "Microsoft Dynamics", status: "Coming Soon" }
      ]
    },
    {
      title: "Payroll & HR",
      description: "Export commission data for payroll processing",
      platforms: [
        { name: "ADP", status: "Live" },
        { name: "Workday", status: "Live" },
        { name: "Paychex", status: "Live" },
        { name: "BambooHR", status: "Beta" },
        { name: "Gusto", status: "Beta" },
        { name: "Paylocity", status: "Coming Soon" }
      ]
    },
    {
      title: "Accounting & Finance", 
      description: "Connect with accounting and financial systems",
      platforms: [
        { name: "QuickBooks", status: "Live" },
        { name: "Xero", status: "Live" },
        { name: "NetSuite", status: "Live" },
        { name: "SAP", status: "Beta" },
        { name: "Oracle", status: "Beta" },
        { name: "Sage", status: "Coming Soon" }
      ]
    }
  ];

  const apiFeatures = [
    {
      title: "REST API",
      description: "Full CRUD operations for all commission data and calculations"
    },
    {
      title: "Webhooks", 
      description: "Real-time notifications when commission events occur"
    },
    {
      title: "GraphQL",
      description: "Flexible queries for complex data requirements"
    },
    {
      title: "SDKs",
      description: "Pre-built libraries for JavaScript, Python, and Go"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              100+ pre-built integrations
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Connect RYFT with the tools you already use. Most integrations take less than 5 minutes to set up.
            </p>
          </div>

          {/* Integration Categories */}
          <div className="space-y-16 mb-24">
            {integrationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-lg text-navy-600">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.platforms.map((platform, platformIndex) => (
                    <div
                      key={platformIndex}
                      className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200 hover:border-accent-200 transition-colors duration-200"
                    >
                      <div className="font-medium text-navy-900 text-sm mb-2">
                        {platform.name}
                      </div>
                      <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                        platform.status === 'Live' ? 'bg-green-100 text-green-700' :
                        platform.status === 'Beta' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {platform.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* API Section */}
          <div className="bg-navy-900 rounded-lg p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Developer-first API
              </h3>
              <p className="text-navy-200 text-lg max-w-2xl mx-auto">
                Need a custom integration? Our comprehensive API gives you full control 
                over commission data and workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {apiFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-navy-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Talk to Our Team →
                </a>
                <a
                  href="#"
                  className="border border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  API Documentation
                </a>
              </div>
            </div>
          </div>

          {/* Request Integration */}
          <div className="text-center mt-16 bg-white rounded-lg p-12 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Don't see your platform?
            </h3>
            <p className="text-navy-600 mb-8">
              We're constantly adding new integrations. Let us know what you need and we'll 
              prioritize it in our development roadmap.
            </p>
            
            <a
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-navy-300 hover:border-navy-400 text-navy-700 hover:text-navy-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Request Integration
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}