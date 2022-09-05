import React from 'react'

const TestimonialCard = ({ testimonial, name, post, img }) => {
  return (
    <div className='h-[248px]  relative 2xl:h-[222px] px-6 py-8 rounded-xl border border-black border-opacity-[12%]'>
      <p className='font-normal text-base leading-[26.4px] text-black opacity-[48%]'>
       {testimonial}
      </p>
      <div className='flex items-center gap-3 absolute bottom-[32px] left-[24px]'>
        <img
          className='w-12 h-12 object-cover rounded-full'
          src={img}
          alt='profile pic'
        />
        <div>
          <h1 className='font-bold text-sm'>{name}</h1>
          <p className='font-normal text-sm opacity-[48%]'>{post}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
