import React from 'react'
import Container from './Container'
import carlogo from '../assets/Services.png'
import carlogo2 from '../assets/money.png'
 import carlogo3 from '../assets/headset.png'
const CustomerService = () => {
  return (
    <div className=' py-7 lg:py-15 '>
        <Container>

            <div className='flex lg:flex-row flex-col  justify-between items-center'>
                <div>
                    <img src={carlogo} className=' mx-auto block' alt="" />
                     <h1 className=' text-[20px] font-semibold text-black mt-9 mb-2.5'>FREE AND FAST DELIVERY</h1>
                     <h2 className='text-lg font-normal text-black '>Free delivery for all orders over $140</h2>
                </div>

                
                <div className='mt-4 lg:mt-0'>
                    <img src={carlogo3} className=' mx-auto block'  alt="" />
                     <h1 className=' text-[20px] font-semibold text-black mt-9 mb-2.5'>24/7 CUSTOMER SERVICE</h1>
                     <h2 className='text-lg font-normal text-black '>Friendly 24/7 customer support</h2>
                </div>

                
                <div className='mt-4 lg:mt-0'>
                    <img src={carlogo2} className=' mx-auto block'  alt="" />
                     <h1 className=' text-[20px] font-semibold text-black mt-9 mb-2.5'>MONEY BACK GUARANTEE</h1>
                     <h2 className='text-lg font-normal text-black '>We reurn money within 30 days</h2>
                </div>

            </div>
        </Container>
      
    </div>
  )
}

export default CustomerService
