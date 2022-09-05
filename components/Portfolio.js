import Link from 'next/link'
import React from 'react'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1 className='font-normal text-light-blue lg:text-2xl tracking-[-0.25px] text-lg text-center'>
        Portfolio
      </h1>
      <h2 className='font-semibold text-darkblue text-[32px] lg:text-[40px] tracking-[-0.5px] lg:tracking-[-1px] text-center'>
        All Creative Works
      </h2>
      <div className='mt-[80px] lg:mt-[72px] space-y-[72px] lg:space-y-[120px]'>
        <PortfolioCard
          order={1}
          title='WhatsApp Folder Feature'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          lorem non feugiat egestas amet.'
          link='/projects/whatsapp-folder-feature'
          image='/one.png'
        />

        <PortfolioCard
          order={2}
          title='WhatsApp Folder Feature'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          lorem non feugiat egestas amet.'
          link='/'
          image='/two.png'
        />
        <PortfolioCard
          order={3}
          title='WhatsApp Folder Feature'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          lorem non feugiat egestas amet.'
          link='/'
          image='/three.png'
        />
      </div>
    </section>
  )
}

export default Portfolio
