import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "/changelog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
    { label: "API Reference", href: "/api" },
    { label: "Status", href: "/status" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border/20 relative overflow-hidden">
      {/* Dark to light gradient - Step 5: Lightest end */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#262648] to-[#2a2a50]" />
      
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                {/* Triangle Icon with Swoosh */}
                <svg viewBox="0 0 32 32" className="h-7 w-7">
                  <defs>
                    <clipPath id="footer-swoosh-clip">
                      <path d="M0 0 H32 V32 H0 Z M6 30 Q18 16 8 2 L4 2 Q12 18 4 30 Z" />
                    </clipPath>
                  </defs>
                  <path
                    d="M16 2 L30 30 L2 30 Z"
                    fill="currentColor"
                    className="text-foreground"
                    clipPath="url(#footer-swoosh-clip)"
                  />
                </svg>
                <span 
                  className="text-foreground font-medium tracking-[0.15em] text-lg"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  RYFT
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The commission copilot that lives inside Excel. Built for RevOps and Finance teams.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-border/50" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Ryft AI. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="https://twitter.com" className="hover:text-foreground transition-colors">
                Twitter
              </Link>
              <Link href="https://linkedin.com" className="hover:text-foreground transition-colors">
                LinkedIn
              </Link>
              <Link href="https://github.com" className="hover:text-foreground transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
