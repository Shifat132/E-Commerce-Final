import React from 'react'

const ElectroNics = ({children,titleelectric}) => {
  return (
    <div className=' group'>

        <div className=' group-hover:bg-primary duration-300 ease-linear border border-gray-300 py-8.5 mt-15 w-42.5 pt-[32px] pr-8 pl-8'>
                         {children}
                        <h1 className='text-sm font-normal block text-center mt-5'>{titleelectric}</h1>
            </div>

      
    </div>
  )
}

export default ElectroNics
