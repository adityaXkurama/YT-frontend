import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Video from './pages/Video'
import Profile from './pages/Profile'
import Video_upload from './pages/Video_upload'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)
  const [sideNavbar,setSideNavbarFunc] = useState(true)
  const videoRef = useRef()

  return (
    <>
      <div className=" h-[100%] pb-20 bg-black">
        <Navbar sideNavbar={sideNavbar} setSideNavbarFunc={setSideNavbarFunc}/>
        <Routes>
          <Route path='/' element={<Home sideNavbar={sideNavbar}/>}/>
          <Route path='/watch/:id' element={<Video videoRef={videoRef}/>}/>
          <Route path='/users/:id' element={<Profile sideNavbar={sideNavbar} />}/>
          <Route path='/:id/upload' element={<Video_upload  />}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App
