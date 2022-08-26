import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Other from '../components/Other'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className='text-dark-blue relative '>
      <div className='w-full sticky top-0 left-0 z-50'>
        <Header />
      </div>
      <Hero />
      <Portfolio />
      <Other />
      <Testimonials />
      <Footer />
    </div>
  )
}
