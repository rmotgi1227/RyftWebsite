'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormData {
  email: string;
  company: string;
  role: string;
}

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Waitlist signup:', data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-s9 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-s6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h2 className="text-h1 font-semibold text-white mb-s4">
              You're In! 🎉
            </h2>
            
            <p className="text-xl text-navy-200 mb-s6">
              Thank you for joining the RYFT waitlist. We'll be in touch soon with exclusive early access and updates.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-s6 border border-white/20">
              <p className="text-navy-100 mb-s4">
                <strong>What happens next?</strong>
              </p>
              <div className="text-left space-y-s2">
                <div className="flex items-center gap-s3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-navy-200">Early access invitation within 48 hours</span>
                </div>
                <div className="flex items-center gap-s3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-navy-200">Exclusive beta features and updates</span>
                </div>
                <div className="flex items-center gap-s3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-navy-200">Priority support and onboarding</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-s9 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-3 h-3 bg-accent-400 rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-4 h-4 bg-white rounded-full opacity-40"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-h1 font-semibold text-white mb-s4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Commission Process?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-navy-200 mb-s8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join the waitlist for early access to RYFT. Be among the first to experience 
            zero-setup commission management.
          </motion.p>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-s7 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-s5">
              <div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="Your work email"
                  className="w-full px-s4 py-s4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
                {errors.email && (
                  <p className="mt-s2 text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-s4">
                <div>
                  <input
                    {...register('company', { required: 'Company is required' })}
                    type="text"
                    placeholder="Company name"
                    className="w-full px-s4 py-s4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                  {errors.company && (
                    <p className="mt-s2 text-sm text-red-300">{errors.company.message}</p>
                  )}
                </div>
                
                <div>
                  <select
                    {...register('role', { required: 'Role is required' })}
                    className="w-full px-s4 py-s4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  >
                    <option value="" className="text-navy-900">Select your role</option>
                    <option value="sales-manager" className="text-navy-900">Sales Manager</option>
                    <option value="sales-ops" className="text-navy-900">Sales Operations</option>
                    <option value="finance" className="text-navy-900">Finance</option>
                    <option value="hr" className="text-navy-900">HR</option>
                    <option value="executive" className="text-navy-900">Executive</option>
                    <option value="other" className="text-navy-900">Other</option>
                  </select>
                  {errors.role && (
                    <p className="mt-s2 text-sm text-red-300">{errors.role.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-s2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Joining Waitlist...
                  </div>
                ) : (
                  'Join the Waitlist'
                )}
              </button>
            </form>

            <div className="mt-s6 flex items-center justify-center gap-s4 text-navy-300 text-sm">
              <div className="flex items-center gap-s2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure signup</span>
              </div>
              <div className="w-1 h-1 bg-navy-400 rounded-full"></div>
              <div className="flex items-center gap-s2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>No spam, ever</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}