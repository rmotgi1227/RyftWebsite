'use client';

export default function CleanComparisonHero() {
  const comparisonData = [
    {
      category: "Setup Time",
      ryft: "5 minutes",
      others: "3-6 months"
    },
    {
      category: "Implementation",
      ryft: "Self-service",
      others: "Professional services"
    },
    {
      category: "Pricing",
      ryft: "Transparent, flat-rate",
      others: "Per-user + hidden fees"
    }
  ];

  return (
    <section className="bg-white pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight">
            Why choose RYFT over{' '}
            <span className="text-accent-500">legacy platforms?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            While Spiff, Xactly, Quotapath, and CaptivateIQ require months of setup and technical expertise, 
            RYFT delivers enterprise results in minutes.
          </p>

          {/* Quick Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            
            {/* Traditional Platforms */}
            <div className="bg-gray-100 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700 mb-6">
                Traditional Platforms
              </h3>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{item.category}:</span>
                    <span className="font-medium text-gray-800">{item.others}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RYFT */}
            <div className="bg-accent-50 rounded-lg p-8 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-700 mb-6">
                RYFT
              </h3>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-accent-600">{item.category}:</span>
                    <span className="font-semibold text-accent-800">{item.ryft}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              See RYFT in Action →
            </a>
            <a
              href="/product"
              className="border border-navy-300 hover:border-navy-400 text-navy-700 hover:text-navy-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Features
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}