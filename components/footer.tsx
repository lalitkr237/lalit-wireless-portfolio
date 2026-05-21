"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const footerLinks = {
  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
  research: [
    { name: "5G NR Systems", href: "#projects" },
    { name: "MU-MIMO", href: "#projects" },
    { name: "Channel Estimation", href: "#projects" },
    { name: "AI/ML Wireless", href: "#projects" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/lalitkumarbharti" },
    { name: "LinkedIn", href: "https://linkedin.com/in/lalitkumarbharti" },
    { name: "Google Scholar", href: "#" },
    { name: "ResearchGate", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">LK</span>
                </div>
                <span className="font-semibold text-foreground">Lalit Kumar Bharti</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Wireless Communication Engineer & 5G NR Researcher at IIT Patna, 
                developing next-generation wireless systems.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Open to collaborations
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Areas */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Research Areas</h4>
              <ul className="space-y-2">
                {footerLinks.research.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2">
                {footerLinks.social.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lalit Kumar Bharti. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                Built with
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-primary"
                >
                  ♥
                </motion.span>
                using Next.js & Three.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
