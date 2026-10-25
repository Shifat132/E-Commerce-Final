import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import CustmPcard from './CustmPcard'
import cars from '../assets/car.png'
// import cameras from '../assets/camera.png/'
 import baghslady from '../assets/Bagh.png'
import tables from '../assets/table.png'
import cat from '../assets/catfood.png'
import blackjacktes from '../assets/blackjacket.png'
import remotevlack from '../assets/blackremote.png'
import boatshoes from '../assets/shoes.png'
import tablet from '../assets/laptoop.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
const Slider = SlickSlider.default || SlickSlider;
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const ExploreProducts = () => {


  
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=' cursor-pointer absolute -top-20 right-7 h-11.5 w-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center '
      onClick={onClick}
    >
      
       <FaArrowLeftLong className=' ' />
      
      
      </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=' cursor-pointer absolute -top-20 right-23 h-11.5 w-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center'
      onClick={onClick}
    >
    
    
    <FaArrowRightLong className=' ' />
    
    
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
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false
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
    <div className=' py-10 lg:py-25'>
        
        <Container>
          <div>

          <SecHead
           headtitles='Our Products'
           headtitletexttwo='Explore Our Products'
          />
          </div>

          <div className=' mt-15 '>


         
                   <Slider {...settings}>




                    
                <div>
                <CustmPcard
                
                imgsrc={cat}
                produtname='Breed Dry Dog Food'
                flexess='flex gap-4 '
                ratemathmathics='67'
                price='121'
                discauntprice=''
                />

                
                     <div className='mt-20'>
                <CustmPcard
                
                imgsrc={blackjacktes}
                produtname='Quilted Satin Jacket'
                flexess='flex gap-4'
                price='320'
                ratemathmathics='46'
                discauntprice=''
                 className='bg-orange-500 w-5 h-5 border-2 rounded-full'
                 classname='bg-[#DB4444] w-5 h-5 '
                />
              </div>
              </div>
 
              <div>
                <CustmPcard
                
                imgsrc={cars}
                produtname='Kids Electric Car'
                price='229'
                discauntprice=''
                />

                
               <div className='mt-15'>
                <CustmPcard
                
                imgsrc={boatshoes}
                produtname='Jr. Zoom Soccer Cleats'
                 flexess='flex gap-4'
                price='44'
                discauntprice=''
                ratemathmathics='45'
                className='bg-yellow-200 w-5 h-5 rounded-full border border-green-300'
                classname='bg-[#DB4444] w-5 h-5 rounded-full '
                />
              </div>

              </div>

               <div>
                <CustmPcard
                
                imgsrc={tablet}
                produtname='ASUS FHD Gaming Laptop'
                flexess='flex gap-4'
                price='680'
                discauntprice=''
                ratemathmathics='43'
                />

                     <div className='mt-20'>
                <CustmPcard
                
                imgsrc={baghslady}
                produtname='Gucci duffle bag'
                flexess='flex gap-4'
                price='320'
                discauntprice=''
                ratemathmathics='67'
                 className='bg-amber-300 w-5 h-5 border-2'
                 classname='bg-[#DB4444] w-5 h-5 '
                />
              </div>
              </div>


               <div>
                <CustmPcard
                
                imgsrc={cat}
                produtname='Breed Dry Dog Food'
                price='130'
                flexess='flex gap-4'
                discauntprice=''
                ratemathmathics='56'
                />

                
                     <div className='mt-20'>
                <CustmPcard
                
                imgsrc={blackjacktes}
                produtname='Quilted Satin Jacket'
                price='220'
                flexess='flex gap-4'
                discauntprice=''
                ratemathmathics='78'
                 className='bg-white w-5 h-5 border-2 rounded-full'
                 classname='bg-[#DB4444] w-5 h-5 '
                />
              </div>
              </div>




                


               <div>
                <CustmPcard
                
                imgsrc={boatshoes}
                produtname='Jr. Zoom Soccer Cleats'
                flexess='flex gap-4'
                ratemathmathics='98'
                price='232'
                discauntprice=''
                />

                
                     <div className='mt-20'>
                <CustmPcard
                
                imgsrc={tables}
                produtname='ASUS FHD Gaming Laptop'
                price=''
                flexess='flex gap-4'
                ratemathmathics='23'
                discauntprice=''
                 className='bg-green-400 w-5 h-5 border-2'
                 classname='bg-primary w-5 h-5 '
                />
              </div>

              </div>


                <div>
                <CustmPcard
                
                imgsrc={cat}
                produtname='Breed Dry Dog Food'
                flexess='flex gap-4 '
                ratemathmathics='67'
                price='121'
                discauntprice=''
                />

                
                     <div className='mt-20'>
                <CustmPcard
                
                imgsrc={blackjacktes}
                produtname='Quilted Satin Jacket'
                flexess='flex gap-4'
                price='320'
                ratemathmathics='46'
                discauntprice=''
                 className='bg-orange-500 w-5 h-5 border-2 rounded-full'
                 classname='bg-[#DB4444] w-5 h-5 '
                />
              </div>
              </div>



               </Slider>


          </div>

        </Container>
      
    </div>
  )
}

export default ExploreProducts
