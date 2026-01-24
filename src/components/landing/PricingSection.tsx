"use client"

import { useState } from "react"
import { Check, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "Perfect for small teams getting started",
    features: [
      "Up to 50 payees",
      "Basic commission rules",
      "Excel add-in",
      "Email support",
      "Monthly calculations",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: "For growing teams with complex structures",
    features: [
      "Up to 500 payees",
      "Advanced commission rules",
      "Excel + Google Sheets",
      "Priority support",
      "Real-time calculations",
      "Custom dashboards",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    description: "For organizations at scale",
    features: [
      "Unlimited payees",
      "Custom rule engine",
      "All integrations",
      "Dedicated CSM",
      "SLA guarantee",
      "SSO / SAML",
      "Audit logs",
      "Custom training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-10 lg:px-16 relative overflow-hidden bg-background">
      {/* Flowing gradient mesh using theme colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,oklch(0.6132_0.2294_291.7437/0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_80%_80%,oklch(0.6132_0.2294_291.7437/0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_60%,oklch(0.6691_0.1569_260.1063/0.1),transparent)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Simple, transparent
            <br />
            <span className="text-muted-foreground font-light italic">pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Start free for 14 days. No credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-full bg-card/50 backdrop-blur-sm border border-border/30">
            <span className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              !isAnnual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            )}>
              Monthly
            </span>
            <Switch 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2",
              isAnnual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            )}>
              Annual
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                Save 20%
              </Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-start">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice
            const isPopular = plan.popular
            
            return (
              <Card 
                key={plan.name} 
                className={cn(
                  "relative flex flex-col backdrop-blur-md transition-all duration-500",
                  isPopular 
                    ? "border-primary/60 shadow-2xl shadow-primary/20 lg:scale-105 bg-gradient-to-b from-card/80 to-card/40 z-10" 
                    : "bg-card/30 border-border/30 hover:border-primary/30 hover:bg-card/40"
                )}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1.5 bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4 pt-8">
                  <p className="text-sm font-medium text-muted-foreground mb-2">{plan.name}</p>
                  
                  <div className="flex items-baseline gap-1">
                    {price !== null ? (
                      <>
                        <span 
                          className="text-5xl md:text-6xl font-bold text-foreground tracking-tight"
                          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                        >
                          ${price}
                        </span>
                        <span className="text-muted-foreground text-sm">/month</span>
                      </>
                    ) : (
                      <span 
                        className="text-4xl md:text-5xl font-bold text-foreground"
                        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                      >
                        Custom
                      </span>
                    )}
                  </div>
                  
                  {isAnnual && price !== null && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Billed annually (${price * 12}/year)
                    </p>
                  )}
                  
                  <p className="text-muted-foreground text-sm mt-4">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 pt-0">
                  <div className="h-px bg-border/50 mb-6" />
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div className={cn(
                          "mt-0.5 rounded-full p-0.5",
                          isPopular ? "bg-primary/20" : "bg-muted"
                        )}>
                          <Check className={cn(
                            "h-3 w-3",
                            isPopular ? "text-primary" : "text-muted-foreground"
                          )} />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-4">
                  <Button 
                    variant={isPopular ? "default" : "outline"} 
                    className={cn(
                      "w-full group",
                      isPopular && "shadow-lg shadow-primary/20"
                    )}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-6">
            Trusted by finance teams at companies like
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {["Stripe", "Notion", "Linear", "Vercel", "Figma"].map((company) => (
              <span key={company} className="text-foreground/60 font-semibold text-lg">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
