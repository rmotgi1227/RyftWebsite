"use client"

import { useState } from "react"
import { 
  Workflow, 
  ShieldCheck, 
  Database,
  Infinity,
  ChevronRight,
  Sparkles
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import AnimateOnScroll from "@/components/AnimateOnScroll"

const features = [
  {
    id: "workflows",
    icon: Workflow,
    title: "Lives Inside Excel",
    subtitle: "No migration required",
    description: "You've used Excel for 20 years. We're not here to replace it. Ryft installs as a native Excel add-in—your spreadsheets, your data, now with commission intelligence built in.",
    highlight: "Works where RevOps already works",
    demo: {
      title: "Connected Workflows",
      connections: [
        { name: "Microsoft Excel", status: "connected", icon: "📗" },
        { name: "Google Sheets", status: "connected", icon: "📊" },
        { name: "Salesforce CRM", status: "syncing", icon: "☁️" },
        { name: "HubSpot", status: "connected", icon: "🔶" },
      ],
      status: "All systems connected"
    }
  },
  {
    id: "audits",
    icon: ShieldCheck,
    title: "Commission Auditing",
    subtitle: "Catch errors before payroll",
    description: "Ryft flags commission calculation errors, missing data, and policy violations before they hit rep paychecks. No more clawbacks, no more disputes.",
    highlight: "Stop overpayments before they happen",
    demo: {
      title: "Audit Dashboard",
      checks: [
        { label: "Tiered rate calculation", status: "passed" },
        { label: "Quota attainment validation", status: "passed" },
        { label: "Split credit reconciliation", status: "warning" },
        { label: "Draw balance check", status: "passed" },
      ],
      status: "1 split credit flagged for review"
    }
  },
  {
    id: "dataroom",
    icon: Database,
    title: "Knows Your Comp Plan",
    subtitle: "Learns your rules in minutes",
    description: "Describe your commission structure in plain English—tiered rates, accelerators, SPIFs, MBOs. Ryft understands and calculates instantly. No consultants, no 6-month implementations.",
    highlight: "From comp plan to calculations in hours",
    demo: {
      title: "Comp Plan Setup",
      files: [
        { name: "Q1_commission_policy.pdf", size: "856 KB", status: "processed" },
        { name: "sales_hierarchy.xlsx", size: "124 KB", status: "processed" },
        { name: "historical_payouts.csv", size: "2.4 MB", status: "processed" },
      ],
      progress: 100,
      status: "Comp plan fully configured"
    }
  },
  {
    id: "nocontext",
    icon: Infinity,
    title: "Handles Real Scale",
    subtitle: "Enterprise-grade processing",
    description: "Unlike QuotaPath or CaptivateIQ, Ryft processes your entire commission history without data limits. Millions of transactions, years of payout data—all in context, all the time.",
    highlight: "Built for Finance team scale",
    demo: {
      title: "Data Processing",
      stats: [
        { label: "Transactions", value: "2.4M" },
        { label: "Rep History", value: "5+ yrs" },
        { label: "Data Limits", value: "None" },
      ],
      status: "Full context maintained"
    }
  },
]

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <section id="features" className="py-16 md:py-24 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Dark to light gradient - Step 1: Darkest (continues from hero black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0d0d18]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16 md:mb-20">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Your spreadsheets.
            <br />
            <span className="text-muted-foreground font-light italic">Now with a brain.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stop fighting with formulas. Ryft is the commission copilot that lives inside Excel—
            built for RevOps and Finance teams who refuse to migrate.
          </p>
        </AnimateOnScroll>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Feature List */}
          <AnimateOnScroll animation="slide-left" delay={100} className="space-y-3">
            {features.map((feature) => {
              const isActive = activeFeature.id === feature.id
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl transition-all duration-300 group",
                    isActive 
                      ? "bg-card/60 backdrop-blur-md border border-primary/40 shadow-lg shadow-primary/10" 
                      : "bg-card/20 backdrop-blur-sm border border-transparent hover:bg-card/40 hover:border-border/50"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-xl transition-colors duration-300",
                      isActive ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground group-hover:bg-muted"
                    )}>
                      <feature.icon className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={cn(
                          "font-semibold text-lg transition-colors duration-300",
                          isActive ? "text-foreground" : "text-foreground/80"
                        )}>
                          {feature.title}
                        </h3>
                        <ChevronRight className={cn(
                          "h-5 w-5 transition-all duration-300 shrink-0",
                          isActive ? "text-primary translate-x-0 opacity-100" : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                        )} />
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">
                        {feature.subtitle}
                      </p>
                      
                      {isActive && (
                        <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-foreground/90 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-primary text-sm font-medium">
                              {feature.highlight}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </AnimateOnScroll>

          {/* Right: Product Demo */}
          <AnimateOnScroll animation="slide-right" delay={200} className="lg:sticky lg:top-32">
            <div className="bg-card/40 backdrop-blur-xl border border-border/40 rounded-3xl p-6 shadow-2xl shadow-black/20">
              {/* Demo Window Chrome */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground font-medium">
                    {activeFeature.demo.title}
                  </span>
                </div>
              </div>

              {/* Demo Content - Changes based on active feature */}
              <div className="min-h-[320px] transition-all duration-500">
                {activeFeature.id === "workflows" && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-3">
                    {activeFeature.demo.connections?.map((conn, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-card/60 border border-border/30">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{conn.icon}</span>
                          <span className="text-sm text-foreground font-medium">{conn.name}</span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={cn(
                            "text-xs",
                            conn.status === "connected" 
                              ? "bg-green-500/10 text-green-400 border-green-500/20"
                              : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          )}
                        >
                          {conn.status === "connected" ? "● Connected" : "↻ Syncing"}
                        </Badge>
                      </div>
                    ))}
                    <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                      <p className="text-sm text-green-400 flex items-center gap-2">
                        <span>✓</span> {activeFeature.demo.status}
                      </p>
                    </div>
                  </div>
                )}

                {activeFeature.id === "audits" && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-3">
                    {activeFeature.demo.checks?.map((check, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-card/60 border border-border/30">
                        <span className="text-sm text-foreground">{check.label}</span>
                        <Badge 
                          variant="secondary" 
                          className={cn(
                            "text-xs",
                            check.status === "passed" 
                              ? "bg-green-500/10 text-green-400 border-green-500/20"
                              : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                          )}
                        >
                          {check.status === "passed" ? "✓ Passed" : "⚠ Review"}
                        </Badge>
                      </div>
                    ))}
                    <div className="mt-4 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                      <p className="text-sm text-yellow-400">
                        <strong>Alert:</strong> {activeFeature.demo.status}
                      </p>
                    </div>
                  </div>
                )}

                {activeFeature.id === "dataroom" && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="space-y-3 mb-6">
                      {activeFeature.demo.files?.map((file, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-card/60 border border-border/30">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                              <span className="text-xs">📁</span>
                            </div>
                            <div>
                              <p className="text-sm text-foreground font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">{file.size}</p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-400 border-green-500/20">
                            ✓ {file.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    {/* Progress bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Training Progress</span>
                        <span className="text-primary font-medium">{activeFeature.demo.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500"
                          style={{ width: `${activeFeature.demo.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                      <p className="text-sm text-green-400 flex items-center gap-2">
                        <span>✓</span> {activeFeature.demo.status}
                      </p>
                    </div>
                  </div>
                )}

                {activeFeature.id === "nocontext" && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {activeFeature.demo.stats?.map((stat, i) => (
                        <div key={i} className="p-4 rounded-xl bg-card/60 border border-border/30 text-center">
                          <p className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    {/* Infinite visualization */}
                    <div className="relative h-32 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div 
                            key={i} 
                            className="w-1 bg-primary/60 rounded-full"
                            style={{ 
                              height: `${20 + Math.sin(i * 0.5) * 15 + Math.random() * 20}px`,
                              opacity: 0.3 + (i / 20) * 0.7
                            }}
                          />
                        ))}
                        <Infinity className="h-8 w-8 text-primary mx-2" />
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div 
                            key={i + 20} 
                            className="w-1 bg-primary/60 rounded-full"
                            style={{ 
                              height: `${20 + Math.sin(i * 0.5) * 15 + Math.random() * 20}px`,
                              opacity: 0.7 - (i / 20) * 0.4
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {activeFeature.demo.status}
                      </Badge>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
