'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  index?: number;
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  index = 0
}: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-xl p-s6 shadow-lg border border-navy-100 transition-all duration-300 ${hover ? 'hover:shadow-xl' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
}