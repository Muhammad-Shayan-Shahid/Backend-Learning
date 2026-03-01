import {createContext, useState} from 'react'

export const PostContent = createContext()

export function PostProvider({children}){
    
    const [loading, setloading] = useState(false)
    const [post, setpost] = useState(null)
    const [feed, setfeed] = useState(null)

    return(
        <PostContent.Provider value={{loading ,setloading ,post ,setpost ,feed ,setfeed}}> 
            {children}
        </PostContent.Provider>
    )
}