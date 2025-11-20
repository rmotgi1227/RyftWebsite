'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface InteractiveCounterProps {
  finalValue: number;
  label: string;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function InteractiveCounter({ 
  finalValue, 
  label, 
  duration = 2,
  suffix = '',
  className = ''
}: InteractiveCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * finalValue);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [finalValue, duration, hasAnimated]);

  return (
    <motion.div
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <div className="text-4xl font-bold text-accent-600 mb-s2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-navy-600 font-medium">{label}</div>
    </motion.div>
  );
}