'use client';

export default function CleanProductHero() {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight">
            Commission management that{' '}
            <span className="text-accent-500">actually works</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Everything you need to automate commission tracking without the enterprise complexity or pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">5min</div>
              <div className="text-navy-600">Setup time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">99.9%</div>
              <div className="text-navy-600">Accuracy rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">100+</div>
              <div className="text-navy-600">Integrations</div>
            </div>
          </div>

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
              See Comparison
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}