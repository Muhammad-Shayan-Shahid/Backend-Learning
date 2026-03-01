import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import '../style/form.scss'
import {useAuth} from '../hooks/useAuth'

const Login = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const {handleLogin} = useAuth()
    const {loading} = useAuth()
    const navigate = useNavigate()


  async function handleSubmit(e) {
      e.preventDefault() ;

      handleLogin(username , password)
      .then(res=>{
        console.log(res)
      })
      // navigate("/")

  }

  if(loading){
        return (<main>
            <h1>Loading.....</h1>
        </main>)
    }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

            <input 
            onInput={e=>{setusername(e.target.value)}}
            type="text" 
            name="username" 
            placeholder='Enter username' 
            />

            <input 
            onInput={e=>{setpassword(e.target.value)}}
            type="password" 
            name="password" 
            placeholder='Enter password' 
            />
            
            <button className='button primary-button'>Submit</button>
        </form>
        <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Create one</Link></p>
      </div>
    </main>
  )
}

export default Login
