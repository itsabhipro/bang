import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col lg:flex-row w-full lg:h-[559px] h-full bg-lightGray items-center lg:border-white lg:border-l-[17px] border-l-0'>
        <div className='flex-1 lg:ms-[55px] lg:me-[123px] ms-0 me-0 mt-[79px] lg:mt-0'>
            <Image src="/hero_image.png" width={547} height={439.09} alt='hero_image'/>
        </div>
        <div className='flex-1 flex flex-col lg:w-[499px] lg:pe-[70px] gap-[16px] p-[29px]'>
            <p className='text-sm text-green font-bold'>Just launch in kingdom,UK</p>
            <p className='text-black text-4xl font-bold'>Plumber prices are crazy. Get your home's BANG! code to unlock discounted prices on plumbers and more</p>
            <p className='text-lightBlack'>Your home gets 1 BANG! in each category every year and the can be used by you or anyone you live with. BANG!S are desiged to save your household big bucks.</p>

            <div className='flex gap-[14px] mt-2'>
                <button className='px-[12px] py-[4px] font-bold text-black border-black border text-[13px]'>More Info</button>
                <button className='px-[12px] py-[4px] font-bold text-white bg-primary border-primary border text-[13px]'>Tradesperson BANG!</button>
            </div>
        </div>
    </div>
  )
}

export default Hero