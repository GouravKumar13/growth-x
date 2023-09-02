import React from 'react'

const HeroSection = () => {
    return (

        <div className='flex flex-col justify-center items-center p-20  relative'>
            <div className=' absolute w-full h-full top-10  Hero-Section-bgColor bg-no-repeat bg-cover'></div>
            <h1 className='text-[54px] text-center text-white font-bold leading-normal z-10'>Become a top 1%  <br />
                growth leader
            </h1>
            <div className='p-10 flex items-center justify-between gap-7 z-10'>
                <div className='border border-white flex justify-center h-fit items-center font-medium  rounded p-3   text-white   nav-btn-styling'>
                    Become a Member
                </div>
                <div className='text-white hover:border hover:border-white rounded p-3 font-medium'>
                    Membership Guide
                </div>
            </div>
        </div>


    )
}

export default HeroSection
