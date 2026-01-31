"use client"

import { Card, CardContent } from "@/components/ui/card"
import AnimateOnScroll from "@/components/AnimateOnScroll"

const integrations = [
  {
    name: "Microsoft Excel",
    description: "Native add-in—where commissions live",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path fill="#169154" d="M29,6H46.2C47.2,6,48,6.8,48,7.8V40.2c0,1-0.8,1.8-1.8,1.8H29V6z"/>
        <path fill="#21a366" d="M29,6h8v36h-8V6z"/>
        <path fill="#107c41" d="M0,10.2C0,8.4,1.4,7,3.2,7H29v34H3.2C1.4,41,0,39.6,0,37.8V10.2z"/>
        <path fill="#fff" d="M10.2,31l4.6-7.1L10.6,17h3.9l2.4,4.5c0.2,0.4,0.4,0.8,0.5,1.1h0c0.2-0.4,0.3-0.8,0.5-1.1l2.6-4.5h3.6l-4.4,6.9l4.6,7.1h-3.8l-2.8-5c-0.1-0.2-0.2-0.5-0.4-0.8h0c-0.1,0.3-0.2,0.5-0.4,0.8l-2.8,5H10.2z"/>
      </svg>
    ),
    color: "bg-green-500/10",
  },
  {
    name: "Google Sheets",
    description: "Full support for G-Suite teams",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path fill="#43a047" d="M37,45H11c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h19l10,10v29C40,43.7,38.7,45,37,45z"/>
        <path fill="#c8e6c9" d="M40,13H30V3L40,13z"/>
        <path fill="#2e7d32" d="M30,13l10,0V11L30,1v10C30,12.1,30,13,30,13z"/>
        <path fill="#e8f5e9" d="M31,23H17c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V25C33,23.9,32.1,23,31,23z"/>
        <path fill="#43a047" d="M17,29h6v3h-6V29z M25,29h6v3h-6V29z M17,34h6v3h-6V34z M25,34h6v3h-6V34z M17,24h6v3h-6V24z M25,24h6v3h-6V24z"/>
      </svg>
    ),
    color: "bg-green-500/10",
  },
  {
    name: "Salesforce",
    description: "Pull closed-won deals automatically",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path fill="#00a1e0" d="M20.1,11.3c1.5-1.6,3.6-2.5,5.9-2.5c3.1,0,5.8,1.7,7.2,4.2c1.2-0.5,2.5-0.8,3.9-0.8c5.5,0,10,4.5,10,10 s-4.5,10-10,10H10.5C5.3,32.2,1,27.9,1,22.7c0-4.4,3-8.1,7.1-9.1C9.5,10.2,12.8,8,16.7,8C18,8,19.2,8.5,20.1,11.3z"/>
      </svg>
    ),
    color: "bg-blue-500/10",
  },
  {
    name: "HubSpot",
    description: "Sync deal data for commission calcs",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path fill="#ff7a59" d="M35.5,19.5v-4.4c1.1-0.7,1.8-1.9,1.8-3.3c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.4,0.7,2.6,1.8,3.3v4.4 c-2.2,0.5-4.2,1.6-5.7,3.2l-12.1-9.4c0.1-0.4,0.2-0.8,0.2-1.3c0-2.8-2.2-5-5-5s-5,2.2-5,5s2.2,5,5,5c1.2,0,2.2-0.4,3.1-1l11.7,9.1 c-0.8,1.5-1.3,3.2-1.3,5c0,6.1,4.9,11,11,11s11-4.9,11-11C44,25.3,40.4,20.7,35.5,19.5z M33,35c-2.8,0-5-2.2-5-5s2.2-5,5-5 s5,2.2,5,5S35.8,35,33,35z"/>
      </svg>
    ),
    color: "bg-orange-500/10",
  },
  {
    name: "Microsoft Word",
    description: "Export reports and commission docs",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path fill="#2b579a" d="M40 8H8c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
        <path fill="#fff" d="M26.5 18.2l1.4 7.2 2.2-5.4h2.8l2.2 5.4 1.4-7.2h2.4l-2.8 12h-2.6l-2.2-5.6-2.2 5.6h-2.6L24 18.2h2.5zm-8.2 5.4l1.2-4.2-1.8-5.4h2.6l2.2 6.4 2.2-6.4h2.6l-1.8 5.4 1.2 4.2h2.4l-2.8-8.4h-2.2l-2.4 7-2.4-7h-2.2l-2.8 8.4h2.4z"/>
      </svg>
    ),
    color: "bg-blue-500/10",
  },
  {
    name: "Google Docs",
    description: "Create and share commission docs",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path fill="#4285f4" d="M37 45H11c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h18l10 10v28c0 1.1-.9 2-2 2z"/>
        <path fill="#a1c2f4" d="M29 5v10h10L29 5z"/>
        <path fill="#fff" d="M15 20h18v2H15v-2zm0 6h18v2H15v-2zm0 6h12v2H15v-2z"/>
      </svg>
    ),
    color: "bg-blue-500/10",
  },
]

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Dark to light gradient - Step 2: Dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d18] to-[#151528]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            No platform migration.
            <br />
            <span className="text-muted-foreground font-light italic">Just better commissions.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Continue using your existing tools.
          </p>
        </AnimateOnScroll>

        {/* Integrations Grid - 3 cols x 2 rows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <AnimateOnScroll 
              key={integration.name}
              animation="scale" 
              delay={index * 50}
            >
              <Card 
                className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group h-full touch-manipulation"
              >
              <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl ${integration.color} p-3 sm:p-4 md:p-5 mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {integration.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base md:text-lg line-clamp-2">
                  {integration.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base line-clamp-2">
                  {integration.description}
                </p>
              </CardContent>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
