import {useContext} from 'react'
import {AuthContent} from '../auth.context'
import {login , getMe , register} from '../services/auth.api'

export function useAuth(){

    const context = useContext(AuthContent) 
    const { user, setuser, loading, setloading } = context

    const handleLogin = async (username, password) => {
        setloading(true)
        const response = await login(username, password)
        setuser(response.user)
        setloading(false)
        return response
    }

    const handleRegister = async (username, email, password) => {
        setloading(true)
        const response = await register(username, email, password)
        setuser(response.user)
        setloading(false)

    }

    return {
        user, loading, handleLogin, handleRegister
    }
}