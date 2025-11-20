'use client';

export default function SimpleSolution() {
  const features = [
    {
      title: "Actually Works Out of the Box",
      description: "Upload your comp plan, connect your CRM, and you're done. No 6-month implementation projects.",
      label: "Minutes, not months"
    },
    {
      title: "AI That Reads Your Comp Plans",
      description: "Just upload a PDF of your commission structure. Our AI figures out the math so you don't have to.",
      label: "No manual setup"
    },
    {
      title: "Change Plans Mid-Quarter", 
      description: "Market changed? Comp plan needs an update? Do it in real-time without breaking everything.",
      label: "Zero downtime"
    },
    {
      title: "Built for Growing Companies",
      description: "Enterprise tools are overkill. Spreadsheets are too simple. RYFT is built for companies that are scaling fast.",
      label: "Just right"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                How RYFT actually fixes this
              </h2>
              <p className="text-xl text-navy-600 mb-12">
                Stop fighting your commission system. Start using one that actually works.
              </p>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-navy-900">
                        {feature.title}
                      </h3>
                      <span className="text-xs font-medium text-accent-600 bg-accent-100 px-2 py-1 rounded-full">
                        {feature.label}
                      </span>
                    </div>
                    <p className="text-navy-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href="/vs-competitors"
                  className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium"
                >
                  See detailed comparison →
                </a>
              </div>
            </div>

            {/* Right side - Demo mockup */}
            <div className="lg:order-last">
              <div className="bg-navy-900 rounded-xl p-6 shadow-2xl">
                <div className="bg-white rounded-lg p-6">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 pb-4 mb-4 border-b border-gray-100">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-sm text-gray-500">RYFT Dashboard</div>
                  </div>
                  
                  {/* Setup progress */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Setup Progress</span>
                      <span className="text-sm font-medium text-green-600">Complete ✓</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-accent-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  {/* Commission data */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-accent-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">AI Plan Parsing</span>
                      <span className="text-sm font-medium text-accent-600">Complete</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">CRM Connected</span>
                      <span className="text-sm font-medium text-green-600">Salesforce</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Commission Sync</span>
                      <span className="text-sm font-medium text-blue-600">Live</span>
                    </div>
                  </div>
                </div>
                
                {/* Time badge */}
                <div className="absolute -top-3 -right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  4 min setup
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}