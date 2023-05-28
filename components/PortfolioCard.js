import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
const PortfolioCard = ({ title, desc, link, image, order }) => {
  return (
    <div className='max-w-[1500px] mx-auto lg:grid grid-cols-2 items-center gap-x-8 px-[40px] lg:px-16 col-span-1'>
      <div className={`hidden lg:grid ${order % 2 === 0 && 'order-2'}`}>
        <Image
          priority
          src={image}
          alt='one'
          height='490px'
          width='620px'
          objectFit='cover'
          layout='responsive'
          className='rounded-[32px]'
        />
      </div>
      <div className='grid lg:hidden'>
        <Image
          priority
          src={image}
          alt='one'
          height='1500%'
          width='1500%'
          objectFit='contain'
        />
      </div>
      <div className='lg:max-w-[620px] '>
        <h1 className='font-medium lg:font-semibold text-[18px] lg:text-[16px] text-black pb-4'>
          CASE STUDY
        </h1>
        <h2 className='font-semibold text-[20px] lg:text-[32px] tracking-[-0.5px] text-dark-blue pb-6'>
          {title}
        </h2>
        <p className='text-[20px] opacity-[48%] pb-8 leading-[33px]'>{desc}</p>
        <Link href={link}>
          <button className='flex items-center justify-center gap-[17px] border border-light-gray rounded-lg px-6 py-[19px] font-bold text-sm lg:text-base text-dark-blue'>
            <p>View more</p>
            <ArrowNarrowRightIcon className='h-6 w-6' />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioCard
