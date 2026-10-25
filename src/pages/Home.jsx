
import React from 'react'
import Banner from '../Components/Banner'
import CountDown from '../Components/CountDown'
import ProductCard from '../Components/ProductCard'
import CataGories from '../Components/CataGories'
import CustmPcard from '../Components/CustmPcard'
import SellinghProducts from '../Components/SellinghProducts'
import ExploreProducts from '../Components/ExploreProducts'
import NewArival from '../Components/NewArival'
import LoginExclusive from '../Components/LoginExclusive'
import SingUp from '../Components/SingUp'
import CustomerService from '../Components/CustomerService'
// import Shop from './Shop'
import SounBox from '../Components/SounBox'



 

const Home = () => {
  return (
    <div>
       
        <Banner/>
         {/* <Shop/> */}
    
        <CountDown/>
         <ProductCard/>
         <CataGories/>
          <SellinghProducts/>
          <SounBox/>
          <ExploreProducts/>
          <NewArival/>
          <CustomerService/>
    </div>
  )
}

export default Home
