import axios from 'axios';

const post = axios.create();
post.defaults.baseURL = "";

// 따로 만들필요 없는지?
export const getPost = async (postNum) =>{
    return await post.get("/api/v1/posts").slice(0,postNum);
}

export const getPostById = async (postId) =>{
    return await post.get(`/api/v1/posts/${postId}`);
}