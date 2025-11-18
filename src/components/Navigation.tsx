import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  return (
    <nav className="bg-white border-b border-navy-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/ryftlogo.png"
              alt="RYFT Logo"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/blog"
              className="text-navy-700 hover:text-navy-900 font-medium transition-colors duration-300"
            >
              Blog
            </Link>
            <Link 
              href="/#waitlist"
              className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}