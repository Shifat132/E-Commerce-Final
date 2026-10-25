import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time'; 
import SecHead from './SecHead';

const CountDown = () => {
    const conduct_date = '2026-10-25 16:54:00';


 const[count,setcount]=useState({})

 useEffect(()=>{

     setInterval(()=>{

         const countDown = countDownDateAndTime(conduct_date);
         setcount(countDown)

     })
 },[])


    return (
        <div className=' pb=2 lg:pb-10'>
            <div className="container mx-auto px-3 lg:px-0">

               
        <SecHead

          headtitles='Categories'
          headtitletexttwo='Flash Sales'
        />

                <div className='flex lg:flex-row flex-col gap-15 mt-4 lg:mt-9'>
                    

                  <div className='flex  gap-5 lg:gap-12 items-center'>
                    <div>
                    <h2>Days</h2>
                    <h1 className=' font-bold text-xl text-black'>{count.days}</h1>
                    </div>
                    <div>
                    <h2>Hours</h2>
                    <h1 className='text-xl font-bold'>{count.hours}</h1>
                    </div>
                    <div>
                    <h3>Minites</h3>
                    <h2 className='text-2xl font-bold'>{count.minutes}</h2>
                    </div>
                    <div>
                    <h4>seconds</h4>
                     <h2 className='text-2xl font-bold'>{count.seconds}</h2>  
                    </div>
                  </div>

                </div>

            </div>
        </div>
    )
}

export default CountDown
