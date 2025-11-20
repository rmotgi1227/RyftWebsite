'use client';

import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'navy-50' | 'navy-700' | 'navy-800' | 'navy-900';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'lg'
}: SectionProps) {
  const backgroundClasses = {
    'white': 'bg-white',
    'navy-50': 'bg-navy-50',
    'navy-700': 'bg-navy-700',
    'navy-800': 'bg-navy-800',
    'navy-900': 'bg-navy-900'
  };

  const paddingClasses = {
    'sm': 'py-s6',
    'md': 'py-s7',
    'lg': 'py-s9',
    'xl': 'py-s9 lg:py-16'
  };

  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}