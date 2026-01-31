"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section id="cta" className="py-24 md:py-32 px-6 md:px-10 lg:px-16 relative overflow-hidden bg-background">
      {/* Flowing gradient mesh - more vibrant for CTA */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_30%,oklch(0.6132_0.2294_291.7437/0.25),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,oklch(0.6132_0.2294_291.7437/0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_60%,oklch(0.6691_0.1569_260.1063/0.12),transparent)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* CTA Content */}
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Ready to automate
          <br />
          <span className="text-muted-foreground font-light italic">your commissions?</span>
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Join hundreds of finance teams who&apos;ve reclaimed their month-end. 
          Start your free trial today—no credit card required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8">
            Book a Demo
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <p className="text-muted-foreground text-sm mt-8">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}
