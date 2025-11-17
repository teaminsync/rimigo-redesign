'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-background"
    >
      <div className="absolute inset-0">
        <img
          src="/cinematic-mountain-landscape-dramatic-lighting-lux.jpg"
          alt=""
          className="w-full h-full object-cover grayscale contrast-125"
          style={{
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/20" />
      <div className="absolute inset-0 bg-black/25" />

      {/* Content with asymmetric layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Kinetic type animation */}
            <div className="space-y-2">
              <div className="overflow-hidden">
                <p 
                  className="text-xs font-light tracking-[0.3em] uppercase text-foreground/60 animate-fade-up-large [animation-delay:0s]"
                  style={{ opacity: 0 }}
                >
                  Your vacation made easy
                </p>
              </div>
            </div>

            <div className="space-y-4 overflow-hidden">
              <h1 
                ref={titleRef}
                className="text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] text-foreground animate-fade-up-large [animation-delay:0.1s]"
                style={{ opacity: 0 }}
              >
                with end-to-end
                <br />
                <span className="font-extralight italic opacity-80">assistance</span>
              </h1>
            </div>

            <p 
              className="text-sm font-light leading-relaxed text-foreground/70 max-w-sm animate-fade-up-large [animation-delay:0.2s]"
              style={{ opacity: 0 }}
            >
              The travel friend with all the answers. Just like that one friend who knows all the best spots, finds amazing deals, and is always there when you need them
            </p>

            {/* Premium CTA */}
            <div className="flex gap-4 pt-4 animate-fade-up-large [animation-delay:0.3s]" style={{ opacity: 0 }}>
              <button className="group px-8 py-3 border border-foreground/40 text-foreground font-light text-sm hover:border-foreground hover:bg-foreground/5 transition-all duration-300">
                <span className="block group-hover:tracking-wider transition-all">Start Your Trip</span>
              </button>
            </div>
          </div>

          {/* Right side: floating editorial element */}
          <div className="hidden md:flex items-center justify-end">
            <div className="space-y-6 opacity-0 animate-fade-in-slow [animation-delay:0.5s]">
              <div className="space-y-2">
                <p className="text-xs font-light tracking-widest uppercase text-foreground/50">Featured Collection</p>
                <h3 className="text-3xl font-light">Alpine Serenity</h3>
              </div>
              <p className="text-sm font-light text-foreground/60 leading-relaxed max-w-xs">
                Private mountain lodges where silence speaks louder than words. Handpicked from the world's most exclusive alpine regions.
              </p>
              <div className="w-48 h-56 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-md overflow-hidden border border-foreground/10">
                <img 
                  src="/luxury-alpine-mountain-cabin-snow-minimalist.jpg"
                  alt="Alpine collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in-slow [animation-delay:0.8s]">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-light tracking-widest uppercase text-foreground/40">Scroll</p>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent animate-subtle-float" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up-large {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up-large {
          animation: fade-up-large 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
