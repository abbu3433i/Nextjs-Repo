"use client"

//-----------------Usestate and componenet--------------
// import React, { useState } from 'react'
// import Componenet from './Components/Componenet'

// function page() {
//   const [first, setfirst] = useState("abhisek")
//   return (
//     <>
//     <div className='text-2xl font-semibold m-4 '>Page</div>

//     <Componenet user ={first}/> 
//     </>
//   )
// }

// export default page



//---------------------------Stop reloading page [Routing]-------------------------
// import React from 'react'
// import Header from './Head/Header'

// function page() {
//   return (
//     <>
//     <Header/>
//     <div>This is main page</div>
//     </>
//   )
// }

// export default page



// -----------------------------------Axios-----------------------------------------------
import React, { useState } from 'react'
import axios from 'axios'

function page() {
const [image, setimage] = useState([]) //--image data ko print karta he or setimg data ko set karne ka kaam karta he

  const Imagehandler = async ()=>{
   try {
    const response = await axios.get("https://picsum.photos/v2/list")
    const data = response.data

    setimage(data); //setimg naam ka ek empty arr he usme set kar do sara data
    
   } 
   catch (error) {
    console.log("Error detecting");
   }
   
  }
  return (
    <>
    <button className='px-2 py-2 bg-green-600 text-white' onClick={Imagehandler}>Get Images</button>

    <div className='py-10'>
  
     {image.map((elem,i)=>{  //-----------------img se data access karte hen to jo bhi saara data he uspe map iterate karega or har data pe jake imgurl show karba dega 
      // return <h1 key={i}>{elem.author}</h1>
      return <img src={elem.download_url}
      width={300}
      height={300}
      className='m-10 rounded inline-block' />
     })}

    </div>
    </>
  )
}

export default page
