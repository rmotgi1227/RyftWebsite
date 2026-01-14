'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewHomeHero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-navy-900 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder for video - replace with actual video URL */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="/ryft-hero-poster.jpg"
          onError={(e) => {
            // Hide video if it fails to load
            const target = e.currentTarget as HTMLVideoElement;
            target.style.display = 'none';
          }}
          onLoadedData={() => {
            // Show video when it's loaded
            if (videoRef.current) {
              videoRef.current.style.display = 'block';
            }
          }}
        >
          {/* Add video sources here when you have the video */}
          <source src="/ryft-hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div 
              className="absolute inset-0 animate-[move_20s_linear_infinite]"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                backgroundSize: '50px 50px',
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Overlay gradient - subtle */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent z-[5]"></div>

      {/* Text Overlay - Only visible when muted */}
      <AnimatePresence>
        {isMuted && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
              <div className="max-w-5xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight font-display px-4">
                    AI for Commission Management
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-navy-200 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                    RYFT's AI-powered platform supercharges your commission tracking. Zero setup. Real-time calculations. Complete transparency.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a
                    href="https://app.ryft.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-navy-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 w-full sm:w-auto text-center"
                  >
                    Try it Free
                  </a>
                  <a
                    href="/demo"
                    className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 w-full sm:w-auto text-center"
                  >
                    Book Demo
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mute Button - Bottom Right */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white/95 hover:bg-white text-navy-900 p-4 sm:p-5 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </section>
  );
}

