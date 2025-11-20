'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '../Navigation';
import ZeroSetupDemo from '../demos/ZeroSetupDemo';
import Footer from '../Footer';

export default function ZeroSetupFeaturePage() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Centered Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm font-semibold text-accent-600 mb-4 uppercase tracking-wide">
                Zero Setup
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-navy-900 mb-6 leading-tight">
                Connect and go live in
                <span className="block text-accent-600">5 minutes</span>
              </h1>
              <p className="text-2xl text-navy-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Connect CRM, connect HRIS, upload commission plans. Our AI does everything else - no technical setup required.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Section - Full Width */}
      <section className="pt-4 pb-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <ZeroSetupDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Column Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-navy-900 mb-6">
                Why zero setup matters
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Connect Instantly",
                  description: "One-click integrations with Salesforce, HubSpot, Pipedrive, and any CRM. No technical setup required.",
                  benefits: ["Salesforce ready", "HubSpot ready", "API connections", "Real-time sync"]
                },
                {
                  title: "AI Parses & Configures", 
                  description: "Upload your commission plan documents. AI automatically parses rules and configures everything without human intervention.",
                  benefits: ["Reads any plan format", "Extracts complex rules", "Auto configuration", "Instant deployment"]
                },
                {
                  title: "Go Live Now",
                  description: "Start processing commissions immediately. No waiting periods, no consultant calls, no delays.",
                  benefits: ["Immediate activation", "Live calculations", "Real-time processing", "Zero downtime"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                  <p className="text-navy-600 mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-navy-500">• {benefit}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-navy-900 mb-6">
                Traditional vs RYFT Timeline
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                { time: "Day 1", traditional: "Contact sales team", ryft: "Sign up and connect CRM" },
                { time: "Week 2", traditional: "Discovery calls and scoping", ryft: "AI maps your data automatically" },
                { time: "Month 1", traditional: "Contract negotiations", ryft: "ROI already realized" },
                { time: "Month 3", traditional: "Technical setup begins", ryft: "Scaled to entire team" },
                { time: "Month 6", traditional: "Finally go live", ryft: "Full platform optimization" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-lg p-6 shadow-lg border border-gray-200"
                >
                  <div className="text-accent-600 font-bold text-lg">{item.time}</div>
                  <div className="text-gray-600">{item.traditional}</div>
                  <div className="text-navy-900 font-semibold">{item.ryft}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-navy-900 mb-6">
                Ready for zero setup?
              </h2>
              <p className="text-xl text-navy-600 mb-12">
                See how RYFT eliminates months of implementation work in a 15-minute demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Book a Demo
                </a>
                <Link
                  href="/product/ai-plan-parsing"
                  className="border border-navy-300 text-navy-700 hover:bg-navy-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Next: AI Plan Parsing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}