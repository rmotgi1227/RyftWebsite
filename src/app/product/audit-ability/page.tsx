import type { Metadata } from 'next'
import AuditAbilityFeaturePage from '@/components/feature-pages/AuditAbilityFeaturePage'

export const metadata: Metadata = {
  title: 'Complete Auditability - RYFT Commission Management',
  description: 'Full transparency with zero commission disputes. Complete audit trails for every calculation with instant dispute resolution and compliance-ready reporting.',
  keywords: 'commission audit, audit trail, transparency, dispute resolution, compliance reporting, commission tracking',
  openGraph: {
    title: 'Complete Auditability - RYFT Commission Management',
    description: 'Full transparency with zero commission disputes. Complete audit trails for every calculation with instant dispute resolution and compliance-ready reporting.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Auditability - RYFT Commission Management',
    description: 'Full transparency with zero commission disputes. Complete audit trails for every calculation with instant dispute resolution and compliance-ready reporting.',
  },
}

export default function AuditAbilityPage() {
  return <AuditAbilityFeaturePage />
}