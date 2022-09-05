import Behance from '../public/logos/behance-fill.svg'
import Instagram from '../public/logos/instagram-line.svg'
import Twitter from '../public/logos/twitter-fill.svg'
import Linkedin from '../public/logos/linkedin-fill.svg'

const Footer = () => {
  return (
    <section id='contact' className='pt-[120px] lg:pt-[148px] px-10 lg:px-16'>
      <h1 className='text-light-blue text-lg lg:text-2xl font-normal tracking-[-0.25px] lg:tracking-0 text-center'>
        Contact me
      </h1>
      <h2 className='text-[28px] lg:text-[56px] font-bold lg:font-semibold text-dark-blue text-center pt-1'>
        Get in touch.
      </h2>
      <div className='mt-9 flex items-center justify-center gap-9 lg:gap-14'>
        <Behance />
        <Twitter />
        <Instagram />
        <Linkedin />
      </div>
      <div className='border-t lg:py-7 mt-[96px] flex flex-col lg:flex-row items-center justify-between w-full  lg:mt-[112px] border-opacity-[8%] gap-2 lg:gap-0 text-light-blue font-light text-lg '>
        <p className='pt-7 lg:pt-0'>
          Designed by
          <span className='pl-1 font-semibold text-base lg:text-lg text-dark-blue'>
            Sreemikil T Manoharan
          </span>
        </p>
        <p>
          Developed by
          <span className='pl-1 font-semibold text-base lg:text-lg text-dark-blue'>
            Akshay Benny
          </span>
        </p>
      </div>
    </section>
  )
}

export default Footer
