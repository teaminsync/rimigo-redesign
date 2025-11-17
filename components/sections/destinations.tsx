'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Destinations() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const destinations = [
    {
      title: 'Côte d\'Azur',
      subtitle: 'French Riviera',
      image: '/south-france-coastline-luxury-yacht.jpg',
      position: 'md:col-span-2 md:row-span-2'
    },
    {
      title: 'Bali',
      subtitle: 'Indonesia',
      image: '/bali-tropical-beach-sunset-luxury-resort.jpg',
      position: ''
    },
    {
      title: 'Santorini',
      subtitle: 'Greece',
      image: '/santorini-white-buildings-aegean-sea.jpg',
      position: ''
    },
    {
      title: 'Maldives',
      subtitle: 'Ocean Paradise',
      image: '/maldives-turquoise-water-overwater-bungalow.jpg',
      position: ''
    },
    {
      title: 'Tokyo',
      subtitle: 'Japan',
      image: '/tokyo-neon-lights-city-night.jpg',
      position: ''
    }
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-light tracking-widest uppercase text-muted-foreground mb-4">
            Curated Collections
          </p>
          <h2 className="text-4xl sm:text-5xl font-light leading-tight">
            Iconic destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`${dest.position} group relative overflow-hidden rounded-lg cursor-pointer
              transition-all duration-700 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={dest.image || "/placeholder.svg"}
                alt={dest.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-light text-white/70 mb-2">
                  {dest.subtitle}
                </p>
                <h3 className="text-2xl font-light text-white">
                  {dest.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
