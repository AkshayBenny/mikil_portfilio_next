import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Other from '../components/Other'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className='text-dark-blue'>
      <Hero />
      <Portfolio />
      <Other />
      <Testimonials />
      <Footer />
    </div>
  )
}
