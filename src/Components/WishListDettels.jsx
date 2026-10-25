import React from 'react'
import Container from './Container'
import blackjacktes from '../assets/blackjacket.png'
import { CiTrash } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { wishremoveReducer } from '../Slice/ProductSlice';
import { toast, Slide, } from 'react-toastify';
const WishListDettels = ({ discauntparsent, discauntprice, imgsrc, title, price, id }) => {



  const notifywish = () => {

    toast.info('Product removed from Wishlist.', {
      position: "top-right",
      autoClose: 2120,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  }



  const dispatchwish = useDispatch()

  const handaleremovewishlish = () => {

    dispatchwish(wishremoveReducer(id));
            notifywish()

  }


  return (
    <div className='py-10'>

      <Container>

        <div className='w-full max-w-70  rounded-sm group'>
          <div className='bg-[#F5F5F5] relative pt-11 pl-0 pb-11 overflow-hidden'>

            <span className='  bg-primary text-white py-1 px-3 rounded-sm absolute top-2 left-2'>{discauntparsent}</span>

            <img src={imgsrc} alt="" className='mx-auto' />

            <div onClick={handaleremovewishlish} className='size-10 absolute top-2 right-2 bg-white rounded-full flex items-center justify-center'>
              <CiTrash className='text-3xl' />

            </div>

            <button className='bg-black text-white py-2 px-8 rounded-sm absolute -bottom-12 group-hover:bottom-0 duration-300  ease-linear w-full '>add to cart</button>

          </div>

          <h1 className='text-sm font-normal text-black mt-4'>{title}</h1>
          <div className='flex gap-3 items-center mt-2'>
            <h1>{price}</h1>
            <h1>{discauntprice}</h1>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default WishListDettels
