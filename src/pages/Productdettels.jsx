import React, { useEffect, useState } from 'react'
import BreadCump from '../Components/BreadCump'
import game2 from '../assets/img1.png'
import game1 from '../assets/image 63.png'
import { Rate } from 'antd'
import { FaHeart } from "react-icons/fa";
import axios from 'axios'
import { useParams } from 'react-router'





const Productdettels = () => {
    const [count, setcount] = useState(0)

      const [product,setproduct]=useState([])
      const [images,setimages]=useState([])

       const {id} = useParams()
   
       
        
        const Allproducts = async ()=>{

               let data = await  axios.get(`https://dummyjson.com/products/${id}`)
              
               setproduct(data.data)
               setimages(data.data.images)
            
        }

           


                 useEffect(()=>{
                    Allproducts()
                 },[])        

             









    return (
        <div className=' pt-20 py-40'>

            <div className="container">

                <BreadCump />


                <div className='mt-20 flex justify-between gap-18 '>


                    <div className=' flex  gap-7.5'>
                        <div className='space-y-7 '>

                          {
                            images.map((item)=><img className='w-34.5 h-42.5 bg-[#F5F5F5] rounded-sm' src={item} alt="" />)
                          }

                        </div>

                        <div className='pt-3.5 pb-32.75 pr-6.75 pl-6.76 bg-[#F5F5F5] rounded-sm flex items-center justify-center'>

                            <img src={product.thumbnail} alt="" />
                        </div>
                    </div>



                    <div className='w-100'>
                        <h2 className='text-2xl font-semibold leading-6'>{product.title}</h2>
                        <div className='flex gap-3 items-center mb-3 mt-3'>
                            <Rate allowHalf  value={product.rating}/>
                            <h3>({product?.reviews && product.reviews.length})</h3>
                            <h2>{product.availabilityStatus}</h2>
                        </div>
                        <h1>$ {product.price}</h1>
                        <p className='text-[16px] font-normal text-black mt-4 border-b pb-4'>{product.description}</p>

                        <div className='flex gap-3 mt-4'>
                            <h1 className='text-[20px] leading-5 text-base font-normal'>Colours:</h1>
                            <span className='w-5 h-5 rounded-full bg-[#A0BCE0] border-2 border-black'></span>
                            <span className='w-5 h-5 rounded-full bg-primary border border-white'></span>
                        </div>

                        <div className='mt-7.5 flex gap-3 items-center'>

                            <h1 className='text-[20px] leading-5 text-base font-normal'>Size:</h1>
                            <div className=' group hover:bg-primary py-1.5 px-1.75 w-8 h-8 bg-[#00000039] rounded-sm flex items-center justify-center'>
                                <p className=' group-hover:text-white'>Xs</p>
                            </div>

                            <div className='py-1.5 px-1.75 w-8 h-8 bg-[#00000039] rounded-sm flex items-center justify-center'>
                                <p>M</p>
                            </div>

                            <div className='py-1.5 px-1.75 w-8 h-8 bg-[#00000039] rounded-sm flex items-center justify-center'>
                                <p>L</p>
                            </div>


                            <div className='py-1.5 px-1.75 w-8 h-8 bg-[#00000039] rounded-sm flex items-center justify-center'>
                                <p>XL</p>
                            </div>


                            <div className='py-1.5 px-1.75 w-8 h-8 bg-[#00000039] rounded-sm flex items-center justify-center'>
                                <p>XXL</p>
                            </div>


                        </div>


                        <div className='flex gap-3  items-center mt-4'>

                            <div className='w-40 h-11 bg-white border border-[#0000002e]  flex'>

                                <div className='w-10 h-11 flex items-center justify-center border-r'>
                                    <span onClick={() => setcount(count > 0 ? count - 1 : 0)} className=' cursor-pointer text-3xl leading-6 '>-</span>

                                </div>

                                <div className=' border-r w-20 h-11 flex items-center justify-center'>
                                    <span className='text-lg leading-6 '>{count}</span>

                                </div>

                                <div className='w-10 h-11 flex items-center justify-center '>
                                    <span onClick={() => setcount(count + 1)} className=' cursor-pointer text-3xl leading-6 '>+</span>

                                </div>

                            </div>

                            <button className=' cursor-pointer h-11 py-2.5 px-12 bg-primary rounded-sm text-lg font-normal'>Buy Now</button>

                            <div className='w-11 h-11 flex rounded-sm bg-[#00000039] justify-center items-center'>
                                <FaHeart />
                            </div>


                        </div>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default Productdettels
