import React from 'react'
import { NavLink } from 'react-router'


const Header = () => {
  return (
    <div className='bg-black py-3 '>

      <div className='container lg:px-0 px-3'>

        <div className=' flex justify-between text-white'>
          <div></div>
          <p className=' text-xs lg:text-sm '>Summer Sale For All Swim Suits And Free Express
             Delivery - OFF 50%! <span className='border-b-2 ml-3  '>
              
          <NavLink to="/navitgateshopNow" end>
         ShopNow
      </NavLink>
              
              </span> </p>
           
           <select className='bg-black text-white cursor-pointer'>
  <option value="volvo">English</option>
  <option value="saab">Spanish</option>
  <option value="mercedes" >Portugish</option>
  <option value="audi">Arabic</option>
    <option value="mercedes">Portugish</option>
  <option value="audi">Arabic</option>
</select>
           

        </div>

      </div>
      
    </div>
  )
}

export default Header
