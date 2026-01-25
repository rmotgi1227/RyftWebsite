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
    name: "QuickBooks",
    description: "Push payouts to accounting",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <circle cx="24" cy="24" r="20" fill="#2ca01c"/>
        <path fill="#fff" d="M17,14h4v3h-4c-1.7,0-3,1.3-3,3v8c0,1.7,1.3,3,3,3h4v3h-4c-3.3,0-6-2.7-6-6v-8C11,16.7,13.7,14,17,14z M31,14 c3.3,0,6,2.7,6,6v8c0,3.3-2.7,6-6,6h-4v-3h4c1.7,0,3-1.3,3-3v-8c0-1.7-1.3-3-3-3h-4v-3H31z"/>
      </svg>
    ),
    color: "bg-green-500/10",
  },
  {
    name: "Slack",
    description: "Alert reps on commission updates",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path fill="#33d375" d="M33,8c0-2.2-1.8-4-4-4s-4,1.8-4,4v10c0,2.2,1.8,4,4,4s4-1.8,4-4V8z"/>
        <path fill="#33d375" d="M43,18c0,2.2-1.8,4-4,4h-4v-4c0-2.2,1.8-4,4-4S43,15.8,43,18z"/>
        <path fill="#40c4ff" d="M8,15c-2.2,0-4,1.8-4,4s1.8,4,4,4h10c2.2,0,4-1.8,4-4s-1.8-4-4-4H8z"/>
        <path fill="#40c4ff" d="M18,5c-2.2,0-4,1.8-4,4v4h4c2.2,0,4-1.8,4-4S20.2,5,18,5z"/>
        <path fill="#e91e63" d="M15,40c0,2.2,1.8,4,4,4s4-1.8,4-4V30c0-2.2-1.8-4-4-4s-4,1.8-4,4V40z"/>
        <path fill="#e91e63" d="M5,30c0-2.2,1.8-4,4-4h4v4c0,2.2-1.8,4-4,4S5,32.2,5,30z"/>
        <path fill="#ffc107" d="M40,33c2.2,0,4-1.8,4-4s-1.8-4-4-4H30c-2.2,0-4,1.8-4,4s1.8,4,4,4H40z"/>
        <path fill="#ffc107" d="M30,43c2.2,0,4-1.8,4-4v-4h-4c-2.2,0-4,1.8-4,4S27.8,43,30,43z"/>
      </svg>
    ),
    color: "bg-purple-500/10",
  },
  {
    name: "Microsoft Teams",
    description: "Share commission reports instantly",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path fill="#5059c9" d="M44,22v10c0,1.1-0.9,2-2,2h-4V20h4C43.1,20,44,20.9,44,22z"/>
        <circle fill="#5059c9" cx="38" cy="14" r="4"/>
        <path fill="#7b83eb" d="M35,20v14c0,3.3-2.7,6-6,6H13c-0.4,0-0.8,0-1.1-0.1C9.2,39.4,7,36.9,7,34V20c0-3.3,2.7-6,6-6h16 C32.3,14,35,16.7,35,20z"/>
        <circle fill="#7b83eb" cx="26" cy="8" r="5"/>
        <path fill="#fff" d="M26,24h-5v11h-4V24h-5v-4h14V24z"/>
      </svg>
    ),
    color: "bg-indigo-500/10",
  },
  {
    name: "Zapier",
    description: "Connect any data source",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path fill="#ff4a00" d="M24,4c-11,0-20,9-20,20s9,20,20,20s20-9,20-20S35,4,24,4z M24,34c-5.5,0-10-4.5-10-10s4.5-10,10-10 s10,4.5,10,10S29.5,34,24,34z"/>
        <polygon fill="#ff4a00" points="24,14 26,22 24,24 22,22"/>
        <polygon fill="#ff4a00" points="24,34 22,26 24,24 26,26"/>
        <polygon fill="#ff4a00" points="14,24 22,22 24,24 22,26"/>
        <polygon fill="#ff4a00" points="34,24 26,26 24,24 26,22"/>
      </svg>
    ),
    color: "bg-orange-500/10",
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

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {integrations.map((integration, index) => (
            <AnimateOnScroll 
              key={integration.name}
              animation="scale" 
              delay={index * 50}
            >
              <Card 
                className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group h-full touch-manipulation"
              >
              <CardContent className="p-3 sm:p-4 md:p-6 flex flex-col items-center text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl ${integration.color} p-2 sm:p-2.5 md:p-3 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {integration.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base line-clamp-2">
                  {integration.name}
                </h3>
                <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm line-clamp-2">
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
