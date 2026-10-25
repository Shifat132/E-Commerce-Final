
import Container from './Container'
import React, { useState } from 'react'
import remotes from '../assets/Remotecontrols.png'
import chaiars from '../assets/chaiar.png'
import CustmPcard from './CustmPcard'
import keyboards from '../assets/keyboard.png'
import ledsmonitor from '../assets/led.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
const Slider = SlickSlider.default || SlickSlider;
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import baghslady from '../assets/Bagh.png'
import tables from '../assets/table.png'
import jbl from '../assets/soundbox.png'
import jscket from '../assets/Jacket.png'


const ProductCard = () => {


  const [viewall, setviewall] = useState(false)


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className=' cursor-pointer  h-11.5 w-11.5 rounded-full bg-[#F5F5F5] hidden lg:flex items-center justify-center absolute -top-20 right-6 '
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
        className='cursor-pointer h-11.5 w-11.5 rounded-full hidden lg:flex items-center justify-center bg-[#F5F5F5]  absolute -top-20 right-22'
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
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

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
    <div className='py-10  '>
      <Container>

        <style>{`
          .slider-container .slick-slider { width: 100% !important; overflow: hidden; }
          .slider-container .slick-track { display: flex !important; }
          .slider-container .slick-slide { height: auto !important; display: flex !important; justify-content: center; }
          .slider-container .slick-slide > div { width: 100% !important; padding: 0 10px; box-sizing: border-box !important; }
        `}</style>

        <div className='slider-container'>


          <Slider {...settings}>
            <div className=' px-2 '>

              <CustmPcard
                imgsrc={remotes}
                produtname='S-Series Comfort Chair '
                parsents='- 56'
                price='110'
                discauntprice='$231'

              />
            </div>


            <div className='px-2'>

              <CustmPcard
                imgsrc={chaiars}
                produtname='S-Series Comfort Chair '
                parsents='- 56'
                price='110'
                discauntprice='$231'

              />
            </div>


            <div className='px-2'>

              <CustmPcard
                imgsrc={ledsmonitor}
                produtname='S-Series Comfort Chair '
                parsents='- 56'
                price='110'
                discauntprice='$231'


              />

            </div>
            <div className='px-2'>

              <CustmPcard
                imgsrc={remotes}
                produtname='S-Series Comfort Chair '
                parsents='- 56'
                price='110'
                discauntprice='$231'

              />
            </div>


            <div>

              <CustmPcard
                imgsrc={keyboards}
                produtname='S-Series Comfort Chair '
                parsents='- 56'
                price='110'
                discauntprice='$231'

              />
            </div>
          </Slider>

          {
            viewall ?
              <div className='mt-15 grid grid-cols-1 lg:grid-cols-4 gap-7.5 w-full'>

                <div className=''>
                  <CustmPcard

                    imgsrc={remotes}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>



                <div className=''>
                  <CustmPcard

                    imgsrc={chaiars}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>





                <div className=''>
                  <CustmPcard

                    imgsrc={ledsmonitor}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>




                <div className=''>
                  <CustmPcard

                    imgsrc={remotes}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>



                <div className=''>
                  <CustmPcard

                    imgsrc={chaiars}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>



                <div className=''>
                  <CustmPcard

                    imgsrc={ledsmonitor}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>





                <div className=''>
                  <CustmPcard

                    imgsrc={baghslady}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>




                <div className=''>
                  <CustmPcard

                    imgsrc={chaiars}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>





                <div className=''>
                  <CustmPcard

                    imgsrc={jbl}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>



                <div className=''>
                  <CustmPcard

                    imgsrc={jscket}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>





                <div className=''>
                  <CustmPcard

                    imgsrc={remotes}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>




                <div className=''>
                  <CustmPcard

                    imgsrc={ledsmonitor}
                    produtname='The north coat'
                    price='230'
                    discauntprice='330'

                  />
                </div>







              </div>





              : null
          }

        </div>
        {viewall ? null :
          <button onClick={() => setviewall(true)} className=' cursor-pointer py-4 px-12 justify-center bg-primary text-white  text-2xl block mx-auto mt-15'>View All Products</button>
        }


        <div className='border-b border-gray-700 mt-10'>
        </div>


      </Container>

    </div>
  )
}

export default ProductCard
