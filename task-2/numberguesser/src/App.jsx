import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div className='bg-[rgb(24,24,24)] w-screen h-screen flex justify-around items-center flex-col'>
      <div className="navbar w-screen h-[7%] bg-purple-900 fixed top-0 flex justify-center items-center">
          <h1 className='text-white text-5xl'>NumberGuesser</h1>
      </div>
      <div className="lives-bar w-[45%] h-[10%] bg-[rgb(48,48,48)] -translate-y-70 flex justify-around items-center">
          <div className='h-[80%] w-[8%] bg-red-500'></div>
          <div className='h-[80%] w-[8%] bg-red-500'></div>
          <div className='h-[80%] w-[8%] bg-red-500'></div>
          <div className='h-[80%] w-[8%] bg-red-500'></div>
          <div className='h-[80%] w-[8%] bg-red-500'></div>
          <div className='h-[80%] w-[8%] bg-red-500'></div>
          <div className='h-[80%] w-[8%] bg-red-500'></div>
      </div>
    </div>
  )
}

export default App
