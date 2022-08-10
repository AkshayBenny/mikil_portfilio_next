import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
const PortfolioCard = ({ title, desc, link, image, order }) => {
  return (
    <div
      className={`lg:flex   items-center justify-center gap-8 px-[40px] lg:px-16 ${
        order % 2 === 0 && 'flex-row-reverse'
      }`}
    >
      <img
        src={image}
        alt='one'
        className='w-full object-cover pb-8 lg:pb-0 lg:max-w-[620px] lg:max-h-[490px]'
      />
      <div className='w-full lg:max-w-[620px] '>
        <h1 className='font-medium lg:font-semibold text-[18px] lg:text-[16px] text-black pb-4'>
          CASE STUDY
        </h1>
        <h2 className='font-semibold text-[20px] lg:text-[32px] text-dark-blue pb-6'>
          {title}
        </h2>
        <p className='text-[20px] opacity-[48%] pb-8'>{desc}</p>
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
