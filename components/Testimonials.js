import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'

import {
	ArrowNarrowRightIcon,
	ArrowNarrowLeftIcon,
} from '@heroicons/react/outline'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
	const [swiperRef, setSwiperRef] = useState(null)
	const [end, setEnd] = useState(false)
	const [beginning, setBeginning] = useState(true)

	const prevHandler = () => {
		swiperRef.slidePrev()
		setEnd(false)
	}

	const nextHandler = () => {
		swiperRef.slideNext()
		setBeginning(false)
	}
	return (
		<>
			<section
				id='testimonial'
				className='flex items-center justify-between px-10 lg:px-16 pb-[72px] mt-[100px]'>
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
						disabled={beginning}
						onClick={prevHandler}
						className={`rounded-full ${
							beginning
								? 'bg-btn-grey-bg cursor-not-allowed'
								: 'bg-btn-dark-blue-bg '
						} px-4 lg:px-6 py-2 lg:py-3`}>
						<ArrowNarrowLeftIcon
							className={`text-black w-4 lg:w-6 ${
								beginning ? ' text-black' : 'text-white'
							}`}
						/>
					</button>
					<button
						onClick={nextHandler}
						disabled={end}
						className={`rounded-full  px-4 lg:px-6 py-2 lg:py-3 ${
							end
								? 'bg-btn-grey-bg cursor-not-allowed'
								: 'bg-btn-dark-blue-bg '
						}`}>
						<ArrowNarrowRightIcon
							className={`${
								end ? 'text-black' : 'text-white'
							} w-4 lg:w-6 `}
						/>
					</button>
				</div>
			</section>
			<div className='w-full pl-[40px] lg:pl-[64px]'>
				<Swiper
					freeMode={true}
					modules={[FreeMode]}
					navigation={true}
					className='mySwiper'
					onSwiper={(swiper) => setSwiperRef(swiper)}
					onReachEnd={() => setEnd(true)}
					onReachBeginning={() => setBeginning(true)}
					breakpoints={{
						0: {
							slidesPerView: 1.1,
							spaceBetween: 16,
						},

						800: {
							slidesPerView: 2.1,
							spaceBetween: 16,
						},
						1200: {
							slidesPerView: 3.2,
							spaceBetween: 32,
						},
					}}
					autoHeight={true}>
					<SwiperSlide>
						<TestimonialCard
							testimonial=' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
        velit officia consequat duis enim velit mollit exercitation veniam.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
        velit officia consequat duis enim velit mollit exercitation veniam.'
							img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
							name='Kristin Watson'
							post='CEO Konami'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							testimonial=' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
        velit officia consequat duis enim velit mollit exercitation veniam.'
							img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
							name='Kristin Watson'
							post='CEO Konami'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							testimonial=' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
        velit officia consequat duis enim velit mollit exercitation veniam.'
							img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
							name='Kristin Watson'
							post='CEO Konami'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							testimonial=' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
        velit officia consequat duis enim velit mollit exercitation veniam.'
							img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
							name='Kristin Watson'
							post='CEO Konami'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							testimonial=' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
        velit officia consequat duis enim velit mollit exercitation veniam.'
							img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
							name='Kristin Watson'
							post='CEO Konami'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							testimonial=' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
        velit officia consequat duis enim velit mollit exercitation veniam.'
							img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
							name='Kristin Watson'
							post='CEO Konami'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}
