'use client';

import Image from 'next/image';

export default function NewHero() {
  return (
    <section className="bg-white pt-20 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Logo */}
          <div className="text-center mb-16">
            <Image
              src="/ryftlogo.png"
              alt="RYFT Logo"
              width={2400}
              height={800}
              className="h-32 md:h-40 w-auto mx-auto"
              priority
            />
          </div>
          
          {/* Main Content */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-8 leading-tight">
              Stop Wasting Hours Every Month on Commissions
            </h1>
            
            <p className="text-xl md:text-2xl text-navy-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              RYFT automates commission calculations in 5 minutes. No more disputes, no more spreadsheets.
            </p>

            {/* Direct Value Prop */}
            <div className="inline-flex items-center gap-3 bg-navy-50 border border-navy-200 rounded-full px-6 py-3 mb-12">
              <div className="w-2 h-2 bg-navy-500 rounded-full"></div>
              <span className="text-navy-700 font-medium text-sm">Eliminate commission disputes in 5 minutes</span>
            </div>
          </div>

          {/* Pain-Relief Stats - Clean Navy Theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center bg-navy-50 rounded-lg p-6 border border-navy-100">
              <div className="text-4xl font-bold text-navy-900 mb-2">$50K+</div>
              <div className="text-navy-700 font-medium">Lost Per Quarter</div>
              <div className="text-sm text-navy-500 mt-1">to commission disputes & errors</div>
            </div>
            <div className="text-center bg-navy-50 rounded-lg p-6 border border-navy-100">
              <div className="text-4xl font-bold text-navy-900 mb-2">40hrs</div>
              <div className="text-navy-700 font-medium">Wasted Monthly</div>
              <div className="text-sm text-navy-500 mt-1">on manual commission work</div>
            </div>
            <div className="text-center bg-navy-50 rounded-lg p-6 border border-navy-100">
              <div className="text-4xl font-bold text-navy-900 mb-2">5min</div>
              <div className="text-navy-700 font-medium">RYFT Setup</div>
              <div className="text-sm text-navy-500 mt-1">eliminate the entire problem</div>
            </div>
          </div>


          {/* Direct, Urgent CTAs - Navy Theme */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a
              href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-bold text-center transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Stop Losing Money - Fix This Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#roi-calculator"
              className="w-full sm:w-auto bg-navy-700 hover:bg-navy-600 text-white px-8 py-4 rounded-lg font-bold text-center transition-colors duration-200"
            >
              Calculate What You're Losing
            </a>
          </div>

          {/* Security & Trust Badges */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <div className="flex items-center gap-2 text-xs text-navy-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Bank-Level Security
              </div>
              <div className="flex items-center gap-2 text-xs text-navy-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Data Protection
              </div>
              <div className="flex items-center gap-2 text-xs text-navy-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Enterprise Security
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}