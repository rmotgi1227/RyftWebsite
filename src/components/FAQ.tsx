'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How secure is our commission data?",
      answer: "Your commission data is protected with enterprise-grade security. All data is encrypted in transit and at rest using AES-256 encryption. We follow SOC 2 compliance standards and implement strict access controls. RYFT is built for SMB and midmarket SaaS companies who need robust security without enterprise complexity."
    },
    {
      question: "Can you handle mid-year plan changes?",
      answer: "Absolutely. RYFT is built for the reality of sales operations - plans change frequently. You can modify commission structures, rates, and rules at any time without technical support. Changes take effect immediately and historical calculations remain intact."
    },
    {
      question: "How do you handle ramps, clawbacks, and complex scenarios?",
      answer: "RYFT automatically handles ramps (graduated commission rates for new hires), clawbacks (commission recovery for refunded deals), accelerators, caps, and other complex commission scenarios. Simply upload your plan and RYFT's AI parses the rules automatically."
    },
    {
      question: "What if RYFT doesn't integrate with our CRM?",
      answer: "RYFT connects to all major CRMs (Salesforce, HubSpot, Pipedrive), payroll systems (ADP, Gusto), and accounting platforms. If we don't have a pre-built integration, our team can typically build one within 2-3 weeks."
    },
    {
      question: "What happens during the transition from our current system?",
      answer: "RYFT's 5-minute setup includes importing your existing commission data and historical calculations. There's no disruption to your current payroll cycle - you can run both systems in parallel until you're confident in the transition."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight font-display px-4">
              Frequently asked questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:border-navy-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 sm:pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-navy-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`px-4 sm:px-6 transition-all duration-200 ease-in-out ${
                    openIndex === index 
                      ? 'pb-4 sm:pb-6 opacity-100' 
                      : 'pb-0 opacity-0 h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}