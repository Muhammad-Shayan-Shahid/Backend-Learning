import axios from 'axios'

const api = axios.create({
    baseURL : "http://localhost:3000/api/posts" ,
    withCredentials : true
})

export async function getFeed(params) {
    const response = await api.get("/feed") 

    return response.data
}

export async function createPost(imageFile , caption) {
    const formData = new FormData()

    formData.append("image" , imageFile)
    formData.append("caption" , caption)

    const response = await api.post("/posts" , formData)

    return response.data
}


export async function likePost(postId) {
    const response = await api.post("/api/posts/like/" + postId)
    return response.data
}

export async function unLikePost(postId) {
    const response = await api.post("/api/posts/unlike/" + postId)
    return response.data
}