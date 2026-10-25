import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


const Rootlayout = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Outlet/>
        <Footer/>
  
    </div>
  )
}

export default Rootlayout
