import type { Metadata } from 'next'
import RealTimeDashboardsFeaturePage from '@/components/feature-pages/RealTimeDashboardsFeaturePage'

export const metadata: Metadata = {
  title: 'Real-time Dashboards - RYFT Commission Management',
  description: 'Live commission tracking and analytics. Watch commissions update instantly as deals close with interactive dashboards for your entire sales team.',
  keywords: 'real-time dashboards, live commission tracking, commission analytics, sales performance, team dashboards',
  openGraph: {
    title: 'Real-time Dashboards - RYFT Commission Management',
    description: 'Live commission tracking and analytics. Watch commissions update instantly as deals close with interactive dashboards for your entire sales team.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real-time Dashboards - RYFT Commission Management',
    description: 'Live commission tracking and analytics. Watch commissions update instantly as deals close with interactive dashboards for your entire sales team.',
  },
}

export default function RealTimeDashboardsPage() {
  return <RealTimeDashboardsFeaturePage />
}