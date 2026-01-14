'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function NewHomeNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 120; // Account for sticky nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      className={`sticky z-50 ${
        isScrolled 
          ? 'top-4 mx-auto max-w-5xl left-0 right-0 bg-white/70 backdrop-blur-md shadow-xl border border-gray-200 rounded-lg' 
          : 'top-0 border-b bg-white border-navy-100'
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        borderRadius: isScrolled ? 12 : 0,
      }}
      transition={{ 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        borderRadius: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
    >
      <div className={isScrolled ? '' : 'container mx-auto px-4 sm:px-6'}>
        <div className={`transition-all duration-300 ${
          isScrolled ? 'py-1 sm:py-1.5' : 'py-3 sm:py-4 md:py-5'
        }`}>
          <div className={`flex items-center justify-between relative ${isScrolled ? 'px-4 sm:px-6' : ''}`}>
            <motion.div
              animate={{
                marginLeft: isScrolled ? 0 : -32,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Link href="/" className="flex items-center group">
                <motion.div
                  animate={{
                    scale: isScrolled ? 0.85 : 1,
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <Image
                    src="/ryftlogo.png"
                    alt="RYFT Logo"
                    width={360}
                    height={108}
                    className={`transition-all duration-300 ${
                      isScrolled ? 'h-12 sm:h-14 md:h-16 w-auto' : 'h-16 sm:h-20 md:h-24 w-auto'
                    }`}
                  />
                </motion.div>
              </Link>
            </motion.div>
          
          {/* Center Navigation - Links - Absolutely Centered */}
          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#zero-setup"
              onClick={(e) => handleAnchorClick(e, '#zero-setup')}
              className={`font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-navy-700 hover:text-navy-900'
              }`}
            >
              <span className="relative">
                Features
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </a>
            <Link 
              href="/company/about"
              className={`font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-navy-700 hover:text-navy-900'
              }`}
            >
              <span className="relative">
                About
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
            <Link 
              href="/contact"
              className={`font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-navy-700 hover:text-navy-900'
              }`}
            >
              <span className="relative">
                Contact
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
            <Link 
              href="/blog"
              className={`font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-navy-700 hover:text-navy-900'
              }`}
            >
              <span className="relative">
                Blog
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </div>

          {/* Right Side - CTAs */}
          <motion.div 
            className="hidden md:flex items-center gap-4"
            animate={{
              marginRight: isScrolled ? 0 : -32,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <motion.a 
              href="https://app.ryft.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className={`border rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'border-gray-300 hover:border-gray-400 text-gray-700 hover:text-navy-900 hover:bg-gray-50 px-4 py-2' 
                  : 'border-navy-300 hover:border-navy-400 text-navy-700 hover:text-navy-900 hover:bg-navy-50 px-4 py-2'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try it Free
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/demo"
                className={`bg-navy-900 hover:bg-navy-800 text-white rounded-lg font-semibold transition-all duration-300 block ${
                  isScrolled ? 'px-6 py-2' : 'px-6 py-2'
                }`}
              >
                Book Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link 
              href="/demo"
              className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
            >
              Book Demo
            </Link>
          </div>
        </div>
        </div>
      </div>
    </motion.nav>
  );
}

