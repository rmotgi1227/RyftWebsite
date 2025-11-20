'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/product' },
        { label: 'Zero Setup', href: '/product/zero-setup' },
        { label: 'AI Plan Parsing', href: '/product/ai-plan-parsing' },
        { label: 'Real-time Dashboards', href: '/product/real-time-dashboards' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Book Demo', href: 'https://calendly.com/rishab-motgi-complytics/ryft-discovery-call' },
        { label: 'Try it Free', href: '/try-free' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/company/about' },
        { label: 'Contact', href: '/contact' },
      ]
    }
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-6">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/ryftlogo.png"
                  alt="RYFT Logo"
                  width={480}
                  height={144}
                  className="h-32 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-navy-300 text-base leading-relaxed mb-8 max-w-sm">
                Enterprise-grade commission management with zero setup complexity. 
                Deploy in minutes, not months.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://x.com/rishabmotgi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/complytics/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={`text-center lg:text-left ${sectionIndex === 0 ? 'flex flex-col justify-center' : 'mt-12'}`}>
                <h3 className="font-bold text-white mb-6 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-navy-300 hover:text-white transition-colors duration-300 text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-sm text-navy-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>© {currentYear} RYFT. All rights reserved.</p>
            <div className="flex gap-6 mt-3 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}