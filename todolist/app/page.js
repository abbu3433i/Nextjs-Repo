"use client"
import React, { useState } from 'react'
 
export default function page() {
  var [title,settitle] = useState("")
  var [desc,setdesc] = useState("")

  const [maintask,setmaintask] = useState([])

  //------------------------------------------------------------------
  const submitHandler = (e)=>{
    e.preventDefault(); //**********ye page reload hone se rokega */
    setmaintask([...maintask,{title,desc}])  //-----*/=> "..." mtlb purani value delete na hon uske next me hi new values store ho jayen
    // console.log(title);
    // console.log(desc);
    settitle("") 
    setdesc("")
  }
//-------------------------------------------------------------------
  const deleteHandler = (i)=>{
   let copytask = [...maintask];
   copytask.splice(i,1)  //----=>jispe click hoga usko hide kar dega remaining values copytask me show hongin or unko setmaintask ke andar store karba do
   setmaintask(copytask)
  }
//------------------------------------------------------------------
  let rendertask = <h2>No task available</h2>;

 if (maintask.length>0) {
   rendertask = maintask.map((t,i)=>{
     return <div key={i} className='flex justify-between mb-5 w-2/3'> 
       <h5 className=' text-2xl font-semibold'>{t.title}</h5>
       <h6 className=' text-xl'>{t.desc}</h6>
       
       <button 
       onClick={
        ()=>{  
        deleteHandler(i);  //--------deletehandler bina click karne pe bhi direct chal jayega isliye isko ()=> ke andar likha he taki click karne pe hi chale
       }}
       className='bg-red-400 text-white rounded px-4 py-2 font-bold'>Delete</button>
     </div>
   }) 
 }

//----------------------------------------------------------------------
  return (
    <>
    <div className=' bg-zinc-800 text-white p-10 text-3xl
    text-bold text-center'>My todo list</div>

    <form onSubmit={submitHandler}>
    <input
    type='text'
    className=' m-5 border-zinc-800 border-2 px-2 py-4'
    placeholder='Enter Task here'
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}
    />

    <input
    type='text'
    className=' m-5 border-zinc-800 border-2 px-2 py-4'
    placeholder='Add description'
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    />
    <button className='bg-black text-white ml-6 px-4 py-4 rounded'>Add Task</button>
    </form>
  
    <hr/>

    <div className='p-8 bg-slate-300'>
      {rendertask}
    </div>
    </>
  )
}
