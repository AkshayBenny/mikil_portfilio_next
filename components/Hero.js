import React from 'react'

const Hero = () => {
  return (
    <div className='px-6 h-screen flex  items-center '>
      <div className='mx-auto'>
        <div className=' flex flex-col items-start lg:items-center'>
          <h1 className='font-semibold text-[56px] leading-[66px] tracking-[-1.25px]'>
            Hi, I&apos;m
          </h1>
          <h1 className='font-semibold text-[56px] leading-[66px] tracking-[-1.25px]'>
            Sreemikil T Manoharan
          </h1>
        </div>
        <p className='font-normal lg:max-w-[880px] mt-6 lg:mt-9 text-[20px] lg:text-center leading-[33px] text-black opacity-[64%]'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className='mt-[144px] lg:mt-[90px] flex flex-col item-start lg:items-center w-fit lg:mx-auto '>
          <div className='text-light-blue'>Scroll Down</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
