import Hero from '@/components/sections/hero'
import Navigation from '@/components/layout/navigation'
import ValueProposition from '@/components/sections/value-proposition'
import HowItWorks from '@/components/sections/how-it-works'
import Destinations from '@/components/sections/destinations'
import Testimonials from '@/components/sections/testimonials'
import BlogPreview from '@/components/sections/blog-preview'
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Destinations />
      <Testimonials />
      <BlogPreview />
      <Footer />
    </div>
  )
}
