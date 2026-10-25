import React from 'react'
import { useLocation } from 'react-router'

const BreadCump = () => {


const location = useLocation()

  let PathName = location.pathname.split('/')


  return (
    <div>

        <div className='flex gap-2 mt- items-center'>
                    <h1>Home</h1>
                    <h3>/</h3>
                    <h2> {PathName} </h2>
                </div>
    </div>
  )
}

export default BreadCump
