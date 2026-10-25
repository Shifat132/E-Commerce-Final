import React, { Children } from 'react'

const Btn = ({className,Children}) => {
  return (
    <div className={`bg-primary py-5  text-2xl font-medium text-white ${className} `}>
        {Children}
      
    </div>
  )
}

export default Btn
