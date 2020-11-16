import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost,getAddPost } from "../../modules/post";
import Main from "../../components/main/Main";

function MainContainer() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);
  const [autoplay, setAutoPlay] = useState(true);
  const onClickSbtn = () => {
    setAutoPlay(!autoplay);
  };
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
    {posts ? (<Main 
        posts={posts} 
        onClickSbtn={onClickSbtn} 
        onSlideChange={onSlideChange}
      />) : <div>Loading</div>}
    </>
  );
}

export default MainContainer;
