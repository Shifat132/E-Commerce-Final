import React from 'react'
import { Rate } from 'antd';
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CartReducer, heartReducer, subtoalReducer } from '../Slice/ProductSlice';
import { toast, Slide,  } from 'react-toastify';
import { FaHeart } from "react-icons/fa6";




const CustmPcard = ({ parsents, imgsrc, produtname, ratemathmathics, price, discauntprice, className, classname, flexess, rating, id, productDettels,heartdettes }) => {

    
    
    
    
    
    const notify = (matchitemalredyadded) => {
        
        if(!matchitemalredyadded){
            
               toast.success('SuccsessfullY Product added to your cart!', {
                   position: "top-right",
                   autoClose: 2090,
                   hideProgressBar: false,
                   closeOnClick: false,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "light",
                   transition: Slide,
                });
                return;
            }
            
            toast.warn('Product is already in your cart!!', {
                position: "top-right",
                autoClose: 2190,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
        }
        



 
    const notifywish = (matchitemwish) => {
        
        if(!matchitemwish){
            
               toast.success('Saved to your Wishlist!', {
                   position: "top-right",
                   autoClose: 2090,
                   hideProgressBar: false,
                   closeOnClick: false,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "light",
                   transition: Slide,
                });
                return;
            }
            
            toast.warn('Product is already in your Wishlist!', {
                position: "top-right",
                autoClose: 2190,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
        }


        
        
        
        
    
        
        
        const navigate = useNavigate()
        
        const productdettels = () => {
            
            navigate(`/productdettels/${id}`)
        }
        
        const Dispatch = useDispatch()
        
        
        
        
               const datas = useSelector(state => state.products.cart)

    const handaleaddtocart = () => {

           let matchitem = datas.find((item)=>item.id === id)

           matchitem ? notify(true) :(
            
               Dispatch(CartReducer({...productDettels, quan : 1})),Dispatch(subtoalReducer()),

               notify(false)
           )   
    }




          const wishdata = useSelector(state => state.products. heart)

     const heartdispatch = useDispatch()


   
      const isliked = wishdata.some((item)=>item.id === id)

    const handaletoheart = ()=>{

        let matchitemwish = wishdata.find((item)=>item.id === id)

        matchitemwish ? notifywish(true):(
        heartdispatch(heartReducer(heartdettes)),
        notifywish(false)
        )
       

    }
       
   



    return (
        <>

            <div className='w-full max-w-70 mx-auto group'>
                {/* <ToastContainer/> */}
                <div className=' relative bg-[#F5F5F5] pt-11 pl-0  overflow-hidden h-62.5'>
                    <span  className=' absolute top-3 left-3   py-2 px-3 text-xs  rounded-sm bg-primary text-white'>-{parsents}%</span>
                    <img onClick={productdettels} src={imgsrc} alt="" className=' max-h-full mx-auto ' />
                     
                    <div className=' absolute top-3 right-3  space-y-2'>
                        <div onClick={handaletoheart} className='  cursor-pointer bg-white w-8.5 h-8.5 rounded-full flex items-center justify-center'>
                        {
                           isliked ? (
                            <FaHeart className='text-red-500' />

                           )
                           :(<CiHeart className='text-black' />
                             )
                        }
                        </div>
                        <div className='w-8.5 h-8.5 rounded-full flex items-center justify-center bg-white'>
                            <LuEye className='' />
                        </div>
                    </div>
                    <button onClick={handaleaddtocart} className='cursor-pointer absolute -bottom-11 group-hover:bottom-0 duration-200 ease-linear py-2 px-4 w-full bg-black text-white'>Add Cart</button>
                </div>


                <h1 className='mt-4 mb-2'>{produtname}</h1>
                <div className={`${flexess} `}>

                    <div className='flex gap-2 '>

                        <h4 className='text-primary font-medium'>$ {price}</h4>
                        <h2 className='text-gray-300 line-through font-medium '>$ {discauntprice}</h2>
                    </div>
                    <div className='flex gap-2.5'>
                        <Rate allowHalf defaultValue={4.76} value={rating} />
                        <h1 className='font-semibold text-sm text-gray-400'>({ratemathmathics})</h1>
                    </div>
                </div>
                <div className='flex gap-2 mt-2'>
                    <h1 className={` ${className} rounded-full `}></h1>
                    <h1 className={` rounded-full ${classname}`}></h1>
                </div>

            </div>


        </>
    )
}

export default CustmPcard
