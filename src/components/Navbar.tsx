"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#integrations", label: "Integrations" },
  // { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // On inner pages (e.g. blog), always use solid navbar to prevent content showing through
  const isSolid = scrolled || pathname !== "/"

  useEffect(() => {
    setMounted(true)
    // Animate navbar in on load
    const timer = setTimeout(() => setVisible(true), 100)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll() // set initial state
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Handle smooth scroll with offset for hash links
    const handleHashNavigation = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1)
        const targetElement = document.getElementById(hash)
        if (targetElement) {
          const headerHeight = 80 // Approximate navbar height
          const targetPosition = targetElement.offsetTop - headerHeight
          setTimeout(() => {
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }, 100)
        }
      }
    }
    
    // Handle initial hash on load
    handleHashNavigation()
    
    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener('hashchange', handleHashNavigation)
      clearTimeout(timer)
    }
  }, [])
  
  // Handle click on hash links with offset (including /#hash when on home)
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashMatch = href.match(/#(.+)$/)
    const targetId = hashMatch ? hashMatch[1] : null
    const isHashOnHome = href.startsWith('/#') && pathname === '/'
    const isHashLink = href.startsWith('#')
    if ((isHashLink || isHashOnHome) && targetId) {
      e.preventDefault()
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        const headerHeight = 80
        const targetPosition = targetElement.offsetTop - headerHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
        window.history.pushState(null, '', isHashLink ? href : `/#${targetId}`)
      }
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isSolid 
          ? "border-b border-border/50 shadow-sm" 
          : "bg-background/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-0"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      style={isSolid ? { backgroundColor: "var(--background)" } : undefined}
    >
      <nav className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-3 sm:py-4 md:py-4 h-[72px] md:h-auto flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              {/* Triangle Icon with Swoosh */}
              <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 shrink-0">
                <defs>
                  <clipPath id="swoosh-clip">
                    <path d="M0 0 H32 V32 H0 Z M6 30 Q18 16 8 2 L4 2 Q12 18 4 30 Z" />
                  </clipPath>
                </defs>
                {/* Main triangle */}
                <path
                  d="M16 2 L30 30 L2 30 Z"
                  fill="currentColor"
                  className="text-foreground"
                  clipPath="url(#swoosh-clip)"
                />
              </svg>
              {/* RYFT Text */}
              <span 
                className="text-foreground font-medium tracking-[0.15em] text-base sm:text-lg truncate"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                RYFT
              </span>
            </div>
          </Link>

          {/* Primary Nav - Center (Hidden on mobile) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA - Right (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button variant="default" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {mounted ? (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 touch-manipulation">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[85vw] max-w-[320px] sm:w-[320px] p-0 bg-background border-l border-border/50 flex flex-col"
                >
                  <SheetHeader className="px-6 pt-6 pb-4">
                    <SheetTitle className="text-left text-xl font-semibold">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  
                  <nav className="flex-1 px-6 py-2">
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link) => (
                        <SheetClose key={link.href} asChild>
                          <Link
                            href={link.href}
                            onClick={(e) => {
                              handleLinkClick(e, link.href)
                              setMobileMenuOpen(false)
                            }}
                            className="text-base sm:text-lg text-foreground hover:text-primary transition-colors py-3 px-3 -mx-3 rounded-md hover:bg-accent/50 touch-manipulation font-medium"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>

                  <SheetFooter className="px-6 pb-6 pt-4 flex-col gap-3">
                    <Separator className="mb-2" />
                    <SheetClose asChild>
                      <Button variant="default" className="w-full touch-manipulation" asChild>
                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                          Log in
                        </Link>
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            ) : (
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
