import Link from 'next/link'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
const Other = () => {
  return (
    <div className='lg:flex items-center justify-center gap-9 px-[40px] lg:px-16 pt-[104px] lg:pt-[100px]'>
      <div className='  lg:max-w-[620px] w-full'>
        <h1 className='text-lg lg:text-2xl text-light-blue pb-12 lg:pb-[72px]'>
          What Else I Do?
        </h1>
        <Link href='/'>
          <div className='border-b border-black pb-[27px] lg:pb-6 border-opacity-[4%] w-full flex items-center justify-between'>
            <p className='font-bold text-[28px] text-black opacity-[16%] lg:text-[56px]'>
              Illustration
            </p>
            <ArrowNarrowRightIcon className='h-6 w-6 text-dark-blue opacity-[16%]' />
          </div>
        </Link>
        <Link href='/'>
          <div className='border-b border-black border-opacity-[4%] pb-[27px] lg:pb-6 w-full flex items-center justify-between'>
            <p className='font-bold text-[28px] text-black opacity-[16%] lg:text-[56px]'>
              Posters
            </p>
            <ArrowNarrowRightIcon className='h-6 w-6 text-dark-blue opacity-[16%]' />
          </div>
        </Link>
        <Link href='/'>
          <div className='border-b border-black border-opacity-[4%] pb-[27px] lg:pb-6 w-full flex items-center justify-between'>
            <p className='font-bold text-[28px] text-black opacity-[16%] lg:text-[56px]'>
              Logos
            </p>
            <ArrowNarrowRightIcon className='h-6 w-6 text-dark-blue opacity-[16%]' />
          </div>
        </Link>
      </div>
      <div className='hidden lg:grid grid-cols-2 gap-4 '>
        <img src='/other/otherOne.png' alt='' className='my-auto' />
        <div className='space-y-[16px]'>
          <img src='/other/otherTwo.png' alt='' />
          <img src='/other/otherThree.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Other
