"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function page({params}) {

  const { id } = params;

    const [data, setdata] = useState([])
    const getusers = async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        const invok = response.data
        setdata(invok)
      }

        useEffect(() => {
        getusers()
      }, [])
  return (
    <>
    <div className='m-6 text-2xl p-2'>
      {JSON.stringify(data)}
    </div>
    </>
  )
}

export default page
   



