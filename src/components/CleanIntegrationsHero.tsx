'use client';

export default function CleanIntegrationsHero() {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight">
            Integrates with{' '}
            <span className="text-accent-500">your entire stack</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect RYFT to your existing CRM, payroll, and accounting systems. 
            No data migration, no workflow changes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Talk to Our Team →
            </a>
            <a
              href="/product"
              className="border border-navy-300 hover:border-navy-400 text-navy-700 hover:text-navy-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              See All Features
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}