import React from 'react'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='container m-auto'>
      <div className="flex ">
        {/* <Sidebar /> */}
        <div className='w-full max-h-screen overflow-auto hide-scroll-bar'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
