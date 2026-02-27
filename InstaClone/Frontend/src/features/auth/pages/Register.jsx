import { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router'

const Register = () => {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  async function handleSubmit(e) {
      e.preventDefault() ;
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
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

            <input 
            onInput={e=>{setemail(e.target.value)}}
            type="email" 
            name="email" 
            placeholder='Enter email'
             />

            <button>Submit</button>

        </form>
        <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
      </div>
    </main>
  )
}

export default Register

