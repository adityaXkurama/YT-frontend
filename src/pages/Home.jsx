import React from 'react'
import SideNavbar from '../components/SideNavbar'
import HomePage from '../components/HomePage'

const Home = ({sideNavbar}) => {
  return (
    <div className='flex w-full'>
      <div className="">
      <SideNavbar sideNavbar={sideNavbar}/>
      </div>
      <div className={`${sideNavbar? 'w-[calc(100%-275px)]':'w-full'}`}>
      <HomePage sideNavbar={sideNavbar}/>
      </div>
    </div>
  )
}

export default Home
