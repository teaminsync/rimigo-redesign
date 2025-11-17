'use client'

import { useRef } from 'react'

export default function ValueProposition() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      ref={containerRef}
      className="py-32 md:py-48 px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 items-start">
          {/* Large left column with image */}
          <div className="md:col-span-2 space-y-8 scroll-reveal">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src="/luxury-travel-destination-editorial-photography-at.jpg"
                alt="Luxury experience"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
            </div>

            <div className="space-y-6">
              <div className="space-y-3 scroll-reveal">
                <p className="text-xs font-light tracking-[0.3em] uppercase text-foreground/50">
                  By your side - at every step of the journey
                </p>
                <h2 className="text-5xl md:text-6xl font-light leading-tight text-foreground">
                  Stitching together
                  <br />
                  <span className="font-extralight italic opacity-75">seamless vacations</span>
                </h2>
              </div>

              <p className="text-base font-light text-foreground/70 leading-relaxed max-w-md scroll-reveal">
                Stitching together a seamless vacation where your preferences guide everything.
              </p>
            </div>
          </div>

          {/* Right column: floating list */}
          <div className="space-y-12 md:pt-20">
            {[
              { num: '01', title: 'Maximise Your Savings', desc: 'We hunt for the best prices and hidden deals so you don\'t overpay.' },
              { num: '02', title: 'Always Available', desc: 'Get immediate help with any travel issue, anytime and anywhere.' },
              { num: '03', title: 'Expert Knowledge', desc: 'Access curated recommendations from real travelers and destination experts.' },
            ].map((item, i) => (
              <div 
                key={i} 
                className="space-y-2 scroll-reveal group cursor-pointer"
              >
                <p className="text-xs font-light tracking-widest uppercase text-foreground/40 group-hover:text-foreground/60 transition-colors">
                  {item.num}
                </p>
                <h3 className="text-lg font-light text-foreground group-hover:opacity-75 transition-opacity">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-foreground/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
