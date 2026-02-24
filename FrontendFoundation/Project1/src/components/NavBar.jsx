import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-center  gap-x-10 text-sm mb-10'>
        <NavLink className={(e)=>e.isActive && "text-red-300"} to="/">
           Home
        </NavLink>

        <NavLink className={(e)=>e.isActive && "text-red-300"} to="/recpies">
           About
        </NavLink>

        <NavLink className={(e)=>e.isActive && "text-red-300"} to="/about">
           Recpies
        </NavLink>

          <NavLink className={`px-4 py-2 bg-gray-900 rounded ${(e)=>e.isActive && "text-red-300"}`} to="/create">
           Create Recpie
        </NavLink>
    </div>
  )
}

export default NavBar
