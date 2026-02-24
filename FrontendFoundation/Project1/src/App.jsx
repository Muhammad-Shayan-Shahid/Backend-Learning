import NavBar from './components/NavBar'
import MainRouting from './routes/MainRouting'

const App = () => {
  return (
    <div className='py-10 px-[10%] w-screen h-auto font-thin bg-gray-800 text-white'>
      <NavBar/>
      <MainRouting/>
    </div>
  )
}

export default App
