import axios from 'axios';

export const getPost = async (postNum) =>{
    const data = await axios({
        method: "get",
        // url:'http://www.comedu.org:3000/mobile' // for mobile 360*640
        url:'http://www.comedu.org:3000/desktop' // for desktop 1076*572
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