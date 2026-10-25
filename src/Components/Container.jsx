import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="container lg:px-0 px-3">
      {children}
    </div>
  )
}

export default Container
