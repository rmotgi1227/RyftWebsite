"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

// Extend Window interface for UnicornStudio
declare global {
  interface Window {
    UnicornStudio?: {
      init: () => void
      isInitialized?: boolean
    }
  }
}

export default function HeroSection() {
  const [embedLoaded, setEmbedLoaded] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  // Reinitialize Unicorn Studio on component mount (handles client-side navigation)
  useEffect(() => {
    const initUnicorn = () => {
      if (typeof window !== 'undefined' && window.UnicornStudio?.init) {
        window.UnicornStudio.init()
      }
    }
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(initUnicorn, 100)
    
    // Fade in embed after a delay
    const embedTimer = setTimeout(() => setEmbedLoaded(true), 300)
    
    // Fade in content with stagger
    const contentTimer = setTimeout(() => setContentVisible(true), 500)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(embedTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[100dvh] overflow-hidden bg-black">
      {/* UNICORN.STUDIO INTERACTIVE BACKGROUND */}
      <div 
        id="unicorn-studio-background"
        className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ease-out ${
          embedLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <div 
          data-us-project="ZUgFvFbYt705x029cOth" 
          style={{ width: '100%', height: '100%' }}
        />
        {/* Overlay to cover canvas attribution */}
        <div className="unicorn-overlay" />
      </div>
      
      {/* Unicorn Studio Script */}
      <Script
        id="unicorn-studio"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){
              var u=window.UnicornStudio;
              if(u&&u.init){
                if(document.readyState==="loading"){
                  document.addEventListener("DOMContentLoaded",function(){u.init()})
                }else{
                  u.init()
                }
              }else{
                window.UnicornStudio={isInitialized:!1};
                var i=document.createElement("script");
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js";
                i.onload=function(){
                  if(document.readyState==="loading"){
                    document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})
                  }else{
                    UnicornStudio.init()
                  }
                };
                (document.head||document.body).appendChild(i)
              }
            }();
          `,
        }}
      />

      {/* Hero Content - Positioned at lower left with generous whitespace */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end">
        <div className="px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              <span 
                className={`block text-foreground transition-all duration-700 ease-out ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                THE COMMISSION
              </span>
              <span 
                className={`block text-foreground transition-all duration-700 ease-out delay-100 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                AGENT<span className="text-primary"></span>
              </span>
              {/* Platform Icons */}
              <div 
                className={`flex items-center gap-2 sm:gap-2.5 md:gap-2.5 mt-4 md:mt-6 transition-all duration-700 ease-out ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <span 
                  className="text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl mr-2 sm:mr-3 md:mr-4"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: 'italic', fontWeight: 300 }}
                >
                  in
                </span>
                
                {/* Microsoft 365 Logo */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
                    <rect x="2" y="2" width="20" height="20" rx="2" fill="#f25022"/>
                    <rect x="26" y="2" width="20" height="20" rx="2" fill="#7fba00"/>
                    <rect x="2" y="26" width="20" height="20" rx="2" fill="#00a4ef"/>
                    <rect x="26" y="26" width="20" height="20" rx="2" fill="#ffb900"/>
                  </svg>
                </div>

                {/* Divider */}
                <div className="w-px h-8 sm:h-10 md:h-12 bg-muted-foreground/40" />

                {/* Google Workspace Logo */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
                    <path fill="#4285f4" d="M24 9.5c3.2 0 6.1 1.1 8.4 3l6.3-6.3C34.7 2.7 29.7.5 24 .5 14.8.5 7 6.5 3.5 14.8l7.4 5.7C12.6 14.1 17.8 9.5 24 9.5z"/>
                    <path fill="#34a853" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.3 5.7c4.3-4 6.8-9.9 6.8-17.4z"/>
                    <path fill="#fbbc05" d="M10.9 28.5c-1-3-1-6.2 0-9.2L3.5 13.6c-3.4 6.8-3.4 14.8 0 21.6l7.4-5.7z"/>
                    <path fill="#ea4335" d="M24 47.5c5.7 0 10.5-1.9 14-5.1l-7.3-5.7c-1.9 1.3-4.3 2-6.7 2-6.2 0-11.4-4.2-13.3-9.8l-7.2 5.6c3.5 7 11.3 13 20.5 13z"/>
                  </svg>
                </div>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
