import axios from 'axios';

const url = 'api/vi/posts';

const getAllPosts = async () => {
    try {
        //아직 url 안 나옴
        const { data } = await axios.get(`${url}`);
        console.log('[SUCCESS] GET All Posts', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET All Posts', e);
        throw e;
    }
}

const getLikedPosts = async () => {
    try {
        //아직 url 안 나옴
        const { data } = await axios.get(`${url}/likesky`);
        console.log('[SUCCESS] GET Liked Posts', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET Liked Posts', e);
        throw e;
    }
}

const insertLike = async (id) => {
    try{
        await axios.post(`${url}/toggleLike/${id}`);
        console.log('[SUCCESS] POST Post Like');
    }catch(e){
        console.log('[FAIL] POST Post Like');
        throw e;
    }
}

const listAPI = {
    getAllPosts,
    insertLike,
    getLikedPosts
}

export default listAPI;