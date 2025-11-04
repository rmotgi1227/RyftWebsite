'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

interface FormData {
  email: string;
}

export default function SimpleWaitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setError(null);
      
      // Insert email into Supabase
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          { 
            email: data.email,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) {
        throw supabaseError;
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error saving email:', err);
      setError('Failed to join waitlist. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating sparkles */}
        <motion.div 
          className="absolute top-20 left-10 w-3 h-3 bg-accent-400 rounded-full opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full opacity-40"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div 
          className="max-w-md mx-auto text-center p-8 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            You're In! 🎉
          </h2>
          
          <p className="text-navy-200">
            Thank you for joining the RYFT waitlist. We'll be in touch soon with early access.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-white px-4 py-8 overflow-hidden relative">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #334155 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-4xl w-full relative z-10">
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo using actual image */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <Image
              src="/ryftlogo.png"
              alt="RYFT Logo"
              width={2400}
              height={800}
              className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto max-w-full"
              priority
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-3 px-4 -mt-20">
            Commissions.{' '}
            <span className="text-accent-600">
              Automated.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base text-navy-700 mb-6 leading-relaxed max-w-2xl mx-auto px-4">
            Ryft replaces spreadsheets and legacy tools with live, zero-setup commission models that integrate directly with your CRM and payroll systems.
          </p>
        </motion.div>

        <motion.div 
          className="bg-navy-50 rounded-2xl p-4 sm:p-6 border border-navy-100 shadow-lg mb-4 mx-4 sm:mx-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-navy-800 font-medium mb-2 text-sm sm:text-base">
                Email Address
              </label>
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                id="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg bg-white border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
              {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
              )}
            </div>

            <div className="flex flex-col lg:flex-row gap-3 justify-center items-stretch lg:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full lg:w-auto bg-navy-900 hover:bg-navy-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl lg:min-w-48"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Joining...
                  </div>
                ) : (
                  'Join the Waitlist →'
                )}
              </button>
              
              <a
                href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-white hover:bg-navy-50 text-navy-900 border-2 border-navy-900 hover:border-navy-800 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center lg:min-w-48"
              >
                Schedule a Meeting
              </a>
              <a
                href="/blog"
                className="w-full lg:w-auto bg-accent-50 hover:bg-accent-100 text-accent-700 border-2 border-accent-200 hover:border-accent-300 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center lg:min-w-48"
              >
                Blog
              </a>
            </div>
          </form>
        </motion.div>

        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-navy-600 font-medium text-sm sm:text-base">
            No spreadsheets. No setup. Just clarity.
          </p>
        </motion.div>
      </div>
    </div>
  );
}