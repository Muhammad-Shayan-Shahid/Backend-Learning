import { useContext } from 'react'
import {getFeed} from '../services/post.api'
import { PostContent } from '../post.context'


export const usePost = ()=>{
    const context = useContext(PostContent)

    const {loading ,setloading ,post ,setpost ,feed ,setfeed} = context

    const handleGetFeed = async ()=>{
        setloading(true)
        const data = await getFeed()
        setfeed(data.posts)
        setloading(false)
    }

    return {loading ,post , feed , handleGetFeed }
}
