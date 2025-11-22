'use client';

export default function EnhancedTrustSignals() {
  const testimonials = [
    {
      quote: "RYFT saved us 3 months of implementation time and eliminated our monthly commission disputes entirely.",
      author: "Sarah Chen",
      title: "Director of Revenue Operations",
      company: "TechFlow Solutions",
      results: "3 months saved, 0% dispute rate"
    },
    {
      quote: "We went from spending 2 days per month on commission calculations to having it completely automated.",
      author: "Michael Torres", 
      title: "VP of Finance",
      company: "GrowthCorp",
      results: "16 hours saved monthly"
    },
    {
      quote: "The AI plan parsing feature is incredible. Mid-year plan changes that used to take weeks now happen instantly.",
      author: "Jennifer Kim",
      title: "Sales Operations Manager", 
      company: "ScaleUp Inc",
      results: "95% faster plan deployment"
    }
  ];

  const metrics = [
    {
      number: "50+",
      label: "Growing companies",
      description: "trust RYFT for commission management"
    },
    {
      number: "99.9%",
      label: "Uptime guarantee",
      description: "with enterprise-grade reliability"
    },
    {
      number: "15hrs",
      label: "Average time saved",
      description: "per month in manual work"
    },
    {
      number: "5min",
      label: "Setup time",
      description: "from signup to first calculation"
    }
  ];

  const certifications = [
    {
      name: "Bank-Level Security",
      description: "Enterprise-grade data protection",
      icon: "🔒"
    },
    {
      name: "Data Protection",
      description: "Advanced privacy controls",
      icon: "🛡️"
    },
    {
      name: "24/7 Monitoring",
      description: "Continuous security oversight",
      icon: "🏆"
    },
    {
      name: "Secure by Design",
      description: "Built with security first",
      icon: "⚡"
    }
  ];

  const pressLogos = [
    "TechCrunch", "Forbes", "VentureBeat", "SaaS Weekly", "RevOps Review"
  ];

  const customerLogos = [
    { name: "TechFlow", industry: "SaaS" },
    { name: "GrowthCorp", industry: "E-commerce" },
    { name: "ScaleUp Inc", industry: "Fintech" },
    { name: "DataWorks", industry: "Analytics" },
    { name: "CloudFirst", industry: "Infrastructure" },
    { name: "RevOps Co", industry: "Services" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Trusted by finance & RevOps leaders
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Join hundreds of growing companies that have transformed their commission processes with RYFT.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">
                  {metric.number}
                </div>
                <div className="font-semibold text-navy-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-navy-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>

          {/* Customer Testimonials */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
              What our customers say
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <div className="text-accent-500 text-4xl mb-4">&ldquo;</div>
                  <p className="text-navy-700 mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <div className="font-semibold text-navy-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-navy-600 mb-2">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-accent-600 font-medium mb-3">
                      {testimonial.company}
                    </div>
                    <div className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full inline-block">
                      {testimonial.results}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Logos */}
          <div className="mb-16 text-center">
            <p className="text-navy-500 mb-8">Trusted by teams at:</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {customerLogos.map((customer, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-accent-200 transition-colors duration-200">
                  <div className="font-semibold text-navy-700 text-sm mb-1">
                    {customer.name}
                  </div>
                  <div className="text-xs text-navy-500">
                    {customer.industry}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">
              Enterprise security & compliance
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
                  <div className="text-3xl mb-3">{cert.icon}</div>
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

          {/* Press & Recognition */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">
              Featured in
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {pressLogos.map((publication, index) => (
                <div key={index} className="bg-gray-100 px-6 py-3 rounded text-navy-700 font-medium text-sm">
                  {publication}
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="bg-navy-900 rounded-lg p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Join the commission automation revolution
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-accent-400 mb-2">$2.4M+</div>
                <div className="text-navy-200">Commission dollars processed monthly</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-400 mb-2">48hrs</div>
                <div className="text-navy-200">Average implementation time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-400 mb-2">100%</div>
                <div className="text-navy-200">Customer satisfaction rate</div>
              </div>
            </div>

            <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
              Start automating your commission management today. No long contracts, no setup fees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                Start Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#roi-calculator"
                className="border border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
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