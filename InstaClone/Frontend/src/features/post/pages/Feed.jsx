import React, { useEffect } from 'react'
import {usePost} from '../hooks/usePost'

const Feed = () => {

    const {loading , handleGetFeed , feed} =usePost()

    useEffect(() => {
        handleGetFeed()
    }, [])
    
    if(loading || !feed){
        return(
            <main>
                <h1>Feed is loading...</h1>
            </main>
        )
    }

    console.log(feed)

  return (
    <div>
      
    </div>
  )
}

export default Feed
