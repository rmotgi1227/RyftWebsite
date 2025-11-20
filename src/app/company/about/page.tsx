'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'


export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight">
              About RYFT
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're building the future of sales commission management. 
              No more spreadsheets, no more disputes, no more manual calculations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-navy-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Ryft started because we kept seeing the same problem over and over again. Companies were running their revenue engines on spreadsheets that broke every month. People were guessing their payouts. Finance was rebuilding the same logic from scratch. RevOps was acting like a support team instead of a strategic one. And everyone accepted it because there was never a real alternative.
                </p>
                <p>
                  While working in FP&A, we saw how much this actually hurt companies. Deals slipped. Reps lost trust. Leaders made decisions on bad data. The work was so messy and so painful that no one wanted to touch it. That was the moment we realized something important. The problem was not that people were bad at their jobs. The problem was that the tools were never built for the way modern revenue teams operate.
                </p>
                <p>
                  We started Ryft because we believed the entire system could be rebuilt from the ground up. Not with heavy onboarding. Not with long implementations. With a product that understands comp plans the moment you upload them and turns complex rules into clean logic instantly. A product that removes the repetitive setup work and lets companies focus on actually running their business.
                </p>
                <p>
                  As we built, we realized commissions were only the first layer. They sit at the center of how revenue works. If you can understand incentives, rules, exceptions, credits, adjustments and every detail that drives payouts, you can understand the entire revenue workflow. That insight shaped our vision for Ryft. We are not here to be another tool. We are here to replace the operational chaos that slows companies down.
                </p>
                <p>
                  We want a future where teams never rebuild the same process twice. Where everything works out of the box. Where operators get leverage instead of burnout. And where companies can move at the speed they think.
                </p>
                <p>
                  That is the world we are building toward. Commissions are just where it starts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">The Ryft Way</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer Obsessed",
                  description: "We're only successful when our customers are successful. Every feature, every decision, every line of code starts with customer problems.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  color: "bg-navy-100 text-navy-600"
                },
                {
                  title: "Build for 10x",
                  description: "We don't make things 10% better. We rebuild broken systems from scratch to work the way they should have from day one.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  color: "bg-navy-100 text-navy-600"
                },
                {
                  title: "Move Fast",
                  description: "Speed is a feature. We ship quickly, learn from real usage, and iterate. Perfect is the enemy of shipped.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  ),
                  color: "bg-navy-100 text-navy-600"
                },
                {
                  title: "Own It",
                  description: "Take responsibility for outcomes, not just tasks. When something breaks, we fix it. When customers hurt, we feel it.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: "bg-navy-100 text-navy-600"
                },
                {
                  title: "Stay Curious",
                  description: "Ask why. Challenge assumptions. The best solutions come from understanding problems deeply, not accepting them as they are.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: "bg-navy-100 text-navy-600"
                },
                {
                  title: "Keep It Simple",
                  description: "Complexity is the enemy of scale. The best tools are the ones that disappear into the background and just work.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                  color: "bg-navy-100 text-navy-600"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    transition: { duration: 0.2 } 
                  }}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-lg flex items-center justify-center ${value.color}`}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-navy-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Meet the Team</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
              {[
                { name: "Rishab Motgi", image: "/team/rishab-motgi.jpg" },
                { name: "Joshua Thomas", image: "/team/adith-chandraiah.jpg" },
                { name: "Aditya Singh", image: "/team/aditya-singh.png" },
                { name: "Adith Chandraiah", image: "/team/joshua-thomas.jpg" }
              ].map((person, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 160px, 160px"
                      quality={95}
                      priority={true}
                      className={`rounded-full ${
                        index === 0 ? 'object-cover object-top' : 
                        index === 1 ? 'object-cover object-top' :
                        'object-cover object-center'
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">{person.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}