import React from 'react'

const TestimonialCard = ({ testimonial, name, post, img }) => {
	return (
		<div className='h-full hover:bg-[#120055] group transition  flex flex-col justify-between  px-6 py-8 rounded-xl border border-black border-opacity-[12%]'>
			<p className='font-normal text-base leading-[26.4px] group-hover:text-white group-hover:opacity-100 opacity-[48%] pb-[32px]'>
				{testimonial}
			</p>

			<div className='flex items-center gap-3 '>
				<img
					className='w-12 h-12 object-cover rounded-full'
					src={img}
					alt='profile pic'
				/>
				<div>
					<h1 className='font-bold text-sm group-hover:text-white'>
						{name}
					</h1>
					<p className='font-normal text-sm opacity-[48%] group-hover:text-white'>
						{post}
					</p>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
