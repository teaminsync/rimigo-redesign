'use client'

import { useInView } from 'react-intersection-observer'

export default function BlogPreview() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const articles = [
    {
      title: 'How do I get started with Rimigo?',
      category: 'Getting Started',
      image: '/slow-travel-scenic-train-journey.jpg',
      excerpt: 'Submit your travel details and get personalized vacation options designed just for you.'
    },
    {
      title: 'How does Rimigo find the best price?',
      category: 'FAQ',
      image: '/european-countryside-village-architecture.jpg',
      excerpt: 'We hunt for the best prices and hidden deals across multiple booking platforms.'
    },
    {
      title: 'How is Rimigo different from traditional travel agents?',
      category: 'Why Choose Us',
      image: '/eco-luxury-resort-nature-environmental.jpg',
      excerpt: 'Rimigo combines AI-powered curation with human expertise for personalized travel experiences.'
    }
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="text-sm font-light tracking-widest uppercase text-foreground/60 mb-4">
              Still have questions?
            </p>
            <h2 className="text-4xl sm:text-5xl font-light leading-tight text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <button className="hidden md:block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white transition-colors text-sm font-light rounded-lg">
            View All FAQs
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div
              key={i}
              className={`group cursor-pointer transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="mb-6 overflow-hidden rounded-lg border border-accent/20">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs font-light tracking-widest uppercase text-accent/60 mb-3">
                {article.category}
              </p>
              <h3 className="text-xl font-normal mb-3 group-hover:text-accent transition-colors leading-snug text-foreground">
                {article.title}
              </h3>
              <p className="text-sm font-light text-foreground/70 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>

        <button className="md:hidden w-full mt-12 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white transition-colors text-sm font-light rounded-lg">
          View All FAQs
        </button>
      </div>
    </section>
  )
}
