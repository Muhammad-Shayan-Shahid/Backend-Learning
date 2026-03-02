import {createContext, useState} from 'react'

export const PostContext = createContext()

export function PostProvider({children}){
    
    const [loading, setloading] = useState(false)
    const [post, setpost] = useState(null)
    const [feed, setfeed] = useState(null)

    return(
        <PostContext.Provider value={{loading ,setloading ,post ,setpost ,feed ,setfeed}}> 
            {children}
        </PostContext.Provider>
    )
}