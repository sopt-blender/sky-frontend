import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../modules/post";
import Main from "../../components/main/Main";

function MainContainer() {
  const [autoplay, setAutoPlay] = useState(true);
  const onClickSbtn = () => {
    setAutoPlay(!autoplay);
  };
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <>
    {posts ? (<Main 
        posts={posts} 
        onClickSbtn={onClickSbtn} 
      />) : <div>Loading</div>}
    </>
  );
}

export default MainContainer;
