import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SiCoinmarketcap } from 'react-icons/si'
import { AiFillPieChart,AiFillDollarCircle } from 'react-icons/ai'
import { BiSolidBarChartAlt2 } from 'react-icons/bi'

export const Sidebar = () => {
  const [show, setShow] = useState(true)
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className={`sidebar-section ${show ? 'open' : 'close'} h-screen w-72 bg-gray-900`}>
      <div className="sidebar-content py-8 px-3">
        <div className="sidebar-heading relative flex justify-between items-center mb-5 px-3">
          <h4 className='text-2xl'><span className='text-cyan-300'>Market</span> <span className='text-teal-300'>insight</span></h4>
          {
            show ? <span className="close-icon absolute" onClick={() => setShow(false)}>
              <IoMdClose className='text-3xl cursor-pointer' />
            </span> :
              <span className="close-icon absolute" onClick={() => setShow(true)}>
                <RxHamburgerMenu className='text-3xl cursor-pointer' />
              </span>
          }
        </div>
        <div className="sidebar-menu-section">
          <div className="sidebar-menu-heading pb-3 px-3">
            <p className='text-slate-300'>menu</p>
          </div>
          <div className="sidebar-menu-content">
            <div className="sidebar-menu-list">
              <SidebarMenu path={""} splitLocation={splitLocation} Icon={HiHome} text={"Top News"} />
              <SidebarMenu path={"marketupdate"} splitLocation={splitLocation} Icon={SiCoinmarketcap} text={"Maket update"} />
              <SidebarMenu path={"incomeestimator"} splitLocation={splitLocation} Icon={AiFillPieChart} text={"Income estimator"} />
              <SidebarMenu path={"intractivechart"} splitLocation={splitLocation} Icon={BiSolidBarChartAlt2} text={"Intractive chart"} />
              <SidebarMenu path={"mutualfunds"} splitLocation={splitLocation} Icon={AiFillDollarCircle} text={"Mutual funds"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const SidebarMenu = ({ path, splitLocation, Icon, text }) => {
  return (
    <div className="sidebar-menu mb-3">
      <NavLink to={`/${path}`} className={`${splitLocation[1] === path && 'bg-gray-700 sidebar-link'} flex items-center text-base relative overflow-hidden leading-3 rounded-lg hover:bg-gray-700`}>
        <div className="menu-icon h-10 w-10 flex items-center justify-center">
          <Icon className='text-emerald-200 text-xl' />
        </div>
        <span className='ms-2 w-9/12'>{text}</span>
      </NavLink>
    </div>
  )
}
