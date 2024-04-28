"use client"
import { MyContext } from './Context/Helper'   //----------ye dono ko yaad se import kar lena 
import React, { useContext } from 'react'   //------------

function page(val) {

  const user = useContext(MyContext)
  console.log(user);
  console.log("hello");
  
  return (
    <div>Homepage {user}</div>
  )
}

export default page