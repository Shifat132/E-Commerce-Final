import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router'
import { router, } from './Router.js'
import { Provider } from 'react-redux'
import Store from './Store.js'
import { ToastContainer } from 'react-toastify'
import { BiSolidErrorAlt } from "react-icons/bi";
import { RiSimCardWarningFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={Store}>
     <RouterProvider router={router} />
      <ToastContainer
        icon={({ type, theme }) => {
          switch (type) {
             case 'info':
              return   <CiTrash className='text-4xl text-primary' />;
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
      />
    </Provider>
  </StrictMode>,
)
