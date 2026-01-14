'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'


export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section with Background Pattern */}
      <section className="relative pt-32 pb-20 sm:pb-24 md:pb-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0 animate-[move_20s_linear_infinite]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, navy 1px, transparent 0)`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.span
                className="inline-block text-xs sm:text-sm font-semibold text-accent-600 uppercase tracking-wider mb-6 px-4 py-2 bg-accent-50 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Us
              </motion.span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-navy-900 mb-6 sm:mb-8 md:mb-10 leading-[0.95] font-display px-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block"
                >
                  We're rebuilding
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-accent-600"
                >
                  commission management
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block"
                >
                  from scratch.
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl text-navy-600 leading-relaxed max-w-4xl mx-auto px-4 font-light"
              >
                No spreadsheets. No disputes. No manual work. Just software that actually works the way revenue teams think.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section with Alternating Layout */}
      <section className="py-24 sm:py-32 md:py-40 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 sm:mb-20 md:mb-24"
            >
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-semibold text-accent-600 uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mt-4 leading-tight font-display">
                Why we started
              </h2>
            </motion.div>

            {/* Story Content with Visual Elements */}
            <div className="space-y-16 sm:space-y-20 md:space-y-24">
              {[
                {
                  id: 1,
                  content: "RYFT started because we kept seeing the same problem over and over again. Companies were running their revenue engines on spreadsheets that broke every month. People were guessing their payouts. Finance was rebuilding the same logic from scratch. RevOps was acting like a support team instead of a strategic one. And everyone accepted it because there was never a real alternative.",
                  highlight: "The problem wasn't the people. It was the tools."
                },
                {
                  id: 2,
                  content: "While working in FP&A, we saw how much this actually hurt companies. Deals slipped. Reps lost trust. Leaders made decisions on bad data. The work was so messy and so painful that no one wanted to touch it. That was the moment we realized something important. The problem was not that people were bad at their jobs. The problem was that the tools were never built for the way modern revenue teams operate.",
                  highlight: "We believed there had to be a better way."
                },
                {
                  id: 3,
                  content: "We started RYFT because we believed the entire system could be rebuilt from the ground up. Not with heavy onboarding. Not with long implementations. With a product that understands comp plans the moment you upload them and turns complex rules into clean logic instantly. A product that removes the repetitive setup work and lets companies focus on actually running their business.",
                  highlight: "Built for the way modern teams actually work."
                },
                {
                  id: 4,
                  content: "As we built, we realized commissions were only the first layer. They sit at the center of how revenue works. If you can understand incentives, rules, exceptions, credits, adjustments and every detail that drives payouts, you can understand the entire revenue workflow. That insight shaped our vision for RYFT. We are not here to be another tool. We are here to replace the operational chaos that slows companies down.",
                  highlight: "Commissions are just the beginning."
                },
                {
                  id: 5,
                  content: "We want a future where teams never rebuild the same process twice. Where everything works out of the box. Where operators get leverage instead of burnout. And where companies can move at the speed they think.",
                  highlight: "That is the world we are building toward."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative ${index % 2 === 0 ? '' : 'lg:pl-12'} ${index === 0 ? 'border-l-4 border-accent-500 pl-6' : ''}`}
                >
                  {index === 0 && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-400 to-transparent opacity-50"></div>
                  )}
                  <div className="space-y-6">
                    {item.highlight && (
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 leading-tight font-display"
                      >
                        {item.highlight}
                      </motion.p>
                    )}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-lg sm:text-xl md:text-2xl text-navy-700 leading-relaxed"
                    >
                      {item.content}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Modern Cards */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-100 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16 sm:mb-20 md:mb-24"
            >
              <span className="text-xs sm:text-sm font-semibold text-accent-600 uppercase tracking-wider inline-block mb-4 px-4 py-2 bg-accent-50 rounded-full">
                Our Principles
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mt-4 mb-6 leading-tight font-display">
                The RYFT Way
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-navy-600 max-w-3xl mx-auto leading-relaxed font-light">
                The principles that guide everything we build
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {[
                {
                  title: "Customer Obsessed",
                  description: "We're only successful when our customers are successful. Every feature, every decision, every line of code starts with customer problems.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  gradient: "from-red-500 to-pink-500"
                },
                {
                  title: "Build for 10x",
                  description: "We don't make things 10% better. We rebuild broken systems from scratch to work the way they should have from day one.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Move Fast",
                  description: "Speed is a feature. We ship quickly, learn from real usage, and iterate. Perfect is the enemy of shipped.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  ),
                  gradient: "from-purple-500 to-violet-500"
                },
                {
                  title: "Own It",
                  description: "Take responsibility for outcomes, not just tasks. When something breaks, we fix it. When customers hurt, we feel it.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Stay Curious",
                  description: "Ask why. Challenge assumptions. The best solutions come from understanding problems deeply, not accepting them as they are.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  gradient: "from-orange-500 to-amber-500"
                },
                {
                  title: "Keep It Simple",
                  description: "Complexity is the enemy of scale. The best tools are the ones that disappear into the background and just work.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                  gradient: "from-indigo-500 to-blue-500"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 } 
                  }}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon with gradient */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 relative z-10">{value.title}</h3>
                  <p className="text-base text-navy-600 leading-relaxed relative z-10">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Design */}
      <section className="py-24 sm:py-32 md:py-40 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16 sm:mb-20 md:mb-24"
            >
              <span className="text-xs sm:text-sm font-semibold text-accent-600 uppercase tracking-wider inline-block mb-4 px-4 py-2 bg-accent-50 rounded-full">
                The Team
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mt-4 mb-6 leading-tight font-display">
                Meet the builders
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-navy-600 max-w-3xl mx-auto leading-relaxed font-light">
                The team behind RYFT
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
              {[
                { name: "Rishab Motgi", image: "/team/rishab-motgi.jpg" },
                { name: "Joshua Thomas", image: "/team/adith-chandraiah.jpg" },
                { name: "Aditya Singh", image: "/team/aditya-singh.png" },
                { name: "Adith Chandraiah", image: "/team/joshua-thomas.jpg" }
              ].map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="text-center group"
                >
                  <div className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 mx-auto mb-6">
                    {/* Gradient glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      index === 0 ? 'from-accent-400/30 to-pink-500/30' :
                      index === 1 ? 'from-blue-400/30 to-cyan-500/30' :
                      index === 2 ? 'from-green-400/30 to-emerald-500/30' :
                      'from-purple-400/30 to-violet-500/30'
                    } rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl scale-150`}></div>
                    
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="(max-width: 768px) 224px, 224px"
                        quality={95}
                        className={`rounded-full object-cover border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-300 ${
                          index === 0 ? 'object-top' : 
                          index === 1 ? 'object-top' :
                          'object-center'
                        } group-hover:border-accent-200`}
                      />
                    </motion.div>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors duration-300"
                  >
                    {person.name}
                  </motion.h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="py-24 sm:py-32 md:py-40 bg-navy-900 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 animate-[move_20s_linear_infinite]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="inline-block text-xs sm:text-sm font-semibold text-accent-400 uppercase tracking-wider mb-6 px-4 py-2 bg-accent-900/30 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Join Us
              </motion.span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 sm:mb-8 leading-tight font-display">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  Building the future
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="block text-accent-400"
                >
                  of revenue ops
                </motion.span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl text-navy-200 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Ready to eliminate commission chaos? Let's talk.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="/demo"
                  className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Demo
                </motion.a>
                <motion.a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
