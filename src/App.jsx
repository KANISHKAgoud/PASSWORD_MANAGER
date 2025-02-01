import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='bg-[#2E236C] h-[88vh] pt-2 text-white'>
        {/* AFTER THE NAVBAR  */}
        <div className='text-center'>
          <div className='text-4xl font-extrabold'>
            LockVault
          </div>
          <div className='py-3'>
            Your own password manager
          </div>
        </div>


        <div className='bg-[#433D8B] mx-auto w-[95%] sm:w-[90%] h-[72vh] text-black'>

          <input className='mt-7 bg-[#C8ACD6] w-[90%] mx-10 rounded-3xl pl-3' type="text" placeholder='enter website url' />
          <div className='flex justify-between mx-10 mt-6'>
            <input className='bg-[#C8ACD6] w-[75%] rounded-3xl pl-3' type="text" placeholder='enter username' />
            <input className='bg-[#C8ACD6] w-[20%] rounded-3xl pl-3' type="password" placeholder='enter password' />
          </div>

        </div>
      </div>
    </>
  )
}

export default App

// xl:w-[80%]