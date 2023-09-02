import React from 'react'
import Join from "../Assets/comp_logos.webp"
const BannerSection = () => {
    return (
        <div className='py-20 flex justify-center flex-col items-center'>

            <h1 className='text-[48px] font-normal text-center z-20  pb-8 text-white'>Join leaders from marquee companies</h1>
            <img src={ Join } alt="companys logo" width={ 1000 } />
        </div>
    )
}

export default BannerSection
