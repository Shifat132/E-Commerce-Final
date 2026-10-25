import React, { useEffect, useState } from 'react'
import Container from './Container'
import { countDownDateAndTime } from 'countdown-date-time'; 

const SounBox = () => {

     const conduct_date = '2026-11-15 16:54:00';
     const[show,setshow]=useState({})

        useEffect(()=>{
       
            setInterval(()=>{

            const countDown = countDownDateAndTime(conduct_date);
                
                setshow(countDown)


            },1000)

        },[])


  return (
    <div className=' py-5  lg:py-18 '>
        <Container>

            <div className='lg:p-15 p-3  h-66 lg:h-125 bg-[url(./assets/Boxs.png)] bg-no-repeat bg-cover bg-center'>

            <h1 className='lg:mb-8 mb-2 text-[16px] font-semibold text-[#00FF66]'>Categories</h1>
            <p className=' mb-2 lg:mb-8 text-xl lg:text-[48px] font-semibold text-white'>Enhance Your <span className='block'>Music Experience</span> </p>
              <div className=' space-y-2 lg:space-y-6 flex gap-6 mb-3 mt-3 lg:mt-0 g:mb-5'>

                <div className='w-15.25 h-15.25 rounded-full bg-white p-3.5 justify-center'>
                    <h1 className='text-[11px] font-normal text-center'>{show.days}</h1>
                    <h1 className='text-[11px] font-normal text-center'>days</h1>
                </div>

                     
                <div className='w-15.25 h-15.25 rounded-full bg-white p-3.5 justify-center'>
                    <h1 className='text-[11px] font-normal text-center'>{show.days}</h1>
                    <h1 className='text-[11px] font-normal text-center'>Hours</h1>
                </div>


                     
                <div className=' relative w-15.25 h-15.25 rounded-full bg-white p-3.5 justify-center'>
                    <h1 className='text-[11px] font-normal text-center'> {show.minutes}</h1>
                    <h1 className=' absolute left-2.5  text-[11px] font-normal text-center'>Miniutes</h1>
                </div>

                     
                <div className=' relative w-15.25 h-15.25 rounded-full bg-white  p-4 justify-center'>
                    <h1 className='text-[11px] font-normal text-center'> {show.seconds} </h1>
                    <h1 className=' absolute left-2.5 text-[11px] font-normal text-center'>Seconds</h1>
                </div>
            
              </div>

               <button className='bg-green-500 lg:py-4 mt-2 lg:mt-0 py-2 px-6  lg:px-12 rounded-sm cursor-pointer hover:bg-green-400'>Buy Now</button>


            </div>
        </Container>
      
    </div>
  )
}

export default SounBox