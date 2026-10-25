import React from 'react'
import Container from '../Components/Container'
import WishListDettels from '../Components/WishListDettels'
import { useSelector } from 'react-redux'

const WishList = () => {

      const datahearts = useSelector(state=>state.products.heart)
      

  return (
    <div className='py-20'>
      <Container>


          <h1 className='text-3xl font-bold font-inter text-gray-900 mb-8 text-center'>Shopping WishList</h1>

        <div className='flex justify-between items-center'>


         <h1 className='text-lg font-semibold '>WhisList</h1>
         <button className='text-lg font-semibold '>Move All To Bag</button>
        </div>

        {  
          datahearts.length === 0 ? (   <div className='text-center mt-8 py-20 bg-white rounded-2xl shadow-sm border border-gray-100'>
                    <h2 className='text-2xl font-semibold text-gray-600'>Your WishList is empty</h2>
                    <p className='text-gray-400 mt-2'>Looks like you haven't added anything yet.</p>
                </div>) : (

        <>
      <div className='flex flex-wrap gap-10 w-full mx-auto'>
        {
            datahearts.map((item)=>{

                return <WishListDettels
                id={item.id}
                title={item.title}
                imgsrc={item.thumbnail}
                discauntparsent={item.discountPercentage}
                price={item.price}
                discauntprice={(item.price-(item.price *(item.discountPercentage/100))).toFixed(2)}
                 
                
                />

            })
        }
        </div>
        </>

        )}
        
      </Container>
    </div>
  )
}

export default WishList
