import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import Header from '../../components/Header'

const whatsappFolderFeature = () => {
  const images = [
    'one.png',
    'two.png',
    'three.png',
    'four.png',
    'five.png',
    'six.png',
  ]
  return (
    <main className=''>
      {/* hero-section of project page */}
      <div className='lg:flex px-[40px] mx-auto lg:px-[124px] items-center flex-row-reverse w-full justify-between gap-12'>
        <div className='hidden w-full lg:flex justify-end lg:ml-auto'>
          <Image
            className='rounded-lg w-full '
            src={`/projects/whatsapp-folder-feature/one.png`}
            alt='hero-image'
            height={486}
            width={551}
            objectFit='contain'
          />
        </div>
        <div className='grid lg:hidden '>
          <Image
            className='rounded-lg '
            src={`/projects/whatsapp-folder-feature/one.png`}
            alt='hero-image'
            height='100%'
            width='100%'
            layout='responsive'
          />
        </div>
        <div className='space-y-[16px] flex-grow-1 pt-12 lg:pt-0'>
          <h1 className='font-semibold text-base text-light-blue'>
            Freelance Project
          </h1>
          <h2 className='font-bold lg:font-semibold text-[28px] lg:text-[56px] text-dark-blue'>
            WhatsApp Folder
          </h2>
          <p className='font-normal text-base leading-[26px] lg:leading-[33px] lg:text-[20px] opacity-[64%] '>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className='pt-[36px]  flex-col lg:flex-row flex items-center gap-2 lg:justify-start justify-center'>
            <p className='text-light-blue font text-sm'>Scroll Down</p>
            <div>
              <ArrowDownIcon className='h-4 text-light-blue' />
            </div>
          </div>
        </div>
      </div>

      {/* about the project */}
      <div className='px-[40px] lg:px-[164px] mt-[157px] lg:mt-[100px]'>
        <div className='max-w-[881px]'>
          <h1 className='font-bold text-2xl pb-6 text-light-blue'>
            About the project
          </h1>
          <h2 className='font-bold lg:font-semibold pb-9 text-[28px] lg:text-[56px] text-dark-blue'>
            WhatsApp Folder Feature Implementation Case study
          </h2>
          <p className='font-normal text-base leading-[26px] lg:leading-[33px] lg:text-[20px] opacity-[64%] '>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className='flex flex-col lg:flex-row mt-[48px] lg:gap-[137px] gap-6 lg:mt-[60px]'>
            <div className='flex flex-col items-start space-y-[16px]'>
              <h1 className='font-medium lg:font-semibold text-lg lg:text-xl text-dark-blue'>
                Skills
              </h1>
              <p className='text-black font-normal text-base lg:text-xl opacity-60'>
                UI Design , User Research
              </p>
            </div>
            <div className='flex flex-col items-start space-y-[16px]'>
              <h1 className='font-medium lg:font-semibold text-lg lg:text-xl text-dark-blue'>
                Team
              </h1>
              <p className='text-black font-normal text-base lg:text-xl opacity-60'>
                Myself
              </p>
            </div>
            <div className='flex flex-col items-start space-y-[16px]'>
              <h1 className='font-medium lg:font-semibold text-lg lg:text-xl text-dark-blue'>
                My Role
              </h1>
              <p className='text-black font-normal text-base lg:text-xl opacity-60'>
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={`/projects/whatsapp-folder-feature/two.png`}
        alt='hero-image'
        className='mt-[48px] lg:mt-[103px] object-cover w-full'
      />
      {/* 01 */}
      <div className='mt-[80px] lg:mt-[180px] px-[40px] lg:px-[164px]'>
        <p className='font-bold text-2xl text-light-blue'>01</p>
        <h1 className='font-semibold text-[56px] text-dark-blue'>Research</h1>
        <div className='mt-16 space-y-[64px]'>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <h3 className='font-medium text-[20px] lg:text-[32px] text-[#040404]'>
              User Research
            </h3>
            <p className='text-black opacity-80 font-normal text-lg lg:text-2xl leading-[28px] lg:leading-[40px] tracking-[-0.25px] lg:tracking-normal pt-4 lg:pt-0 max-w-[705px]'>
              Conducted a user research by interviewing some selected
              participants from different age categories to investigate the real
              world opinions on WhatsApp. The main issue highlighted by the
              users is that sometimes they are not able to keep up eith the
              imortant messages.
            </p>
          </div>
          <div className='mt-16'>
            <h3 className='font-medium text-[20px] lg:text-[32px] text-[#040404] '>
              Persona
            </h3>
            <img
              className='w-full mt-[24px] lg:mt-[36px] object-contain align-top block
            '
              src={`/projects/whatsapp-folder-feature/four.png`}
              alt='hero-image'
            />
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <h3 className='font-medium text-[20px] lg:text-[32px] text-[#040404]'>
              Market Research
            </h3>
            <div className='flex flex-col'>
              <p className='text-black opacity-80 font-normal text-lg lg:text-2xl leading-[28px] lg:leading-[40px] tracking-[-0.25px] lg:tracking-normal pt-4 lg:pt-0 max-w-[705px]'>
                I looked into the most common chatting app which people around
                me use, which is the Telegram messenger app and Signal.
              </p>
              <p className='text-black opacity-80 font-normal text-lg lg:text-2xl leading-[28px] lg:leading-[40px] tracking-[-0.25px] lg:tracking-normal pt-4 lg:pt-0 max-w-[705px]'>
                The majority of them no longer use WhatsApp and instead use
                alternative messaging applications. Whatsapp is now evolving
                into a casual mobile chatting programme, while other messaging
                services are more socializing networking. Additionally, I learn
                that other applications include tools for organising and
                prioritising their chats and messages.
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <h3 className='font-medium text-[20px] lg:text-[32px] text-[#040404]'>
              Takeaways
            </h3>
            <div className='flex flex-col'>
              <p className='text-black opacity-80 font-normal text-lg lg:text-2xl leading-[28px] lg:leading-[40px] tracking-[-0.25px] lg:tracking-normal pt-4 lg:pt-0 max-w-[705px]'>
                After the market research I find that the whatsapp is missing an
                effective way to organize the chats and messages.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[80px] lg:mt-[180px] px-[40px] lg:px-[164px]'>
        <h1 className='font-semibold text-[56px] text-dark-blue'>Problem</h1>
        <div className='mt-16'>
          <p className='text-black opacity-80 font-normal text-lg lg:text-2xl leading-[28px] lg:leading-[40px] tracking-[-0.25px] lg:tracking-normal pt-4 lg:pt-0 max-w-[705px]'>
            I combined the information from my market and user research to
            pinpoint a problem to address:
          </p>
          <p className='text-black opacity-80 font-bold text-lg lg:text-2xl leading-[28px] lg:leading-[40px] tracking-[-0.25px] lg:tracking-normal pt-4 lg:pt-0 max-w-[705px]'>
            It&apos;s hard to organize and keep up with messages on Whatsapp.
            Also their is chance in missing important messages.
          </p>
        </div>
      </div>
      {/* 02 */}
      <div className='mt-[80px] lg:mt-[180px] px-[40px] lg:px-[164px]'>
        <p className='font-bold text-2xl text-light-blue'>02</p>
        <h1 className='font-semibold text-[56px] text-dark-blue'>Solution</h1>
        <div className='mt-16'>
          <p className='text-black opacity-80 font-bold text-lg lg:text-2xl leading-[28px] lg:leading-[40px] tracking-[-0.25px] lg:tracking-normal pt-4 lg:pt-0 max-w-[705px]'>
            I use actions that people are already familiar with rather than
            presenting a brand-new functionality for them to understand. To
            lower cognitive strain, I merged the ideas of starring messages and
            whatsapp group.
          </p>
          <h3 className='font-medium pt-[64px] text-[20px] lg:text-[32px] text-[#040404] '>
            Information Architecture
          </h3>
          <img
            className='w-full mt-[24px] lg:mt-[36px] object-contain align-top block
            '
            src={`/projects/whatsapp-folder-feature/three.png`}
            alt='hero-image'
          />
        </div>
      </div>

      {/* 03 */}
      <div className='mt-[80px] lg:mt-[180px] px-[40px] lg:px-[164px]'>
        <p className='font-bold text-2xl text-light-blue'>03</p>
        <h1 className='font-semibold text-[56px] text-dark-blue'>
          Low Fidelity Sketchs
        </h1>
        <p className='font-normal text-base leading-[26px] lg:leading-[33px] lg:text-[20px] opacity-[64%] '>
          I started my design process by making low fidelity sketch. I took
          inspiration from the existing WhatsApp interface and functionality. I
          then added a few of my own concepts to create a user-friendly
          interface.
        </p>
        <div className='flex flex-col lg:flex-row lg:justify-between mt-16'>
          <h3 className='font-medium text-[20px] lg:text-[32px] text-[#040404]'>
            Low fidelity wireframe
          </h3>
        </div>
        <img
          className='w-full mt-[24px] lg:mt-[120px] object-contain 
            '
          src={`/projects/whatsapp-folder-feature/five.png`}
          alt='hero-image'
        />
        <div className='mt-16'>
          <div className='lg:flex gap-[30px] space-y-[30px] lg:space-y-0'>
            <div className='w-full'>
              <h1 className='font-medium text-[32px] tracking-[-0.5px]'>
                Icon Placement
              </h1>
              <p className='font-normal text-[18px] lg:text-[24px] leading-[28px] lg:leading-[40px] pt-[30px]'>
                The new folder feature symbol has to be simple enough for
                consumers to comprehend when it was introduced. We needed to put
                this feature in a prominent location because it is crucial
                rather than adding more navigation steps.
              </p>
            </div>
            <img
              className='w-full'
              src={`/projects/whatsapp-folder-feature/six.png`}
              alt='icon'
            />
          </div>
        </div>
      </div>
      {/* Other works */}
      <div className='w-full pt-[80px] lg:pt-[180px] px-[40px]'>
        <h1 className='text-center font-semibold text-2xl text-dark-blue lg:text-[40px] pb-12 lg:pb-[72px]'>
          Other works
        </h1>
        <div className='lg:flex space-y-[36px] lg:space-y-0 justify-center gap-16'>
          <div className='relative'>
            <div className='lg:hidden absolute bg-black opacity-[64%] z-40 w-full h-full left-0 bottom-0'></div>
            <div className='lg:hidden absolute z-50 w-full h-full left-0 bottom-0 p-[22px] flex flex-col justify-end '>
              <h1 className='text-white text-[13px] font-semibold opacity-[64%] pb-[9px]'>
                Case Study
              </h1>
              <h2 className='font-bold text-white text-[15px] pb-[13px]'>
                Whatsapp Folder Feature
              </h2>
              <p className='text-white text-[10px] font-medium opacity-80 pb-[13px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices lorem non feugiat egestas amet.
              </p>
              <button className='flex items-center justify-center rounded-[4px] opacity-100 bg-white text-dark-blue px-4 py-3 w-fit gap-[9px]'>
                <p className='font-bold text-[14px]'>View more</p>
                <ArrowRightIcon className='h-5' />
              </button>
            </div>
            <img src='/two.png' alt='one' className='w-full object-cover ' />
          </div>
          <div className='relative'>
            <div className='lg:hidden absolute bg-black opacity-[64%] z-40 w-full h-full left-0 bottom-0'></div>
            <div className='lg:hidden absolute z-50 w-full h-full left-0 bottom-0 p-[22px] flex flex-col justify-end '>
              <h1 className='text-white text-[13px] font-semibold opacity-[64%] pb-[9px]'>
                Case Study
              </h1>
              <h2 className='font-bold text-white text-[15px] pb-[13px]'>
                Whatsapp Folder Feature
              </h2>
              <p className='text-white text-[10px] font-medium opacity-80 pb-[13px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices lorem non feugiat egestas amet.
              </p>
              <button className='flex items-center justify-center rounded-[4px] opacity-100 bg-white text-dark-blue px-4 py-3 w-fit gap-[9px]'>
                <p className='font-bold text-[14px]'>View more</p>
                <ArrowRightIcon className='h-5' />
              </button>
            </div>
            <img src='/one.png' alt='one' className='w-full object-cover ' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default whatsappFolderFeature


// line 184 
// market research centered component instead of justify-between
// https://robin-noguier.com/project/fun/
// animations