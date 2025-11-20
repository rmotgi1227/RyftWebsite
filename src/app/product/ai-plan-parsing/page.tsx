import type { Metadata } from 'next'
import AIPlanParsingFeaturePage from '@/components/feature-pages/AIPlanParsingFeaturePage'

export const metadata: Metadata = {
  title: 'AI Plan Parsing - RYFT Commission Management',
  description: 'AI automatically reads and understands any commission structure from PDFs or documents. Handles accelerators, clawbacks, and complex rules without manual configuration.',
  keywords: 'AI plan parsing, commission structure, automatic configuration, plan understanding, commission rules',
  openGraph: {
    title: 'AI Plan Parsing - RYFT Commission Management',
    description: 'AI automatically reads and understands any commission structure from PDFs or documents. Handles accelerators, clawbacks, and complex rules without manual configuration.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Plan Parsing - RYFT Commission Management',
    description: 'AI automatically reads and understands any commission structure from PDFs or documents. Handles accelerators, clawbacks, and complex rules without manual configuration.',
  },
}

export default function AIPlanParsingPage() {
  return <AIPlanParsingFeaturePage />
}