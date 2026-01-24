"use client"

import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, MessageSquare, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileSpreadsheet,
    title: "Connect Your Spreadsheet",
    description: "Install the Ryft AI add-in for Excel or Google Sheets. Your data stays where it is—we never move or copy it.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Define Your Rules",
    description: "Tell Ryft your commission structure in plain English. Tiered rates, accelerators, SPIFs—it understands them all.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Let AI Handle the Rest",
    description: "Ryft calculates, validates, and flags anomalies automatically. You review and approve with confidence.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Three steps to
            <br />
            <span className="text-muted-foreground font-light italic">commission clarity</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Go from spreadsheet chaos to automated accuracy in under an hour.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line (hidden on mobile, shown on lg) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <span 
                    className="text-6xl md:text-7xl font-bold text-primary/20"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {step.number}
                  </span>
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
