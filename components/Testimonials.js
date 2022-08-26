import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from '@heroicons/react/outline'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

export default function Testimonials() {
  const [swiperRef, setSwiperRef] = useState(null)
  console.log(swiperRef)
  const prevHandler = () => {
    swiperRef.slidePrev()
  }

  const nextHandler = () => {
    swiperRef.slideNext()
  }
  return (
    <>
      <div className='flex items-center justify-between px-10 lg:px-16 pb-[72px]'>
        <div>
          <p className=' text-light-blue font-normal text-lg lg:text-2xl pb-1 tracking-[-0.25px] lg:tracking-none'>
            Happy clients
          </p>
          <h1 className='font-semibold text-2xl lg:text-[40px]'>
            Testimonials
          </h1>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <button
            onClick={prevHandler}
            className='rounded-full bg-btn-grey-bg px-4 lg:px-6 py-2 lg:py-3'
          >
            <ArrowNarrowLeftIcon className='text-black w-4 lg:w-6 ' />
          </button>
          <button
            onClick={nextHandler}
            className='rounded-full bg-btn-dark-blue-bg px-4 lg:px-6 py-2 lg:py-3'
          >
            <ArrowNarrowRightIcon className='text-white w-4 lg:w-6 ' />
          </button>
        </div>
      </div>
      <div className='ml-10 lg:ml-16'>
        <Swiper
          
         
          navigation={true}
          className='mySwiper '
          onSwiper={(swiper) => setSwiperRef(swiper)}
        >
          <SwiperSlide>
            <div className='w-screen h-[248px] lg:w-[456px] relative lg:h-[222px] px-6 py-8 rounded-xl border border-black border-opacity-[12%]'>
              <p className='font-normal text-base leading-[26.4px] text-black opacity-[48%]'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint velit officia consequat duis enim velit mollit
                exercitation veniam.
              </p>
              <div className='flex items-center gap-3 absolute bottom-[32px] left-[24px]'>
                <img
                  className='w-12 h-12 object-cover rounded-full'
                  src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                  alt='profile pic'
                />
                <div>
                  <h1 className='font-bold text-sm'>Kristin Watson</h1>
                  <p className='font-normal text-sm opacity-[48%]'>
                    CEO Konami
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full h-[248px] lg:w-[456px] relative lg:h-[222px] px-6 py-8 rounded-xl border border-black border-opacity-[12%]'>
              <p className='font-normal text-base leading-[26.4px] text-black opacity-[48%]'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint velit officia consequat duis enim velit mollit
                exercitation veniam.
              </p>
              <div className='flex items-center gap-3 absolute bottom-[32px] left-[24px]'>
                <img
                  className='w-12 h-12 object-cover rounded-full'
                  src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                  alt='profile pic'
                />
                <div>
                  <h1 className='font-bold text-sm'>Kristin Watson</h1>
                  <p className='font-normal text-sm opacity-[48%]'>
                    CEO Konami
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
