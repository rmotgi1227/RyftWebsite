import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'RYFT Commission Management - Automated Sales Commission Software',
  description: 'Automated commission calculations, real-time dashboards, and audit trails for sales teams.',
}

export default function SecurityPage() {
  redirect('/product')
}