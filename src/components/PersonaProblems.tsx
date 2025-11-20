'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Card from './Card';

const personaProblems = [
  {
    persona: "RevOps Teams",
    mainPain: "Spreadsheet Hell",
    problems: [
      "Spending 2+ days every month just calculating commissions",
      "Sales reps asking 'where's my commission?' every week", 
      "One wrong formula breaks everything",
      "Can't change comp plans without starting from scratch"
    ],
    impact: "RevOps becomes a cost center instead of growth driver"
  },
  {
    persona: "Finance Teams", 
    mainPain: "Month-End Panic",
    problems: [
      "Commission calculations delay financial close by days",
      "No audit trail when something goes wrong",
      "Sales keeps changing deals after month-end",
      "Can't forecast expenses when commission data is garbage"
    ],
    impact: "Finance looks bad when numbers don't add up"
  },
  {
    persona: "Sales Teams",
    mainPain: "Motivation Killer",
    problems: [
      "Reps don't trust their commission statements",
      "Waiting weeks to see if a deal will actually pay out",
      "Comp plan changes mean starting over mid-quarter",
      "Spending time arguing about math instead of selling"
    ],
    impact: "Top performers leave for companies that pay on time"
  }
];

export default function PersonaProblems() {
  return (
    <Section background="navy-50" className="relative">
      <SectionHeader 
        title="Commission Tracking is Broken"
        subtitle="Every company deals with the same mess. Spreadsheets, manual work, and frustrated teams."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-s8">
        {personaProblems.map((persona, index) => (
          <Card key={index} index={index} className="h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {persona.persona}
              </h3>
              <p className="text-accent-600 font-semibold">
                {persona.mainPain}
              </p>
            </div>
            
            <div className="space-y-s3 mb-s6">
              {persona.problems.map((problem, problemIndex) => (
                <motion.div
                  key={problemIndex}
                  className="flex items-start gap-s3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (index * 0.1) + (problemIndex * 0.05) }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-navy-700 text-sm leading-relaxed">{problem}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-navy-200 pt-s4">
              <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-s1">
                Business Impact
              </div>
              <p className="text-navy-600 text-sm font-medium">
                {persona.impact}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <motion.div 
        className="text-center mt-s8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="bg-white border border-accent-200 rounded-xl p-s6 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-navy-900 mb-s3">
            Sound Familiar?
          </h3>
          <p className="text-navy-600 leading-relaxed">
            You're not alone. 89% of companies struggle with commission management complexity, 
            leading to an average of $2.3M in annual productivity losses.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}