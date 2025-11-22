'use client';

export default function ResourceCenter() {
  const templates = [
    {
      title: "Commission Plan Templates",
      description: "Ready-to-use templates for common commission structures",
      items: [
        "Territory-based Commission Plans",
        "Tiered Commission Structure Templates", 
        "Team Selling Commission Models",
        "Channel Partner Commission Plans"
      ],
      downloadCount: "2,400+"
    },
    {
      title: "Implementation Guides",
      description: "Step-by-step guides to get your team up and running",
      items: [
        "5-Minute RYFT Setup Guide",
        "CRM Integration Best Practices",
        "Commission Plan Migration Checklist",
        "Team Onboarding Templates"
      ],
      downloadCount: "1,800+"
    },
    {
      title: "Calculation Examples",
      description: "Real-world examples of commission calculations",
      items: [
        "SaaS Commission Examples",
        "Enterprise Deal Commission Splits",
        "Mid-Year Plan Change Scenarios",
        "Multi-Product Commission Models"
      ],
      downloadCount: "3,100+"
    }
  ];

  const guides = [
    {
      category: "Getting Started",
      title: "Commission Management 101",
      description: "Complete guide to modern commission management practices",
      readTime: "12 min read",
      difficulty: "Beginner",
      topics: ["Best Practices", "Common Pitfalls", "Tool Selection"]
    },
    {
      category: "Implementation",
      title: "Migrating from Spreadsheets to RYFT",
      description: "Step-by-step process for transitioning your team",
      readTime: "8 min read", 
      difficulty: "Intermediate",
      topics: ["Data Migration", "Team Training", "Process Optimization"]
    },
    {
      category: "Advanced",
      title: "Building Complex Commission Plans",
      description: "Advanced strategies for enterprise commission structures",
      readTime: "15 min read",
      difficulty: "Advanced", 
      topics: ["Multi-tier Plans", "Channel Partners", "International Teams"]
    },
    {
      category: "Best Practices",
      title: "Commission Plan Design Principles",
      description: "How to design plans that motivate and scale",
      readTime: "10 min read",
      difficulty: "Intermediate",
      topics: ["Plan Design", "Motivation Theory", "Scaling Strategies"]
    }
  ];

  const calculators = [
    {
      title: "Commission ROI Calculator", 
      description: "Calculate potential savings from automation",
      inputs: ["Team Size", "Current Method", "Deal Volume"],
      featured: true
    },
    {
      title: "Plan Complexity Analyzer",
      description: "Assess how complex your current commission plans are",
      inputs: ["Plan Rules", "Variables", "Exceptions"]
    },
    {
      title: "Time Savings Estimator",
      description: "Estimate monthly time savings with RYFT",
      inputs: ["Current Process", "Team Size", "Deal Count"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Commission management resources
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Templates, guides, and tools to help you master commission management and get the most out of RYFT.
            </p>
          </div>

          {/* Templates Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
              Free templates & checklists
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:border-accent-200 transition-colors duration-200">
                  <h4 className="text-xl font-semibold text-navy-900 mb-3">
                    {template.title}
                  </h4>
                  <p className="text-navy-600 mb-6 text-sm">
                    {template.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {template.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-navy-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-navy-500">{template.downloadCount} downloads</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href="/demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-200 block"
                    >
                      Download Free
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guides Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
              Educational guides
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:border-accent-200 transition-colors duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-medium">
                      {guide.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      guide.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-navy-900 mb-3">
                    {guide.title}
                  </h4>
                  <p className="text-navy-600 mb-4 text-sm">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-navy-500 mb-4">
                    <span>{guide.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {guide.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-gray-100 text-navy-700 px-2 py-1 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="#"
                    className="text-accent-600 hover:text-accent-700 font-medium text-sm flex items-center gap-1"
                  >
                    Read Guide
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Calculators Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
              Interactive calculators
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {calculators.map((calculator, index) => (
                <div key={index} className={`rounded-lg p-8 shadow-sm border transition-colors duration-200 hover:border-accent-200 ${
                  calculator.featured 
                    ? 'bg-accent-50 border-accent-200' 
                    : 'bg-white border-gray-200'
                }`}>
                  {calculator.featured && (
                    <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  
                  <h4 className={`text-xl font-semibold mb-3 ${
                    calculator.featured ? 'text-accent-900' : 'text-navy-900'
                  }`}>
                    {calculator.title}
                  </h4>
                  <p className={`mb-6 text-sm ${
                    calculator.featured ? 'text-accent-700' : 'text-navy-600'
                  }`}>
                    {calculator.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className={`text-sm font-medium ${
                      calculator.featured ? 'text-accent-800' : 'text-navy-800'
                    }`}>
                      Required inputs:
                    </div>
                    <ul className="space-y-1">
                      {calculator.inputs.map((input, inputIndex) => (
                        <li key={inputIndex} className="flex items-start text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            calculator.featured ? 'bg-accent-500' : 'bg-navy-500'
                          }`}></div>
                          <span className={calculator.featured ? 'text-accent-700' : 'text-navy-700'}>
                            {input}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={calculator.title === 'Commission ROI Calculator' ? '#roi-calculator' : '#'}
                    className={`w-full px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-200 block ${
                      calculator.featured
                        ? 'bg-accent-500 hover:bg-accent-600 text-white'
                        : 'bg-navy-900 hover:bg-navy-800 text-white'
                    }`}
                  >
                    Launch Calculator
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-navy-900 rounded-lg p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Need help with implementation?
            </h3>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our team of commission management experts is here to help you succeed. 
              Get personalized guidance and support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                Talk to an Expert
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/product"
                className="border border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Explore All Features
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}