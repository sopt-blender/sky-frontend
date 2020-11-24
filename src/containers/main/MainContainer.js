import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost,getAddPost } from "../../modules/post";
import Main from "../../components/main/Main";
import Loading from "../../components/common/Loading";

function MainContainer() {
  const dispatch = useDispatch();
  const {error} = useSelector(state => state.post);
  const posts = useSelector(state=>state.post.posts);
  // const loading = useSelector(state => state.loading);
  const [postNum, setPostNum] = useState(1);
  const [autoPlay,setAutoPlay] = useState(true);
  const [like, setLike] = useState(false);
  const toggleLike = () => setLike(!like);
  /* toggleLike = () => {
    setLike(!like);
  }*/

  const toggleSbtn = () => {
    setAutoPlay(!autoPlay)
  }
  const onSlideChange = (activeIndex) => {
    if(activeIndex % 10 === 0){
      dispatch(getAddPost(postNum));
      setPostNum(postNum+1);
    }else{
      console.log(activeIndex);
    }
  }

  useEffect(() => {
    dispatch(getPost(postNum));
    setPostNum(postNum+1);
  }, []);

  return (
    <>
    {posts ? (<Main 
        posts={posts.data}
        autoPlay={autoPlay}
        toggleSbtn={toggleSbtn}
        like={like}
        toggleLike={toggleLike}
        onSlideChange={onSlideChange}
      />) : <Loading />}
    {error && <div>에러 발생!!</div>}
    </>
  );
}

export default MainContainer;
