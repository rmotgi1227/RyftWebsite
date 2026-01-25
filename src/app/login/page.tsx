"use client"

import Link from "next/link"
import Script from "next/script"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Extend Window interface for UnicornStudio
declare global {
  interface Window {
    UnicornStudio?: {
      init: () => void
      isInitialized?: boolean
    }
  }
}

export default function LoginPage() {
  const [embedLoaded, setEmbedLoaded] = useState(false)

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
    
    return () => {
      clearTimeout(timer)
      clearTimeout(embedTimer)
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* UNICORN.STUDIO INTERACTIVE BACKGROUND - Full Screen */}
      <div 
        className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ease-out ${
          embedLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          data-us-project="ifcZq7rbx5Krmi8GVVCi" 
          style={{ width: '100%', height: '100%' }}
        />
        {/* Overlay to cover canvas attribution */}
        <div className="unicorn-overlay" />
      </div>
      
      {/* Unicorn Studio Script */}
      <Script
        id="unicorn-studio-login"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){
              var u=window.UnicornStudio;
              if(u&&u.init){
                u.init()
              }else{
                window.UnicornStudio={isInitialized:!1};
                var i=document.createElement("script");
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js";
                i.onload=function(){
                  UnicornStudio.init()
                };
                (document.head||document.body).appendChild(i)
              }
            }();
          `,
        }}
      />

      {/* Back to Home */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <Button variant="ghost" size="sm" asChild className="text-white/70 hover:text-white hover:bg-white/10 touch-manipulation h-9 sm:h-10">
          <Link href="/" className="gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
