import Link from 'next/link'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
const Other = () => {
	return (
		<section
			id='other'
			className='lg:flex items-center justify-center gap-9 px-[40px] lg:px-16 pt-[104px] lg:pt-[100px] bg-[#F6F6F6] mt-[100px]'>
			<div className=' w-full'>
				<h1 className='text-lg lg:text-2xl text-light-blue pb-12 lg:pb-[16px] '>
					What Else I Do?
				</h1>

				<h4 className='font-semibold text-[40px] text-[#120055] lg:pb-[72px]'>
					My Playground
				</h4>
				<div className='w-full lg:grid grid-cols-2 gap-y-[24px] gap-x-[24px]'>
					<Link href='/illustrations'>
						<div className='cursor-pointer border-b border-black py-[27px] lg:py-6 border-opacity-[4%] w-full flex items-center justify-between'>
							<p className='font-bold text-[28px] text-black opacity-[16%] lg:text-[56px]'>
								Illustration
							</p>
							<ArrowNarrowRightIcon className='h-6 w-6 text-dark-blue opacity-[16%]' />
						</div>
					</Link>
					<Link href='/prototypes'>
						<div className='cursor-pointer border-b border-black border-opacity-[4%] py-[27px] lg:py-6 w-full flex items-center justify-between'>
							<p className='font-bold text-[28px] text-black opacity-[16%] lg:text-[56px]'>
								Prototypes
							</p>
							<ArrowNarrowRightIcon className='h-6 w-6 text-dark-blue opacity-[16%]' />
						</div>
					</Link>
					<Link href='/logos'>
						<div className='cursor-pointer border-b border-black border-opacity-[4%] py-[27px] lg:py-6 w-full flex items-center justify-between'>
							<p className='font-bold text-[28px] text-black opacity-[16%] lg:text-[56px]'>
								Logos
							</p>
							<ArrowNarrowRightIcon className='h-6 w-6 text-dark-blue opacity-[16%]' />
						</div>
					</Link>
					<Link href='/posters'>
						<div className='cursor-pointer border-b border-black border-opacity-[4%] py-[27px] lg:py-6 w-full flex items-center justify-between'>
							<p className='font-bold text-[28px] text-black opacity-[16%] lg:text-[56px]'>
								Posters
							</p>
							<ArrowNarrowRightIcon className='h-6 w-6 text-dark-blue opacity-[16%]' />
						</div>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Other
