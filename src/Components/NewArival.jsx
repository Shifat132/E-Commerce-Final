import React from 'react'
import Container from './Container'
import gamingbigs from '../assets/Gamingbig.png'
import ladycaps from '../assets/ladycap.png'
import gucciya from '../assets/gucciperfium.png'
import amazonitems from '../assets/amazonitem.png'

const NewArival = () => {
    return (
        <div className=' py-7 lg:py-15'>
            <Container>
                <div>
                    <div className='flex lg:flex-row flex-col gap-7.5'>
                        <div className=' relative'>
                            <img src={gamingbigs} alt="" />
                            <div className=' absolute top-0 left-0 pt-40 lg:pt-111.75 pb-0 lg:pb-18 pr-69.25 pl-8'>
                                <h1 className='lg:text-2xl text-xl font-semibold text-white'>PlayStation 5</h1>
                                <p className='text-sm font-medium text-white mt-4'>Black and White version of the PS5 coming out on sale.</p>
                                <h2 className='text-[16px] mt-2 lg:mt-4 font-medium text-white border-b  inline-block'>Shop Now</h2>
                            </div>
                        </div>
                        <div>
                            <div className=' relative'>
                                <img src={ladycaps} alt="" />
                                <div className=' absolute top-0 left-0 pt-3 lg:pt-30 pl-6 text-white lg:pb-0 pb-10 pr-72.75'>
                                    <h1 className='text-2xl font-semibold lg:mt-4 mt-2 lg:mb-4 mb-1 '>Women’s Collections</h1>
                                    <p className='text-sm font-medium mb-0 lg:mb-4'>Featured woman collections that give you another vibe.</p>
                                    <h2 className='text-lg font-medium border-b  inline-block'>Shop Now</h2>
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col gap-7.5 mt-8'>
                                <div className=' relative lg:mx-0 mx-auto'>
                                <img src={amazonitems} alt="" />
                                <div className='text-white absolute top-0 left-0 pl-6 '>
                                    <h1 className='text-2xl font-semibold mt-[165px]  '>Speakers</h1>
                                    <p className='text-sm font-medium mt-2'>Amazon wireless speakers</p>
                                    <h2 className='text-lg font-medium border-b mt-2 inline-block'>Shop Now</h2>
                                </div>
                                </div>
                                <div className=' relative lg:mx-0 mx-auto'>
                                <img src={gucciya} alt="" />
                                 <div className='text-white absolute top-0 left-0 pl-6 '>
                                    <h1 className='text-2xl font-semibold mt-[165px]  '>Perfume</h1>
                                    <p className='text-sm font-medium mt-2'>GUCCI INTENSE OUD EDP</p>
                                    <h2 className='text-lg font-medium border-b mt-2 inline-block'>Shop Now</h2>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default NewArival
