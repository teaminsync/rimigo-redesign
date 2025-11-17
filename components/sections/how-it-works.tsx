'use client'

import { useInView } from 'react-intersection-observer'

export default function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const steps = [
    {
      number: '01',
      title: 'Share your preferences',
      description: 'From flights to activities, capture your preferences real-time.'
    },
    {
      number: '02',
      title: 'Get handpicked options',
      description: 'We curate the best travel options tailored just for you.'
    },
    {
      number: '03',
      title: 'Personalised Itinerary',
      description: 'Your itinerary arranged into a flow of experiences you\'ll love.'
    },
    {
      number: '04',
      title: 'Book from anywhere',
      description: 'Get price comparison across booking platforms to find the best deals.'
    }
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-light tracking-widest uppercase text-muted-foreground mb-4">
            Our Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-light leading-tight">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="h-full flex flex-col p-6 rounded-lg bg-accent/5 border border-accent/20 hover:border-accent/40 transition-colors">
                <div className="text-5xl font-light mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-normal mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-foreground/70 flex-grow leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
