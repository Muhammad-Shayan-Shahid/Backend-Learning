import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'
import Nav from './components/Nav'

const App = () => {

  const num = useSelector((state)=>state.counter.value)
  const dispatch  = useDispatch()

  return (
    <div>
      <Nav/>
      <h1>{num}</h1>

      <button 
      onClick={()=>{dispatch(increment())}}>
      Increment
      </button>

      <button
      onClick={()=>{dispatch(decrement())}}
      >Decrement
      </button>

    </div>
  )
}

export default App
