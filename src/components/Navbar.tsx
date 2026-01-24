"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#integrations", label: "Integrations" },
  // { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Animate navbar in on load
    const timer = setTimeout(() => setVisible(true), 100)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm" 
          : ""
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      <nav className="w-full px-6 md:px-10 lg:px-16 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-2">
              {/* Triangle Icon with Swoosh */}
              <svg viewBox="0 0 32 32" className="h-8 w-8">
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
                className="text-foreground font-medium tracking-[0.15em] text-lg"
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
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] pt-12">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="pt-4 border-t border-border">
                      <Button variant="default" className="w-full" asChild>
                        <Link href="/login">Log in</Link>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            ) : (
              <Button variant="ghost" size="icon">
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
