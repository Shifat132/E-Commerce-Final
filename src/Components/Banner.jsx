import React, { lazy, Suspense, useRef, useState } from 'react'
import bannerImg from '../assets/BannerImg.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
const Slider = SlickSlider.default || SlickSlider;
import { TbCategory } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {



      
          

  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
       appendDots: dots => (
      <div
    
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
     className='w-3.5 h-3.5 bg-gray-400 rounded-full absolute bottom-8 translate-x-8 border-2 border-amber-50'
      >
        {}
      </div>
    )
  
  };

          const [shows ,setshows]=useState(false)
    
    return (
        <div className='lg:pb-30 pb-5'>
            <div className='container mx-auto px-3 lg:px-0'>
               <div className='flex lg:flex-row flex-col gap-2 lg:gap-12 items-center'>

                    <div onClick={()=>setshows(!shows)} className='flex gap-2 items-center py-5 lg:hidden'>
                      <TbCategory className='text-xl' />
                      <h1 className='text-lg font-bold'>Categoryes</h1>

                    </div>
               
                <div className={` ${shows ? ' block' : ' hidden'} lg:w-[20%] lg:block lg:border-r pr-5 pb-3 duration-300  ease-linear lg:pb-13`}>

                    <ul className='py-2.5 lg:py-0 space-y-4'>
                        <li className='flex  justify-between items-center'>Woman’s Fashion <MdKeyboardArrowRight className='cursor-pointer'/> </li>
                        <li className='flex  justify-between  items-center'>Men’s Fashion <MdKeyboardArrowRight className='cursor-pointer' /> </li>
                        <li className='flex  justify-between  items-center'>Electronics <MdKeyboardArrowRight className='cursor-pointer'/></li>
                        <li className='flex  justify-between   items-center'>Home & Lifestyle</li>
                        <li className='flex  justify-between  items-center'>Medicine</li>
                        <li className='flex  justify-between  items-center'>Sports & Outdoor</li>
                        <li className='flex  justify-between  items-center'>Baby’s & Toys</li>
                        <li className='flex  justify-between  items-center'>Groceries & Pets</li>
                        <li className='flex  justify-between  items-center'>Health & Beauty</li>
                       
                    </ul>

                </div>

                <div className='lg:w-[80%] w-full lg:mt-10 min-w-0 relative'>

                            
                    <Slider ref={sliderRef} {...settings} className=''>
                        <div>
                            <img src={bannerImg} alt="" />
                        </div>
                        <div>
                            <img src={bannerImg} alt="" />
                        </div>
                        <div>
                            <img src={bannerImg} alt="" />
                        </div>
                
                    </Slider>

                    <div className=' hidden lg:static '>

                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className='   cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white'
                    >
                        ❮
                    </button>
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className='  cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white'
                    >
                        ❯
                    </button>

                    </div>

                </div>

                </div>

            </div>

        </div>
    )
}

export default Banner
