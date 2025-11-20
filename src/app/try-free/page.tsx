import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Try RYFT Free - Coming Soon',
  description: 'RYFT free trial is coming soon. Book a demo to see the platform in action.',
}

export default function TryFreePage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Simple Message */}
      <section className="pt-32 pb-32 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}