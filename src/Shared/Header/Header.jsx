import React from 'react'

export const Header = ({ files, lngChange, Themes, theme, themeChange }) => {

    return (
        <div className='header-section p-5 bg-slate-950'>
            <div className="flex justify-between">
                <div className="shotcuts">

                </div>
                <div className="dropdown-content flex gap-3">
                    <div className="language-dropdown">
                        <select onChange={lngChange} className='outline-none text-sm px-2 py-2 rounded-md bg-slate-950 text-slate-100 border border-slate-100 border-solid'>

                            {Object.keys(files).map(key => (
                                <option key={key} value={files[key].name}>
                                    {files[key].language}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="theme-dropdown">
                        <select onChange={themeChange} className='outline-none text-sm px-2 py-2 rounded-md bg-slate-950 text-slate-100 border border-slate-100 border-solid'>

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
