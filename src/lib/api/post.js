import axios from 'axios';

export const getPost = async (postNum) =>{
    const data = await axios({
        method: "get",
        url:'http://www.comedu.org:3000/desktop'
        // url:`https://picsum.photos/v2/list?page=2&limit=${postNum}`
    });
    // let data = [];
    // for(let i=0;i<20;i++) data.push({'download_url':'../../assets/1024_576.jpeg'});
    return data;
}

export const getAddPost = async (postNum) =>{
    const data = await axios({
        method: "get",
        url:`https://picsum.photos/v2/list?page=2&limit=${postNum}`
    });
    return data;
}