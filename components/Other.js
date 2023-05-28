import Link from 'next/link'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
const Other = () => {
	const data = [
		{
			id: 1,
			url: '/illustrations',
			title: 'Illustrations',
		},
		{
			id: 2,
			url: '/prototypes',
			title: 'Prototypes',
		},
		{
			id: 3,
			url: '/logos',
			title: 'Logos',
		},
		{
			id: 4,
			url: '/posters',
			title: 'Posters',
		},
	]
	return (
		<section
			id='other'
			className='lg:flex items-center justify-center gap-9 px-[40px] lg:px-16 pt-[104px] lg:pt-[100px] bg-[#F6F6F6] mt-[100px]'>
			<div className='w-full'>
				<h1 className='text-lg lg:text-2xl text-light-blue pb-12 lg:pb-[16px] '>
					What Else I Do?
				</h1>

				<h4 className='font-semibold text-[40px] text-[#120055] lg:pb-[72px]'>
					My Playground
				</h4>
				<div className='w-full lg:grid grid-cols-2 gap-y-[24px] gap-x-[24px]'>
					{data.map((item) => {
						return (
							<Link
								key={item.id}
								href={item.url}>
								<div className='cursor-pointer border-b border-black py-[27px] lg:py-6 border-opacity-[4%] w-full flex items-center justify-between  group'>
									<p className='font-bold text-[28px] text-black group-hover:opacity-100 transition opacity-[16%] lg:text-[56px] group-hover:text-[#120055]'>
										{item.title}
									</p>
									<ArrowNarrowRightIcon className='h-6 w-6 text-dark-blue group-hover:opacity-100 opacity-[16%] group-hover:text-[#120055] transition' />
								</div>
							</Link>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Other
