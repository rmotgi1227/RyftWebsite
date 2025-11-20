import type { Metadata } from 'next'
import ZeroSetupFeaturePage from '@/components/feature-pages/ZeroSetupFeaturePage'

export const metadata: Metadata = {
  title: 'Zero Setup - RYFT Commission Management',
  description: 'Connect your CRM & HRIS in minutes. AI agents automatically map your architecture and configure commission calculations with zero manual setup required.',
  keywords: 'zero setup, commission automation, CRM integration, HRIS integration, AI configuration',
  openGraph: {
    title: 'Zero Setup - RYFT Commission Management',
    description: 'Connect your CRM & HRIS in minutes. AI agents automatically map your architecture and configure commission calculations with zero manual setup required.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Setup - RYFT Commission Management',
    description: 'Connect your CRM & HRIS in minutes. AI agents automatically map your architecture and configure commission calculations with zero manual setup required.',
  },
}

export default function ZeroSetupPage() {
  return <ZeroSetupFeaturePage />
}