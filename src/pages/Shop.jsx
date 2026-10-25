import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import CustmPcard from '../Components/CustmPcard';
import Item from 'antd/es/list/Item';
import BreadCump from '../Components/BreadCump';
import PaginaTion from '../Components/PaginaTion';
import Skilietoon from '../Components/Skilietoon';
import ReactPaginateModule from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
const ReactPaginate = ReactPaginateModule?.default ?? ReactPaginateModule;
import axios from 'axios';
import { SetReducer } from '../Slice/ProductSlice';


const Shop = () => {



    const [products,setproducts]=useState([])
    const [show,setshow]=useState(6)
    const [loading,setloading]=useState(true)


      
     const Dispatch = useDispatch()
     
         const data = useSelector(state => state.products.value)

              const Allproducts = async ()=>{
               let data = await  axios.get('https://dummyjson.com/products')
               Dispatch(SetReducer(data.data.products))
               setloading(false)
               setproducts(data.data.products)
              }
 


                 useEffect(()=>{
                    Allproducts()
                 },[])


  
    // useEffect(() => {

    //     fetch('https://dummyjson.com/products')
    //         .then(res => res.json())
    //         .then((data)=>Dispatch(ProductReducer(data.products)))
    //         // .then((data)=>setproducts(data.products))
    //         .then(()=>setloading(false))
    // }, [])


            const unikCategory = [...new Set(products.map((item)=>item.category))]

               const handaleategoryes = (item)=>{

                    let categorybycategory = products.filter((items)=>items.category == item)
                     Dispatch(SetReducer(categorybycategory))
                 
               }

              

    return (
        <div className='py-25'>
            <Container>

                <div className='flex gap-2 mt- items-center'>
                    <BreadCump />
                </div>

                <div className='flex justify-between   items-center mt-12.5'>
                    <h1>Shop by Category</h1>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-lg font-bold'>Show :</h1>
                        <div>
                            <select onChange={(e)=>setshow(e.target.value)} className='border border-gray-300 py-1 px-8' name="" id="">
                                <option value="6">6</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='flex   gap-8'>

                    <div className='w-full lg:w-[22%] xl:w-[20%] text-center pr-0 lg:pr-5'>

                        <ul className='lg:py-20 py-7 space-y-4'>

                           <h1 onClick={()=>(Dispatch(SetReducer((products))))}  className='text-lg font-semibold cursor-pointer text-black'>All Products</h1>

                         {
                           unikCategory.map((item)=>{
                                 return <li  onClick={()=>handaleategoryes(item)} className='text-lg font-semibold cursor-pointer'>{item}</li>
                           })
                         }
                            

                        </ul>

                    </div>

                    <div className='w-[80%]'>

                        <div className='w-full'>

                       {

                        loading ?
                        <div className='flex flex-col lg:flex-wrap gap-4 lg:gap-10'>
                        <Skilietoon/>
                        <Skilietoon/>
                        <Skilietoon/>
                        <Skilietoon/>
                        <Skilietoon/>
                        </div>
                        
                        :
                       <PaginaTion itemsPerPage={show}  />
                       }



                        </div>



                    </div>

                </div>



            </Container>

        </div>
    )
}

export default Shop
