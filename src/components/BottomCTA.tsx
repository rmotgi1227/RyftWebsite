'use client';

export default function BottomCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-navy-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Bottom CTA */}
          <div className="text-white text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight font-display px-4">
              Ready to automate your commissions?
            </h3>
            <p className="text-lg sm:text-xl text-navy-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Join the commission automation revolution. Set up your entire system in 5 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy-900 hover:bg-navy-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#roi-calculator"
                className="border border-navy-600 hover:border-navy-500 text-white hover:bg-navy-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 w-full sm:w-auto text-center"
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