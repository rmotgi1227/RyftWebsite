'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface FeatureSectionProps {
  tag: string;
  title: string;
  description: string;
  features: string[];
  linkHref: string;
  linkText: string;
  visualIcon?: string;
  visualText?: string;
  badgeText?: string;
  badgeColor?: string;
  imageLeft?: boolean;
  demoComponent?: React.ReactNode;
}

export default function AnimatedFeatureSection({
  tag,
  title,
  description,
  features,
  linkHref,
  linkText,
  visualIcon,
  visualText,
  badgeText,
  badgeColor,
  imageLeft = false,
  demoComponent
}: FeatureSectionProps) {
  const textContent = (
    <motion.div
      className={imageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"}
      initial={{ opacity: 0, x: imageLeft ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="text-sm font-semibold text-accent-600 mb-4 uppercase tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {tag}
      </motion.div>
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-lg text-navy-600 mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
      <ul className="space-y-4 mb-8">
        {features.map((item, index) => (
          <motion.li 
            key={index}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: imageLeft ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
            viewport={{ once: true }}
          >
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-navy-700">{item}</span>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <Link 
          href={linkHref}
          className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold group"
        >
          {linkText}
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );

  const visualContent = (
    <motion.div 
      className={`${imageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"} ${demoComponent ? 'rounded-lg overflow-hidden' : 'bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center relative overflow-hidden'}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {demoComponent ? (
        demoComponent
      ) : (
        <>
          <motion.div 
            className="text-navy-400 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4">{visualIcon}</div>
            <div>{visualText}</div>
          </motion.div>
          {badgeText && (
            <motion.div 
              className={`absolute top-4 right-4 ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {badgeText}
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  );

  return (
    <motion.div 
      className="mb-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {imageLeft ? visualContent : textContent}
        {imageLeft ? textContent : visualContent}
      </div>
    </motion.div>
  );
}