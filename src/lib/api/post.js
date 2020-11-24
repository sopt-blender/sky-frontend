import axios from 'axios';
const baseURL = 'http://52.78.212.95:4000';

export const getPost = async (postNum) =>{
    const data = await axios({
        method: "get",
        baseURL,
        url: `/api/v1/posts?imagetype=1&page=${postNum}`
    });
    return data;
}

export const getAddPost = async (postNum) =>{
    const data = await axios({
        method: "get",
        baseURL,
        url: `/api/v1/posts?imagetype=1&page=${postNum}`
    });
    return data;
}

export const updatePost = async (postId) => {
    const data = await axios({
        method: "post",
        baseURL,
        url: `/api/v1/posts/toggleLike/:${postId}`
    });
    return data;
}