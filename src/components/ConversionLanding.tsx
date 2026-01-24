'use client';

import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface FormData {
  email: string;
}

// Stagger animation variants
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

// Animated counter with easing
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Demo placeholder
function DemoPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-navy-50 border border-navy-200 group cursor-pointer">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-20 h-20 rounded-full bg-accent-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-700 transition-all duration-300 shadow-lg shadow-accent-600/25"
          whileHover={{ scale: 1.05 }}
        >
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.div>
      </div>

      {/* Label */}
      <div className="absolute bottom-5 left-5 px-4 py-2 bg-white/95 backdrop-blur rounded-lg text-sm text-navy-700 font-medium shadow-sm">
        {title}
      </div>
    </div>
  );
}

export default function ConversionLanding() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 600));
    setIsSubmitted(true);
  };

  const features = [
    {
      num: '01',
      title: 'Zero-Config Setup',
      desc: 'Connect your CRM and go live in minutes. No consultants, no complexity.',
    },
    {
      num: '02',
      title: 'AI-Powered Rules',
      desc: 'Describe your commission plan in plain English. We handle the rest.',
    },
    {
      num: '03',
      title: 'Real-Time Visibility',
      desc: 'Reps see earnings the moment deals close. No more waiting.',
    },
    {
      num: '04',
      title: 'Payroll Integration',
      desc: 'One-click export to any payroll system with full audit trails.',
    },
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Pipedrive', 'Workday', 'ADP', 'Gusto',
    'QuickBooks', 'Xero', 'NetSuite', 'Rippling', 'Paylocity', 'Sage'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$0',
      period: '/mo',
      desc: 'For small teams',
      features: ['Up to 5 reps', '1 commission plan', 'Basic integrations', 'Email support'],
      primary: false,
    },
    {
      name: 'Growth',
      price: '$49',
      period: '/rep/mo',
      desc: 'For scaling teams',
      features: ['Unlimited reps', 'Unlimited plans', 'All integrations', 'Priority support', 'API access', 'Custom dashboards'],
      primary: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large orgs',
      features: ['Everything in Growth', 'Dedicated manager', 'Custom integrations', 'SSO & SAML', 'SLA guarantee'],
      primary: false,
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white relative">
        <motion.div
          className="text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent-600 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-navy-900 mb-4">You're in</h2>
          <p className="text-navy-600 text-xl mb-8 max-w-md mx-auto">
            We'll reach out with early access soon.
          </p>
          <a
            href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium"
          >
            Book a demo call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white text-navy-900 overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Image src="/ryftlogo.png" alt="RYFT" width={800} height={267} className="h-7 w-auto" />
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-navy-600 hover:text-navy-900 transition-colors text-sm tracking-wide">Features</a>
            <a href="#pricing" className="text-navy-600 hover:text-navy-900 transition-colors text-sm tracking-wide">Pricing</a>
            <a href="/blog" className="text-navy-600 hover:text-navy-900 transition-colors text-sm tracking-wide">Blog</a>
          </div>
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get Early Access
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-white to-white -z-10" />
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-accent-100/30 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-200 rounded-full text-accent-700 text-sm font-medium">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" />
                Now accepting early access
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tight mb-8"
            >
              Commission
              <br />
              <span className="text-accent-600">automation</span>
              <br />
              that works
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-navy-600 max-w-2xl mb-12 leading-relaxed"
            >
              Replace spreadsheets with intelligent commission workflows.
              Zero setup, real-time visibility, integrated payroll.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white text-lg font-medium rounded-xl transition-all hover:shadow-xl hover:shadow-navy-900/10"
              >
                Get Early Access — Free
              </button>
              <a
                href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-navy-50 border border-navy-200 text-navy-900 text-lg font-medium rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== VIDEO SECTION ===== */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <DemoPlaceholder title="See Ryft in action — 2:30" />
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 border-y border-navy-100 bg-navy-50/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: 95, suffix: '%', label: 'Time saved' },
              { value: 200, suffix: '+', label: 'On waitlist' },
              { value: 0, suffix: '', label: 'Disputes' },
              { value: 5, suffix: 'min', label: 'Setup time' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl md:text-6xl font-semibold text-navy-900 mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-navy-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-3xl"
          >
            <span className="text-accent-600 text-sm font-medium uppercase tracking-wider mb-4 block">Features</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Everything you need,
              <br />
              <span className="text-navy-400">nothing you don't</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-6xl font-semibold text-navy-200 group-hover:text-accent-200 transition-colors">
                    {feature.num}
                  </span>
                  <div className="pt-4">
                    <h3 className="font-display text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-navy-600 text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SHOWCASE ===== */}
      <section className="py-24 md:py-32 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 text-sm font-medium uppercase tracking-wider mb-4 block">Product</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              A workspace teams love
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <DemoPlaceholder title="Commission Dashboard" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <DemoPlaceholder title="Plan Builder" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <DemoPlaceholder title="Analytics" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATIONS ===== */}
      <section className="py-24 md:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 text-sm font-medium uppercase tracking-wider mb-4 block">Integrations</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Connects to everything
            </h2>
            <p className="text-navy-600 text-xl">50+ native integrations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {integrations.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-6 py-3 bg-white border border-navy-200 rounded-full text-navy-600 text-sm font-medium hover:border-accent-300 hover:text-accent-600 transition-colors cursor-pointer"
              >
                {name}
              </motion.div>
            ))}
            <div className="px-6 py-3 bg-navy-50 border border-navy-200 rounded-full text-navy-500 text-sm">
              +38 more
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-24 md:py-40 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-accent-400 text-sm font-medium uppercase tracking-wider mb-4 block">Pricing</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Simple pricing
            </h2>
            <p className="text-navy-300 text-xl">Start free, scale as you grow</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.primary
                    ? 'bg-white text-navy-900 ring-4 ring-accent-500'
                    : 'bg-navy-800/50 border border-navy-700'
                }`}
              >
                {plan.primary && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                    Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-1 ${plan.primary ? 'text-navy-900' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.primary ? 'text-navy-500' : 'text-navy-400'}`}>{plan.desc}</p>
                </div>
                <div className="mb-8">
                  <span className={`font-display text-5xl font-semibold ${plan.primary ? 'text-navy-900' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.primary ? 'text-navy-500' : 'text-navy-400'}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className={`flex items-center gap-3 text-sm ${plan.primary ? 'text-navy-600' : 'text-navy-300'}`}>
                      <svg className={`w-5 h-5 flex-shrink-0 ${plan.primary ? 'text-accent-600' : 'text-accent-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3.5 rounded-xl font-semibold transition-all ${
                    plan.primary
                      ? 'bg-navy-900 text-white hover:bg-navy-800'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="waitlist" className="py-32 md:py-48 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-100/50 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-100/50 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Ready to automate
              <br />
              your commissions?
            </h2>
            <p className="text-navy-600 text-xl mb-12 max-w-xl mx-auto">
              Join the waitlist for early access. No credit card required.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  {...register('email', {
                    required: 'Email required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
                  })}
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 px-6 py-4 bg-white border border-navy-200 rounded-xl text-navy-900 placeholder-navy-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 text-lg"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-xl transition-all disabled:opacity-50 whitespace-nowrap text-lg"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              {errors.email && (
                <p className="mt-3 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </form>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-navy-500">
              <a
                href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a demo
              </a>
              <a href="/blog" className="flex items-center gap-2 hover:text-accent-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Read our blog
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 border-t border-navy-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Image src="/ryftlogo.png" alt="RYFT" width={800} height={267} className="h-6 w-auto opacity-50" />
            <div className="flex items-center gap-8 text-navy-500 text-sm">
              <a href="#features" className="hover:text-navy-900 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-navy-900 transition-colors">Pricing</a>
              <a href="/blog" className="hover:text-navy-900 transition-colors">Blog</a>
            </div>
            <p className="text-navy-400 text-sm">© 2025 Ryft</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
