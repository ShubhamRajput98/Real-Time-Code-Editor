import React from 'react'
import avatar from '../../assets/Images/avartr.png'
import { MdVideoCall } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export const Header = ({ files, lngChange, Themes, theme, themeChange, userData, open, onOpen }) => {

    return (
        <div className='header-section p-5 bg-slate-950'>
            <div className="flex justify-between">
                <div className="shotcuts">
                    <div className="relative">
                        <div className="avatar-img overflow-hidden" onClick={onOpen}>
                            <img src={avatar} className='h-10 w-10 rounded-full cursor-pointer' />
                        </div>
                        {open ? <div className="overlay" onClick={onOpen}></div> : null}
                        {
                            open ? <div className="dropdown-menu">
                                <ul>
                                    <li className='text-slate-100 cursor-pointer p-3 bg-slate-900'>{userData.email}</li>
                                </ul>
                            </div> : null
                        }

                    </div>
                </div>
                <div className="dropdown-content flex gap-3">
                    <div className="videocall">

                        <NavLink to={"/videocalling"} className="bg-slate-800 flex justify-center items-center text-slate-50 h-8 w-8 rounded-full hover:bg-slate-600">
                            <MdVideoCall />
                        </NavLink>
                    </div>
                    <div className="language-dropdown">
                        <select defaultValue={files["script.js"].language} onChange={lngChange} className='outline-none text-sm px-2 py-2 rounded-md bg-slate-950 text-slate-100 border border-slate-100 border-solid'>

                            {Object.keys(files).map(key => (
                                <option selected={files["script.js"].language === files[key].language} key={key} value={files[key].name}>
                                    {files[key].language}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="theme-dropdown">
                        <select value={theme} onChange={themeChange} className='outline-none text-sm px-2 py-2 rounded-md bg-slate-950 text-slate-100 border border-slate-100 border-solid'>

                            {Themes.map((item, i) => (
                                <option selected={item === theme} key={i} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
