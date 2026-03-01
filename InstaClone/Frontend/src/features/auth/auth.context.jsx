import {createContext , useState} from 'react'

export const AuthContent = createContext()

export function AuthProvider({children}){
    
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(false)

    return(
        <AuthContent.Provider value={{ user ,setuser ,loading , setloading}}>
                {children}
        </AuthContent.Provider>
    )
}
