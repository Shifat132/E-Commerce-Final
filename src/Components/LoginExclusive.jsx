import React, { useState } from 'react'
import Container from './Container'
import imglogin from '../assets/Contactimg.png'
import {  toast,  Bounce } from 'react-toastify';
import { IoMdEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";
import { useNavigate } from 'react-router';
// import { BiSolidErrorAlt } from "react-icons/bi";
// import { RiSimCardWarningFill } from "react-icons/ri";
// import { FaCheckCircle } from "react-icons/fa";





const LoginExclusive = () => {




  const notify = () => {   
       toast.error('plese enter email or number', {
      position: "top-right",
      autoClose: 996,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })  
  }

  const emailvalidregexnotify = ()=>{
    toast.warn('enter valid email or number BD', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  }



    const passwordvalidregexnotify = ()=>{
    toast.warn('enter password charctor upper lower ,special,and number 8 long', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  }



  const notifypassword = ()=>{

   toast.error('plese enter password', {
position: "top-right",
autoClose: 996,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }

  const Loginsuccesess = ()=>{
    toast.success('Your Login Succsessfully', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  }


  const [email, setemail] = useState('')
  const [emailerror, setemailerror] = useState('')
  const [password, setpassword] = useState('')
  const [passworderror, setpassworderror] = useState('')
  const [eyeshow,seteyeshow]=useState(false)

     const navigate = useNavigate();


  const Loginhandaleclick = (e) => {


    e.preventDefault()

    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let numbersregex = /^(?:\+880|880|0)?1[3-9]\d{8}$/;
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

     let haserror = false;

    if (email == '') {
      notify()
      haserror = true;

    } else if (!emailregex.test(email) && !numbersregex.test(email)) {
      setemailerror('plese enter your valid email or number')
       emailvalidregexnotify()
       haserror = true ;
    }

    if (password == '') {
      notifypassword()
      haserror = true;
    } else if (!passwordregex.test(password)) {
      setpassworderror('Your password  Ensures at least one lowercase, Uppercase ,one digit,special charactors and 8 long')
      passwordvalidregexnotify()  
      haserror = true ; 
    }
     if (haserror ) {
       return
     }

     Loginsuccesess()
     setTimeout(()=>{

       navigate('/nabigate')

     },1005)

    setemail('')
    setpassword('')
  }


  return (

    <>
 {/* <ToastContainer
        icon={({ type, theme }) => {
          switch (type) {
            
            case 'error':
              return <BiSolidErrorAlt className='text-4xl text-primary' />;
            case 'success':
              return <FaCheckCircle className=" text-4xl text-green-600" />;
            case 'warning':
              return <RiSimCardWarningFill className=" text-4xl text-primary" />;
            default:
              return null;
          }
        }}
      /> */}
      <div className=' py-7 lg:py-30'>
        <Container>

          <div className=' flex  gap-6 lg:gap-32.5 items-center'>

            <div className=''>
              <img src={imglogin} alt="" />
            </div>

            <div>

              <h1 className='lg:text-2xl text-xl font-semibold text-black mt-1 lg:mt-2.5'>Log in to Exclusive</h1>
              <p className='text-sm font-medium text-gray-400 mt-2 lg:mt-4'>Enter your details below</p>
              <div className='border-b-2 mt-6 lg:mt-12 border-gray-400 '>
                <input value={email} className=' outline-none' onFocus={() => setemailerror('')} onChange={(e) => setemail(e.target.value)} type="text" placeholder='Email or phone number' />
                <p className='text-sm font-medium text-primary'> {emailerror} </p>
              </div>

              <div className='border-b-2  mt-10 mb-10 relative border-gray-400'>
                <input className=' outline-none ' value={password} onFocus={() => setpassworderror('')} onChange={(e) => setpassword(e.target.value)} type={eyeshow? 'text' : 'password'}   placeholder='Password' />
                   { eyeshow ?
                <IoMdEye onClick={()=>seteyeshow(!eyeshow)} className=' absolute text-2xl  top-0 -right-2' />
                :
                <IoEyeOffSharp onClick={()=>seteyeshow(!eyeshow)} className=' absolute text-2xl   top-0 -right-1'  />
                   }
                
                <p className='text-sm font-medium text-primary'> {passworderror} </p>
              </div>
            
              <button onClick={Loginhandaleclick} className='cursor-pointer bg-primary text-white py-4 px-12 rounded-sm'>Login</button>
            </div>

          </div>

        </Container>

      </div>
    </>
  )
}

export default LoginExclusive
