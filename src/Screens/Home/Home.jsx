import React from 'react'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='w-screen'>
      <div className="flex ">
        {/* <Sidebar /> */}
        <div className='w-full min-h-screen overflow-auto hide-scroll-bar'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
