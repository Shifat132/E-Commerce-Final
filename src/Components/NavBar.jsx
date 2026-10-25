import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import logo from '../assets/Logo.png'
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { FaBarsStaggered } from "react-icons/fa6";
import axios from 'axios';
import { clearsearch } from '../Slice/ProductSlice';


const NavBar = () => {


 
        const selector = useSelector(state=>state.products.cart)

        const dataheart = useSelector(state=>state.products.heart)


        // const Alldata = useSelector(state=>state.products.value)

       

    const navigate = useNavigate()

    const wishnavigate = useNavigate()


    const [show ,setshow]=useState(false)

     const [search,setsearch]=useState('')
     const [filteritem,setfilteritem]=useState([]) 
     

      const handalesearch = (e)=>{

         let value  = e.target.value;
         setsearch(value)
         if (value === '') {
          setfilteritem([])
          
         }else{

           const filterdata =  data.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()))
           setfilteritem(filterdata)
         }   
      }




      
    const [products,setproducts]=useState([])
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


                 const handaleseacrhdettels = (item)=>{

                  if (item && item.id) {
                    Dispatch(clearsearch());
                    navigate(`/productdettels/${item.id}`)
                    
                  }else{
                    setfilteritem([])
                  }

                 }

           



  return (
    <div className=' border-b relative'>
      
      <div className='container mx-auto px-3 lg:px-0'>
       
       <div className=' flex justify-between py-7 '>
        <div>
          <img src={logo} alt="" />
        </div>

        <div className={` ${show ? 'left-0' : '-left-full'} z-10 absolute lg:static  duration-300 ease-linear   lg:h-auto  -left-100 top-20 flex space-y-5   flex-col lg:flex-row justify-center lg:justify-between items-center lg:bg-transparent   bg-amber-300 lg:text-black w-[80%] lg:w-[80%]  `}>

           <ul className=' pl-0 lg:pl-14 lg:flex-row flex-col text-black flex gap-y-5 gap-x-12 items-center  text-[16px] font-normal '>
            <li className='cursor-pointer'>

          <NavLink to="/navitgatehome" end>
        Home
      </NavLink>
            </li>
            <li className='cursor-pointer'>

          <NavLink to="/navigatecontect" end>
         Contect
      </NavLink>
            </li>
            <li className='cursor-pointer'>
                      <NavLink to="/navitgateabout" end>
         About
      </NavLink>
            </li>
            <li className='cursor-pointer'>
               <NavLink to="/signuppart" end>
         Sign Up
      </NavLink>
            </li>
           </ul>
           <div className=' lg:flex-row flex-col text-black  gap-y-5 gap-x-12 flex justify-between items-center gap-7.5 cursor-pointer'>
            <div className=' relative pl-5 py-1.5 pr-3 bg-[#82828218]'>
           <input value={search} onChange={handalesearch} type="text" className='pr-17.5 cursor-pointer outline-none border border-gray-300' placeholder='What are you looking for? ' />
             <IoIosSearch className=' absolute top-1 right-3 text-[30px]'/>

             <ul className='w-full bg-white text-black top-6   absolute'>
              {
                filteritem.map((item)=>{
                  
                  return <li key={item.id} onClick={ ()=> handaleseacrhdettels (item) } className=' border  p-4 flex items-center gap-5'>{(item.title).slice(1,17)} <img className='w-13 h-13 ' src={item.thumbnail} alt="" /> </li>
                })
              }
             </ul>
             
            </div>

            <div className='flex gap-4 '>
              <div onClick={()=>wishnavigate('/wishlistdettels')} className='relative'>
              <FaRegHeart className='text-[30px]' />
               <div className='w-5 h-5 rounded-full  flex items-center justify-center absolute -top-1 -right-2
                 text-sm font-semibold  bg-primary  text-white'>{dataheart.length}</div>
              </div>
              <div onClick={()=>navigate('/cartdettels')}  className=' relative'>
              <IoCartOutline  className='text-[32px]'/>
              <div className=' absolute -top-2 -right-2 size-6 rounded-full bg-primary text-white 
              text-xs flex items-center justify-center'> {selector.length}
              </div>
              </div>


            </div>
           </div>

        </div>

        <div>
          <FaBarsStaggered onClick={()=>setshow(!show)} className='text-xl lg:hidden static' />

        </div>

       </div>

      </div>

    </div>
  )
}

export default NavBar
