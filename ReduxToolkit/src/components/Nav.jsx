import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeToDark, changeThemeToLight } from '../redux/slices/themeSlice'

const Nav = () => {
    const theme = useSelector((state)=>state.theme.value)
    const dispatch  = useDispatch()

  return (
    <div>
       <h1>Theme is  : {theme}</h1>

       <button
       onClick={()=>{
        dispatch(changeThemeToLight())
       }}
       >
        Light
        </button>

       <button
       onClick={()=>{
        dispatch(changeThemeToDark())
       }}
       >Dark
       </button>
    </div>
  )
}

export default Nav
