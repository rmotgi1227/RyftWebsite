"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import AnimateOnScroll from "@/components/AnimateOnScroll"

const faqs = [
  {
    question: "How is Ryft different from QuotaPath or CaptivateIQ?",
    answer: "Those platforms require you to migrate off Excel and learn a new system. Ryft is an Excel add-in—it enhances the spreadsheets your RevOps and Finance teams already use. No migration, no learning curve, no 6-month implementation.",
  },
  {
    question: "Does my data leave Excel?",
    answer: "Your commission data stays in your spreadsheet. Ryft processes calculations locally within Excel and only sends anonymized queries to our AI. We never store or access your raw commission data. SOC 2 Type II certified.",
  },
  {
    question: "Can Ryft handle our complex comp plan?",
    answer: "Yes. Describe your rules in plain English—tiered rates, accelerators, decelerators, SPIFs, MBOs, draw against commission, clawbacks, split credits, manager overrides. If you can explain it to a new RevOps hire, Ryft can calculate it.",
  },
  {
    question: "How long does setup take?",
    answer: "Most teams are calculating commissions within an hour. Install the Excel add-in, describe your comp plan, and Ryft starts working. No consultants, no implementation projects, no waiting months to see value.",
  },
  {
    question: "What if our commission rules change mid-quarter?",
    answer: "Just tell Ryft in natural language: \"Starting March 1st, increase the accelerator to 1.5x for deals over $50k.\" Ryft updates instantly and recalculates affected commissions. No developer needed.",
  },
  {
    question: "Who is Ryft built for?",
    answer: "RevOps managers, Finance teams managing commissions, and Sales Ops at SMB and mid-market companies. If you've evaluated QuotaPath or Everstage but found them too heavy, or you're tired of maintaining complex Excel formulas, Ryft is for you.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Dark to light gradient - Step 4: Lightest */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e38] to-[#262648]" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Questions?
            <br />
            <span className="text-muted-foreground font-light italic">Answers.</span>
          </h2>
        </AnimateOnScroll>

        {/* FAQ Accordion */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/30">
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline text-sm sm:text-base md:text-lg py-3 sm:py-4 px-2 sm:px-4 touch-manipulation">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base px-2 sm:px-4 pb-3 sm:pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
