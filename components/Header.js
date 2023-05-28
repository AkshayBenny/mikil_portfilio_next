import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Behance from '../public/logos/behance-fill.svg'
import Instagram from '../public/logos/instagram-line.svg'
import Twitter from '../public/logos/twitter-fill.svg'
import Linkedin from '../public/logos/linkedin-fill.svg'
import Image from 'next/image'
import ThemeToggleButton from './ThemeToggleButton'
import Link from 'next/link'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const navbarVariants = {
		hidden: {
			height: 0,
			opacity: 0,
		},
		visible: { height: '350px', opacity: 1 },
	}

	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className={`relative bg-white bg-opacity-50 z-10 backdrop-blur-3xl ${
				isOpen ? ' dark:bg-black' : 'bg-none'
			}`}>
			<div className='w-full h-[72px]  items-center justify-between  z-50 lg:px-16 px-6 flex '>
				<div>
					<Link href='/'>
						<div className=' grid cursor-pointer'>
							<p className='text-[#120055] font-semibold text-base'>
								SreemikiLt
							</p>
						</div>
					</Link>
				</div>
				<div className='hidden lg:flex'>
					<div className='flex items-center justify-between gap-4 font-semibold'>
						<div className='relative group'>
							<a
								href='#home'
								className='font-display max-w-sm text-base font-semibold leading-tight'>
								<span className='link  opacity-[50%] group-hover:opacity-100 lg:link-underline  dark:link-underline-white link-underline-black  pb-1 transition'>
									Home
								</span>
							</a>
						</div>
						<div className='relative group'>
							<a
								href='#portfolio'
								className='font-display max-w-sm text-base font-semibold leading-tight'>
								<span className='link opacity-[50%] group-hover:opacity-100 lg:link-underline dark:link-underline-white link-underline-black  pb-1'>
									Portfolio
								</span>
							</a>
						</div>
						<div className='relative group'>
							<a
								href='#testimonials'
								className='font-display max-w-sm text-base font-semibold leading-tight'>
								<span className='link opacity-[50%] group-hover:opacity-100 lg:link-underline  dark:link-underline-white link-underline-black  pb-1'>
								Testimonials
								</span>
							</a>
						</div>
						<div className='relative group'>
							<a
								href='#contact'
								className='font-display max-w-sm text-base font-semibold leading-tight'>
								<span className='link opacity-[50%] group-hover:opacity-100 lg:link-underline   dark:link-underline-white link-underline-black pb-1'>
									Contacts
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className='hidden lg:flex'>
					<ul className='flex items-center justify-between gap-4'>
						<li className=''>
							<Behance />
						</li>
						<li className=''>
							<a
								href='www.linkedin.com/in/akshay-benny-5346bb209'
								target='_blank'
								rel='noreferrer'>
								<Twitter />
							</a>
						</li>
						<li className=''>
							<a
								href='https://www.instagram.com/akshay_benny_976/?hl=en'
								target='_blank'
								rel='noreferrer'>
								<Instagram />
							</a>
						</li>
						{/*  */}
						<li className='hover:animate-bounce dark:hidden flex'>
							<a
								href='https://github.com/AkshayBenny'
								target='_blank'
								rel='noreferrer'>
								<Linkedin />
							</a>
						</li>

						{/* <li className='flex items-center justify-center'>
              <ThemeToggleButton />
            </li> */}
					</ul>
				</div>
				{!isOpen ? (
					<div
						className='flex lg:hidden items-center justify-center cursor-pointer'
						onClick={() => setIsOpen(!isOpen)}>
						<MenuAlt1Icon className='h-6 ' />
					</div>
				) : (
					<div
						className='flex lg:hidden items-center justify-center cursor-pointer'
						onClick={() => setIsOpen(!isOpen)}>
						<XIcon className='h-6 ' />
					</div>
				)}

				{isOpen && (
					<motion.nav
						variants={navbarVariants}
						initial='hidden'
						animate='visible'
						className='backdrop-filter backdrop-blur-sm absolute flex flex-col items-start justify-center  w-full bg-white dark:bg-black top-16 left-0 z-10  px-6 space-y-[24px] '>
						<a
							onClick={() => setIsOpen(false)}
							href='#project'
							className='font-semibold text-base pt-10 cursor-pointer'>
							Projects
						</a>
						<a
							onClick={() => setIsOpen(false)}
							href='#other'
							className='font-semibold text-base  cursor-pointer'>
							Other
						</a>
						<a
							onClick={() => setIsOpen(false)}
							href='#testimonials'
							className='font-semibold text-base  cursor-pointer'>
							Testimonials
						</a>
						<a
							onClick={() => setIsOpen(false)}
							href='#contact'
							className='font-semibold text-base  cursor-pointer'>
							Contact
						</a>
						{/* <div className='pt-3'>
              <ThemeToggleButton />
            </div> */}
					</motion.nav>
				)}
			</div>
		</motion.header>
	)
}

export default Header
