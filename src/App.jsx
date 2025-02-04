import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import Manager from './components/Manager'
import Footer from './components/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='max-h-[80vh]'>
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App

// xl:w-[80%]