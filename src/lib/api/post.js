import axios from 'axios';

// const post = axios.create();
// post.defaults.baseURL = `https://picsum.photos/v2/list?page=2&limit=20`;

export const getPost = async () =>{
    const data = await axios({
        method: "get",
        url:"https://picsum.photos/v2/list?page=2&limit=20"
    });
    return data;
}

// export const getPostById = async (postId) =>{
//     return await post.get(`/api/v1/posts/${postId}`);
// }