'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '../Navigation';
import RealTimeDemo from '../demos/RealTimeDemo';
import Footer from '../Footer';

export default function RealTimeDashboardsFeaturePage() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Unique Split Hero */}
      <section className="pt-32 pb-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              
              {/* Left: Content */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-8 leading-[0.9]">
                    Watch your
                    <span className="block">commissions</span>
                    <span className="block text-accent-600">update live</span>
                  </h1>
                  
                  <p className="text-xl text-navy-600 mb-10 leading-relaxed max-w-2xl">
                    Real-time dashboards that update the second a deal closes. Your team sees their earnings grow in real-time.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      See Live Demo
                    </a>
                    <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
                      Watch Video →
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Right: Live Stats */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg relative overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-100 rounded-full opacity-30 blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-600">UPDATING NOW</span>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="text-3xl font-bold text-navy-900 mb-1">$47,250</div>
                        <div className="text-sm text-gray-600">Sarah's Q4 commissions</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600 mb-1">+$2,500</div>
                        <div className="text-sm text-gray-600">Deal just closed</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-600 mb-1">94%</div>
                        <div className="text-sm text-gray-600">To quota this month</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-specific Dashboards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Dashboards for everyone
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Role-specific views that show exactly what each person needs to see.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  role: "Sales Rep",
                  features: ["Personal commission tracker", "Quota progress ring", "Deal pipeline value", "Achievement badges", "Earnings forecast"],
                  highlight: "Your earnings, live updated"
                },
                {
                  role: "Sales Manager", 
                  features: ["Team performance overview", "Commission cost analysis", "Leaderboard rankings", "Forecast accuracy", "Payout scheduling"],
                  highlight: "Team insights at a glance"
                },
                {
                  role: "Finance Team",
                  features: ["Commission accruals", "Budget vs actual spend", "Payout reconciliation", "Tax reporting data", "Audit trail access"],
                  highlight: "Financial control & compliance"
                },
                {
                  role: "Executives",
                  features: ["Revenue efficiency metrics", "Commission ROI analysis", "Performance trends", "Predictive analytics", "Strategic insights"],
                  highlight: "Strategic commission intelligence"
                }
              ].map((dashboard, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{dashboard.role}</h3>
                  <p className="text-lg text-navy-600 mb-6">{dashboard.highlight}</p>
                  <ul className="space-y-3">
                    {dashboard.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent-600 rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speed & Performance - Side by Side Comparison */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Real-time means real-time
              </h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                While competitors sync data in batches, RYFT processes everything instantly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Traditional */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Traditional Platforms</h3>
                <div className="space-y-6">
                  {[
                    { metric: "Data Sync", value: "Nightly batches", delay: "8-24 hour delay" },
                    { metric: "Updates", value: "Manual refresh", delay: "Stale information" },
                    { metric: "Accuracy", value: "Batch errors", delay: "Hard to debug" },
                    { metric: "Visibility", value: "Yesterday's data", delay: "Poor decisions" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-navy-900">{item.metric}</div>
                        <div className="text-sm text-gray-600">{item.value}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-red-500">{item.delay}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RYFT */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-navy-900 mb-6">RYFT</h3>
                <div className="space-y-6">
                  {[
                    { metric: "Data Sync", value: "Real-time streaming", delay: "&lt;1 second" },
                    { metric: "Updates", value: "Automatic refresh", delay: "Always current" },
                    { metric: "Accuracy", value: "Live validation", delay: "Instant alerts" },
                    { metric: "Visibility", value: "Live data", delay: "Smart decisions" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-navy-900">{item.metric}</div>
                        <div className="text-sm text-gray-600">{item.value}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-500">{item.delay}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Built for motivation
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Real-time visibility drives performance. Your team stays motivated when they can see results instantly.
              </p>
            </motion.div>

            {/* Simple Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Instant Updates", description: "See commission changes as deals close in real-time" },
                { title: "Smart Alerts", description: "Get notified when targets are hit or milestones reached" },
                { title: "Goal Tracking", description: "Visual progress indicators show distance to quota" },
                { title: "Leaderboards", description: "Team rankings updated live to drive competition" },
                { title: "Achievements", description: "Celebrate wins with automated milestone recognition" },
                { title: "Forecasts", description: "Predictive analytics show projected earnings" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
                See live data in action
              </h2>
              <p className="text-xl text-navy-600 mb-12">
                Watch real commission data update as deals move through your pipeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  See Live Dashboards
                </a>
                <Link
                  href="/product/audit-ability"
                  className="border border-navy-300 text-navy-700 hover:bg-navy-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Next: Complete Auditability
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