import React from 'react'
//------------props drilling
function Componenet(props) {
  return (
    <>
    <h1>{props.user}</h1>

    <div className='bg-green-600 flex items-center justify-between px-6 text-2xl'>Componenet
    <div className='flex gap-4'>
        <h3>About</h3>
        <h3>home</h3>
        <h3>section</h3>
    </div>
    </div>
    </>
  )
}

export default Componenet