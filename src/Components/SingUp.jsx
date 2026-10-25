import React, { useState } from 'react'
import Container from './Container'
import imglogin from '../assets/Contactimg.png'
import {  toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";





const SingUp = () => {



    const notifyname = () => {
        toast.error('Plese enter Your Name', {
            position: "top-right",
            autoClose: 1100,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }



    const notifyemailnumber = () => {
        toast.error('Plese enter Your email or number', {
            position: "top-right",
            autoClose: 1100,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }


    const notifypassword = () => {
        toast.error('Plese enter Your Password', {
            position: "top-right",
            autoClose: 1100,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }


 const regexemailnmbernotify = () => {
toast.warn('plese enter email or valid nmber', {
position: "top-right",
autoClose: 1190,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }

     const regexpasswordnotify = () => {
toast.warn('plese enter password 4 carroctors upper case , Lower,Number,Specialcharactors.', {
position: "top-right",
autoClose: 1190,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }

const succsessLogin = ()=>{
toast.success('YOur Accaunt Create Successfuly', {
position: "top-center",
autoClose: 1190,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }


    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [nameerror, setnameerror] = useState('')
    const [emailerror, setemailerror] = useState('')
    const [passworderror, setpassworderror] = useState('')
    const[eyebtn,seteyebtn] = useState(false)
    let navigatesingup = useNavigate()
    //
    const singuphandale = (e) => {
        e.preventDefault()

        let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let numbersregex = /^(?:\+880|880|0)?1[3-9]\d{8}$/;
        let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

        let haserror = false;

        if (name == '') {
            setnameerror('plese enter name')
            notifyname()
            haserror = true;

        }
        if (email == "") {
            setemailerror("plese your email or number")
            notifyemailnumber()
        } else if (!emailregex.test(email) && !numbersregex.test(email)) {
            setemailerror('plese enter valid email or number')
            regexemailnmbernotify()
            haserror = true;

        }


        if (password == "") {
            setpassworderror("plese enter password")
            notifypassword()
            haserror = true;
        } else if (!passwordregex.test(password)) {
            setpassworderror('enter password 4 carroactors uppper, lower, special, and number.')
             regexpasswordnotify()
            haserror = true;
        }

        if (haserror) {
            return
        }

        setTimeout(()=>{
            navigatesingup('/navitgateignup')
        },1200)
        succsessLogin()

        setname('')
        setemail('')
        setpassword('')


    }

    return (

        <>

            {/* <ToastContainer /> */}
            <div className='py-7 lg:py-30'>
                <Container>

                    <div className=' flex items-center gap-5 lg:gap-15'>

                        <div className=''>
                            <img src={imglogin} alt="" />
                        </div>
                        <div className=''>

                            <h1 className='text-xl lg:text-2xl font-semibold text-black mb-3 lg:mb-6'>Create an account</h1>
                            <p className='text-sm font-medium text-black mb-6 lg:mb-12'>Enter your details below</p>

                            <div className=' border-b-2 border-gray-400 mb-12'>
                                <input onFocus={() => setnameerror("")} value={name} onChange={(e) => setname(e.target.value)} type="email" placeholder='Name' className=' outline-none' />
                                <p className='text-sm font-medium text-red-400'> {nameerror} </p>
                            </div>
                            <div className='mt-10 border-b-2 border-gray-400 '>
                                <input onFocus={() => setemailerror("")} value={email} onChange={(e) => setemail(e.target.value)} type="text" className=' outline-none' placeholder='email or phone number' />
                                <p className='text-sm font-medium text-red-400'> {emailerror} </p>
                            </div>
                            <div className=' relative mt-10 border-b-2 border-gray-400 '>
                                <input onFocus={() => setpassworderror('')} value={password} onChange={(e) => setpassword(e.target.value)} type={eyebtn ? 'text':'password'} className=' outline-none' placeholder='Password' />
                                <p className='text-sm font-medium text-red-400'> {passworderror} </p>
                                 {
                                    eyebtn ?
                                    <IoEyeOutline onClick={()=>seteyebtn(!eyebtn)} className=' text-2xl absolute top-0 right-0' />
                                    :  
                                    <IoEyeOffOutline onClick={()=>seteyebtn(!eyebtn)} className=' text-2xl absolute top-0 right-0' />
                                 }


                                 
                            </div>
                            <button onClick={singuphandale} className=' cursor-pointer py-4 px-10 lg:px-30 rounded-sm bg-primary text-white text-sm font-medium mt-10'>Create Accaunt</button>
                        </div>

                    </div>

                </Container>
            </div>
        </>
    )
}

export default SingUp
