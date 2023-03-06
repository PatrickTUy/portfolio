import React from 'react'
import Home from './Home'
import About from './About'
import Work from './Work'
import Blog from './Blog'
const Dashboard = () => {
  return (
    <div className='bg-primary flex justify-between px-4 '>
      <div className='flex flex-col bg-dark rounded-md w-[65%]'>
       <Home/>
       <About/>
       <Work/>
       <Blog/>
      </div>
      <div className='bg-dark rounded-md w-[33%]'></div>
    </div>
  )
}

export default Dashboard
