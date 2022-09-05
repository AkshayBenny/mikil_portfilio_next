import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <div className=' z-50 sticky top-0 left-0 w-full'>
        <Header />
      </div>
      {children}

      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
