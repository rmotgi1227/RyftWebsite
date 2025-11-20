'use client';

import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [companyHoverTimeout, setCompanyHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (companyHoverTimeout) {
      clearTimeout(companyHoverTimeout);
      setCompanyHoverTimeout(null);
    }
    setIsProductDropdownOpen(true);
    setIsCompanyDropdownOpen(false); // Close company dropdown
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductDropdownOpen(false);
    }, 200); // 200ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleCompanyMouseEnter = () => {
    if (companyHoverTimeout) {
      clearTimeout(companyHoverTimeout);
      setCompanyHoverTimeout(null);
    }
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsCompanyDropdownOpen(true);
    setIsProductDropdownOpen(false); // Close product dropdown
  };

  const handleCompanyMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCompanyDropdownOpen(false);
    }, 200); // 200ms delay before closing
    setCompanyHoverTimeout(timeout);
  };

  return (
    <nav className="bg-white border-b border-navy-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/ryftlogo.png"
              alt="RYFT Logo"
              width={360}
              height={108}
              className="h-24 w-auto"
            />
          </Link>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          </div>

          {/* Right Side CTAs and Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/product"
                className="flex items-center gap-1 text-navy-700 hover:text-navy-900 font-medium transition-colors duration-300"
              >
                Product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link 
                    href="/product"
                    className="block px-3 py-2 text-navy-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <div className="font-medium">Product Overview</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/product/zero-setup"
                    className="block px-3 py-2 text-navy-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div className="font-medium">Zero Setup</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/product/ai-plan-parsing"
                    className="block px-3 py-2 text-navy-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <div className="font-medium">AI Plan Parsing</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/product/real-time-dashboards"
                    className="block px-3 py-2 text-navy-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="font-medium">Real-time Dashboards</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/product/audit-ability"
                    className="block px-3 py-2 text-navy-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="font-medium">Complete Auditability</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleCompanyMouseEnter}
              onMouseLeave={handleCompanyMouseLeave}
            >
              <button 
                className="flex items-center gap-1 text-navy-700 hover:text-navy-900 font-medium transition-colors duration-300"
              >
                Company
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Company Dropdown Menu */}
              {isCompanyDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link 
                    href="/company/about"
                    className="block px-3 py-2 text-navy-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">About</div>
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="block px-3 py-2 text-navy-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">Contact</div>
                  </Link>
                  
                  <Link 
                    href="/blog"
                    className="block px-3 py-2 text-navy-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">Blog</div>
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/try-free"
              className="border border-navy-300 hover:border-navy-400 text-navy-700 hover:text-navy-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-navy-50"
            >
              Try it Free
            </Link>
            
            <Link 
              href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button - To be implemented later if needed */}
          <div className="md:hidden">
            <Link 
              href="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}