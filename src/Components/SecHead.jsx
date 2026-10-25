import React from 'react'

const SecHead = ({headtitles,headtitletexttwo}) => {
  return (
    <div>
        <div className='flex gap-2 lg:gap-9 items-center'>
            <div className='bg-primary rounded-sm w-5 h-10'></div>
            <h4 className='text-primary'>{headtitles}</h4>
        </div>
            <h1 className='lg:text-3xl text-2xl font-semibold mt-2 lg:mt-7.5'>{headtitletexttwo}</h1>
      
    </div>
  )
}

export default SecHead
