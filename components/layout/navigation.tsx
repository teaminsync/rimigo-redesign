'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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

          <div className="hidden md:flex items-center gap-12">
            <Link href="#" className="text-xs font-light tracking-wide uppercase opacity-60 hover:opacity-100 transition-opacity">
              Collections
            </Link>
            <Link href="#" className="text-xs font-light tracking-wide uppercase opacity-60 hover:opacity-100 transition-opacity">
              Experiences
            </Link>
            <Link href="#" className="text-xs font-light tracking-wide uppercase opacity-60 hover:opacity-100 transition-opacity">
              Stories
            </Link>
            <button className="text-xs font-light tracking-wide uppercase px-6 py-2.5 border border-foreground hover:bg-foreground hover:text-background transition-all duration-300">
              Inquire
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center group"
          >
            <div className={`h-px w-full bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <div className={`h-px w-full bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`h-px w-full bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-border/20 pt-4">
            <Link href="#" className="block text-xs font-light tracking-wide uppercase opacity-60 hover:opacity-100">Collections</Link>
            <Link href="#" className="block text-xs font-light tracking-wide uppercase opacity-60 hover:opacity-100">Experiences</Link>
            <Link href="#" className="block text-xs font-light tracking-wide uppercase opacity-60 hover:opacity-100">Stories</Link>
            <button className="w-full text-xs font-light tracking-wide uppercase px-6 py-2.5 border border-foreground hover:bg-foreground hover:text-background transition-all">
              Inquire
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
