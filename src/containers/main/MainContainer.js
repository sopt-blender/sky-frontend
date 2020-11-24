import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost,getAddPost } from "../../modules/post";
import Main from "../../components/main/Main";

function MainContainer() {
  const dispatch = useDispatch();
  const {posts, error} = useSelector(state => state.post);
  const loading = useSelector(state => state.loading);
  const [autoPlay,setAutoPlay] = useState(true);
  const [like, setLike] = useState(false);
  const toggleLike = () => setLike(!like);

  const toggleSbtn = () => {
    setAutoPlay(!autoPlay)
  }
  const onSlideChange = (activeIndex) =>{
    if(activeIndex % 10 === 0){
      dispatch(getAddPost(10));
    }else{
      console.log(activeIndex);
    }
  }

  useEffect(() => {
    dispatch(getPost(20));
  }, []);

  return (
    <>
    {/* {loading ? <div>Loading...</div>} */}
    {error && <div>에러 발생!!</div>}
    {posts && (<Main 
        posts={posts}
        autoPlay={autoPlay}
        toggleSbtn={toggleSbtn}
        like={like}
        toggleLike={toggleLike}
        onSlideChange={onSlideChange}
      />)}
    </>
  );
}

export default MainContainer;
