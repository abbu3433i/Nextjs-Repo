"use client"

//-------------------------------Advanced react topics-----------------------------------------------------

//1.--------Two way binding--------------

// import React, { useState } from 'react'

// function page() {
  //   const [username, setusername] = useState("")
  //   return (
    //     <>
    //     <h1 className='m-4'>Enter something here:</h1>
    //     <form>
    //       <input 
    //       type='text'
    //       className='border-2 border-zinc-800 px-4 py-2 rounded'
    //       value={username}
    //       onChange={(elem)=>{
      //         setusername(elem.target.value);
      //         console.log(username);
      //       }}
      //       />
      //     </form>
      //     </>
      //   )
      // }
      
      // export default page
      
      
      // 2.---------------Dynamic Routing---------------------
      import React, { useEffect, useState } from 'react'
      import axios from 'axios'
      
function page() {

  const [data, setdata] = useState([])

  const getusers = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/")
    const invok = response.data
    setdata(invok)
  }
//-----------useEffect method bane banaye fn ko automaticlly call karne ka kaam karti he
  useEffect(() => {
    getusers()
  }, [])
  
  return (
    <>
    <button className='bg-green-600 px-4 py-2 rounded m-4 text-white'
    onClick={getusers}>Get Image</button>
    <div className='bg-pink-200 py-4 rounded px-6'>
      {
       data.map((elem,i)=>{
        return <li key={i} className='py-2'>{elem.name}.......<a href={`/${elem.id}`}>Explore</a></li>
       })
      }
    </div>
    </>
  )
}

export default page
