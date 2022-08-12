import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const posters = () => {
  const images = [
    'one.png',
    'two.png',
    'three.png',
    'four.png',
    'five.png',
    'six.png',
  ]
  return (
    <div className=' relative'>
      <div className='w-full sticky top-0 left-0 z-50'>
        <Header />
      </div>
      <div className='pt-24 lg:pt-[136px] px-[40px]  lg:px-16'>
        <h1 className='pb-4 text-light-blue font-medium text-lg lg:font-normal lg:text-2xl text-center'>
          Portfolio
        </h1>
        <h2 className='font-semibold text-[38px] lg:text-[40px] text-center'>
          Illustrations
        </h2>
        <div className='w-full mx-auto md:grid lg:grid-cols-3 md:grid-cols-2 pt-[80px] md:pt-[72px]'>
          {images.map((image, index) => {
            return (
              <Image
                className='rounded-lg aspect-square'
                key={index}
                src={`/posters/${image}`}
                alt={image}
                height='100%'
                width='100%'
                layout='responsive'
                objectFit='contain'
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default posters
