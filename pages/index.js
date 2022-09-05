import Hero from '../components/Hero'
import Other from '../components/Other'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'

export default function Home() {
  const lazyLoadVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  }

  return (
    <motion.div
      variants={lazyLoadVariants}
      animate='visible'
      initial='hidden'
      className='text-dark-blue'
    >
      <Hero />
      <Portfolio />
      <Other />
      <Testimonials />
    </motion.div>
  )
}
