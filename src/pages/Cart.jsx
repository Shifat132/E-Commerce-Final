import BreadCump from '../Components/BreadCump'
import React from 'react'
import CartDettels from '../Components/CartDettels'
import { useSelector } from 'react-redux'




const Cart = () => {


     


       const datacart = useSelector(state => state.products.cart)
       
    const subtotals = useSelector(state => state.products.subtotal)

    console.log(subtotals)
  
       

    return (
        <div className='py-20'>
            <div className='container'>
                <BreadCump />

                  <h1 className='text-3xl font-bold font-inter text-gray-900 mb-8 text-center'>Shopping Cart</h1>

                  {
                    datacart.length === 0 ? (   <div className='text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100'>
                    <h2 className='text-2xl font-semibold text-gray-600'>Your cart is empty</h2>
                    <p className='text-gray-400 mt-2'>Looks like you haven't added anything yet.</p>
                </div>):(




            
                  <>

                <div className='flex justify-between items-center rounded-sm  shadow-sm py-6 px-10 mt-20'>
                    <h1 className='text-[16px] leading-6 font-normal'>Product</h1>
                    <h1 className='text-[16px] leading-6 font-normal'>Price</h1>
                    <h1 className='text-[16px] leading-6 font-normal'>Quantity</h1>
                    <h1 className='text-[16px] leading-6 font-normal'>Subtotal</h1>
                </div>
                   

                     {
                        datacart.map((item)=>{
                         return <CartDettels
                             key={item.id}
                               quan={item.quan}
                               id={item.id}
                               imgsrc={item.images}
                               title={item.title}
                               price={item.price}
                               subtototal={((item.price)*(item.quan)).toFixed(2)}
                               
                         />
                        })
                     }
                   
               </>
               
              
                  )}


                  <div className='flex justify-between item-center pt-10'>
              <div className='flex items-baseline gap-4'>
                <input 
                  type="text" 
                  placeholder='Coupon Code' 
                  className='border pl-6 pr-30 py-4 text-xl outline-none rounded-md' 
                />
                <button className='bg-primary text-white px-12 py-4 rounded-md cursor-pointer'>
                  Apply Coupon
                </button>
              </div>

              <div className='border-2 px-6 py-8 w-117.5 rounded-md'>
                <h3 className='text-[24px] font-medium pb-3'>Cart Total</h3>
                <div className='flex justify-between items-center pt-3 pb-3 border-b-2 border-gray-400'>
                  <span className='text-[18px]'>Subtotal:</span>
                  <span className='text-[18px]'>${subtotals.toFixed(2)}</span>
                </div>
                <div className='flex justify-between items-center pt-3 pb-3 border-b-2 border-gray-400'>
                  <span className='text-[18px]'>Shipping:</span>
                  <span className='text-[18px]'>Free</span>
                </div>
                <div className='flex justify-between items-center pt-3 pb-3'>
                  <span className='text-[18px]'>Total:</span>
                  <span className='text-[18px]'>${subtotals.toFixed(2)}</span>
                </div>
                <button className='flex items-center justify-center mx-auto mt-10 px-12 py-4 bg-primary rounded-sm text-white cursor-pointer'>
                  Process to checkout
                </button>
              </div>
            </div>
          
        



            </div>
        </div>
    )
}

export default Cart
