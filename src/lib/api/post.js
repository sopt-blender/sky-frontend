import axios from 'axios';

export const getPost = async (postNum) =>{
    const data = await axios({
        method: "get",
        url:`https://picsum.photos/v2/list?page=2&limit=${postNum}`
    });
    return data;
}

export const getAddPost = async (postNum) =>{
    const data = await axios({
        method: "get",
        url:`https://picsum.photos/v2/list?page=2&limit=${postNum}`
    });
    return data;
}