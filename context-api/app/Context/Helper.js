"use client"
import React, { Children, createContext } from 'react'
export const MyContext = createContext()  //-----this is how we create context api

function Helper({Children}) {
    const username = "abhisehk react developer"

    //------with the help of mycontext.provider we share this data to all component to use it
  return (
    <div> 
        <MyContext.Provider value={username}>  
            {Children}       
        </MyContext.Provider>
    </div>
  )
}

export default Helper