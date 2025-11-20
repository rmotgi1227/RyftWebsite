'use client';

export default function AuthenticTrustSignals() {
  const metrics = [
    {
      number: "99.9%",
      label: "Calculation accuracy",
      description: "Finance-approved precision"
    },
    {
      number: "5min",
      label: "Setup time",
      description: "From signup to first calculation"
    },
    {
      number: "100+",
      label: "Integrations",
      description: "Pre-built CRM and payroll connections"
    },
    {
      number: "15hrs",
      label: "Monthly time saved",
      description: "Eliminate manual commission work"
    }
  ];

  const certifications = [
    {
      name: "Bank-Level Security",
      description: "Enterprise-grade data protection"
    },
    {
      name: "Data Protection",
      description: "Advanced privacy controls"
    },
    {
      name: "Enterprise Security",
      description: "Bank-level data encryption"
    }
  ];

  const capabilities = [
    {
      title: "AI Plan Parsing",
      description: "Upload commission plans and get automatic setup in seconds"
    },
    {
      title: "Real-time Calculations",
      description: "Commission updates happen instantly as deals close"
    },
    {
      title: "Self-service Changes",
      description: "Make plan modifications without technical support"
    },
    {
      title: "Audit Trail",
      description: "Complete transparency for every calculation and change"
    }
  ];

  return (
    <section className="py-24 bg-navy-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Enterprise capabilities, startup simplicity
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              RYFT combines the power of enterprise commission management with the simplicity of modern software.
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 border border-navy-100">
                <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                  {metric.number}
                </div>
                <div className="font-semibold text-navy-800 mb-1 text-sm">
                  {metric.label}
                </div>
                <div className="text-sm text-navy-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>

          {/* Key Capabilities */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
              What makes RYFT different
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-navy-100">
                  <h4 className="text-xl font-semibold text-navy-900 mb-3">
                    {capability.title}
                  </h4>
                  <p className="text-navy-600">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">
              Enterprise security & compliance
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center border border-navy-100">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-navy-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="font-semibold text-navy-900 text-sm mb-2">
                    {cert.name}
                  </div>
                  <div className="text-xs text-navy-600">
                    {cert.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
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