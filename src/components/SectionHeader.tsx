'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleColor?: 'navy-900' | 'white';
  subtitleColor?: 'navy-600' | 'navy-200' | 'navy-300';
  className?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  align = 'center',
  titleColor = 'navy-900',
  subtitleColor = 'navy-600',
  className = ''
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-s8 ${alignClasses} ${className}`}>
      <motion.h2 
        className={`text-h1 font-semibold text-${titleColor} mb-s4`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className={`text-lg text-${subtitleColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}