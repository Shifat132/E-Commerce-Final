import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import ElectroNics from './ElectroNics';
import { IoGameController } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { LuHeadset } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
const Slider = SlickSlider.default || SlickSlider;
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";






const CataGories = () => {





  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className=' cursor-pointer hidden h-11.5 w-11.5 rounded-full bg-[#F5F5F5] lg:flex items-center justify-center absolute -top-10 right-15 '
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        <FaArrowRightLong className=' ' />
      </div>

    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='cursor-pointer absolute h-11.5 w-11.5 rounded-full hidden lg:flex items-center justify-center bg-[#F5F5F5]  -top-10 right-31'
        onClick={onClick}
      >
        <FaArrowLeftLong className=' ' />

      </div>
    );
  }


  var settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]


  };


  return (
    <div className=' py-5 lg:py-30'>
      <Container>

        <SecHead

          headtitles='Categories'
          headtitletexttwo='Browse By Category'
        />







        <div className=' border-b pb-10 lg:pb-25 mt-2.5 lg:mt-10'>


          <Slider {...settings}>
            <div className=' '>
              <ElectroNics
                children={<IoGameController className='text-3xl block mx-auto' />}
                titleelectric='Game'
              />
            </div>

            <div className=''>
              <ElectroNics
                children={<FaCameraRetro className='text-3xl block mx-auto' />
                }
                titleelectric='Phone'
              />
            </div>
            <div className=''>
              <ElectroNics
                children={<LuHeadset className='text-3xl block mx-auto' />
                }
                titleelectric='Headset'
              />
            </div>
            <div className=''>
              <ElectroNics
                children={<RiComputerLine className='text-3xl block mx-auto' />}
                titleelectric='Decstop'
              />
            </div>

            <div className=''>
              <ElectroNics
                children={<BsSmartwatch className='text-3xl block mx-auto' />
                }
                titleelectric='Smartwatch'
              />
            </div>

            <div className=''>
              <ElectroNics
                children={<SlScreenSmartphone className='text-3xl block mx-auto' />}
                titleelectric='Phone'
              />
            </div>
          </Slider>




        </div>









      </Container>
    </div>
  )
}

export default CataGories
