'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-accent/10 text-foreground border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/rimigo-logo.png"
              alt="Rimigo"
              width={140}
              height={40}
              className="h-8 w-auto opacity-100 group-hover:opacity-80 transition-opacity duration-300"
              priority
            />
          </Link>
            </div>
            <p className="text-sm font-light text-foreground/70 leading-relaxed">
              Ready for your best vacation yet? Submit your travel details below and get personalized vacation options designed just for you. Expert assistance awaits at every step.
            </p>
          </div>

          <div>
            <h4 className="font-normal mb-4 text-sm uppercase tracking-widest text-foreground">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Testimonials'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm font-light text-foreground/70 hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-normal mb-4 text-sm uppercase tracking-widest text-foreground">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Refunds & Cancellations', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm font-light text-foreground/70 hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-normal mb-4 text-sm uppercase tracking-widest text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-sm font-light text-foreground/70">
                  <strong>Email:</strong><br />
                  contact@rimigo.com
                </p>
              </li>
              <li>
                <p className="text-sm font-light text-foreground/70">
                  <strong>Office:</strong><br />
                  Bangalore, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-foreground/50">
              © Rimigo. All rights reserved. 2025
            </p>
            <div className="flex gap-8">
              <Link href="#" className="text-xs font-light text-foreground/50 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs font-light text-foreground/50 hover:text-accent transition-colors">
                Terms and Conditions
              </Link>
              <Link href="#" className="text-xs font-light text-foreground/50 hover:text-accent transition-colors">
                Refunds & Cancellations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
