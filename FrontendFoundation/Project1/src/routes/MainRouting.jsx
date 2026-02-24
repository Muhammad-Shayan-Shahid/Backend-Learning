import {Routes , Route } from 'react-router-dom'
import Recpies from '../pages/Recpies'
import About from '../pages/About'
import Home from '../pages/Home'
import Create from '../pages/Create'

const MainRouting = () => {
  return (
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/recpies" element ={<Recpies/>} />
      <Route path="/about" element ={<About/>} />
      <Route path="/create" element ={<Create/>} />
    </Routes>
  )
}

export default MainRouting
