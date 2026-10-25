import React from 'react'
import Container from './Container'
import footer_img from '../assets/footer_img.png'
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='mt-35.75 bg-black text-white' >
      <Container>
        <div>
          <div className='pt-20 flex gap-21.75'>
            <div className='w-54.25'>
              <ul className='space-y-6'>
                <li className='font-bold font-inter text-2xl'>Exclusive</li>
                <li className='font-medium text-xl'>Subscribe</li>
                <li className='text-[16px]'>Get 10% off your first order</li>
              </ul>
              <div className='flex items-center py-3 pl-4  border relative mt-4 '>
                <input className='text-[16px] w-32.5' type="text" placeholder='Enter your email' />
                <VscSend className='text-white absolute top-4 right-3' />
              </div>
            </div>
            <div className='w-43.75'>
              <h3 className='font-medium text-xl mb-6'>Support</h3>
              <ul className='space-y-4 text-[16px]'>
                <li >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
              </ul>
            </div>
            <div className='w-30.75'>
              <h3 className='font-medium text-xl mb-6'>Account</h3>
              <ul className='space-y-4 text-[16px]'>
                <li >My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className='w-27.25'>
              <h3 className='font-medium text-xl mb-6'>Quick Link</h3>
              <ul className='space-y-4 text-[16px]'>
                <li >Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='w-49.5'>
              <h3 className='font-medium text-xl mb-6'>Download App</h3>
              <p className='text-[12px] font-medium'>Save $3 with App New User Only</p>
              <div className='mt-2 mb-6'>
                <img src={footer_img} alt="" />
              </div>
              <div className='w-42 flex gap-6'>
                <FaFacebookF />
                <CiTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className='w-84.25 text-[16px] flex gap-1.5 items-center mx-auto pt-19 pb-6'>
            <RiCopyrightLine />
            <p>Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
