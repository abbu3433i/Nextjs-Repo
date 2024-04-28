"use client"
import React from 'react'

import { ToastContainer, toast } from 'react-toastify'; //-----import is must
import 'react-toastify/dist/ReactToastify.css';
  

function page() {

  const toastify = ()=>{
//  toast("Login successful")
toast.success('🦄 Wow so easy!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });

  }
  return (
    <>
    <button onClick={toastify} className='bg-green-600 p-3 m-4 rounded text-bold text-white text-2xl'>Login</button>
    <ToastContainer />
    </>
  )
}

export default page