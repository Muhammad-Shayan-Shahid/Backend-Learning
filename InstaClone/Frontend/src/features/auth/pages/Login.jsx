import { Link } from 'react-router'
import { useState } from 'react'
import '../style/form.scss'

const Login = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

  async function handleSubmit(e) {
      e.preventDefault() ;

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
            
            <button>Submit</button>
        </form>
        <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
      </div>
    </main>
  )
}

export default Login
