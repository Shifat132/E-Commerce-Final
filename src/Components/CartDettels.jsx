import React from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FiChevronUp } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { decrementReducer, incrementReducer, removeReducer, subtoalReducer } from '../Slice/ProductSlice';
import { toast, Bounce, Slide } from 'react-toastify';




const CartDettels = ({ imgsrc, title, price, subtototal, id,quan }) => {




     const notifycart = ()=>{

          toast.info('Product removed from cart.!', {
position: "top-right",
autoClose: 2120,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});


     }



  const dispatch = useDispatch()

  const handaletodellate = () => {


    dispatch(removeReducer(id)),dispatch(subtoalReducer());

    notifycart()

  };

     const  Dispatch = useDispatch() 

      const handaleincrement = ()=> {

         Dispatch(incrementReducer(id)),Dispatch(subtoalReducer())

      }

        const dispatchdecrement = useDispatch()

      const handaledecrement = ()=>{

       dispatchdecrement(decrementReducer(id)),dispatchdecrement(subtoalReducer())

      }


  return (



    <div>
      
      <div className="container">

        <div className='flex justify-between items-center   shadow-sm py-6 px-10 mt-10 rounded-sm'>

          <div className='flex gap-5 w-[32%] items-center relative'>
            <span onClick={handaletodellate} className='bg-primary text-white text-lg cursor-pointer 
              font-semibold w-5 h-5 flex items-center justify-center rounded-full absolute -top-1 -left-1'>x</span>
            <img className='size-13.5' src={imgsrc} alt="" />
            <h1>{title}</h1>
          </div>

          <div className='w-[30%] '>
            <h1 className='w-10.25'>$({price})</h1>
          </div>

          <div className='w-[34%]'>
            <div className='border px-3 py-2 rounded-sm flex items-center gap-3 w-18  '>

              <p>{quan}</p>
              <div>
                <FaAngleUp className=' cursor-pointer' onClick={handaleincrement} />
                <FaAngleDown className=' cursor-pointer' onClick={handaledecrement} />

              </div>

            </div>
          </div>

          <h1>$({subtototal})</h1>

        </div>

      </div>

    </div>
  )
}

export default CartDettels
