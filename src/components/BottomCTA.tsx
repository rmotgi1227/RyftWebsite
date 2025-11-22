'use client';

export default function BottomCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Bottom CTA */}
          <div className="bg-navy-900 rounded-lg p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to automate your commissions?
            </h3>
            <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
              Join the commission automation revolution. Set up your entire system in 5 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy-900 hover:bg-navy-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                Book Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#roi-calculator"
                className="border border-navy-600 hover:border-navy-500 text-white hover:bg-navy-800 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Calculate Your Savings
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}