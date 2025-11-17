'use client'

import { useInView } from 'react-intersection-observer'

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const testimonials = [
    {
      quote: 'I love the way they have curated the options for me. It\'s like they know me so well.',
      author: 'Himani',
      role: 'Traveler',
      avatar: '✦'
    },
    {
      quote: 'Real time updates and seamless integration with my travel plans.',
      author: 'Sagar',
      role: 'Frequent Traveler',
      avatar: '◆'
    },
    {
      quote: 'One of the best travel planning I have ever done. I will definitely use them again.',
      author: 'Aditi',
      role: 'Travel Enthusiast',
      avatar: '●'
    }
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-accent/8 border-y border-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-light tracking-widest uppercase text-foreground/60 mb-4">
            Experiences that speak for themselves
          </p>
          <h2 className="text-4xl sm:text-5xl font-light leading-tight text-foreground">
            Join 1000+ travelers who experienced
            <br />
            <span className="font-normal">unique trips with Rimigo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 p-6 rounded-lg bg-background border border-accent/20 hover:border-accent/40 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <blockquote className="mb-8">
                <p className="text-lg font-light leading-relaxed mb-4 text-foreground/80">
                  "{item.quote}"
                </p>
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center bg-accent/10">
                  <span className="text-2xl text-accent/60">{item.avatar}</span>
                </div>
                <div>
                  <p className="font-normal text-sm text-foreground">{item.author}</p>
                  <p className="text-xs font-light text-foreground/60">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
