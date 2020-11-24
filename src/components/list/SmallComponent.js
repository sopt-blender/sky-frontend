import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import activeBtn from '../../assets/like_active.svg';
import unactiveBtn from '../../assets/like_unactive.svg';
import gray from '../../assets/123.PNG';
import listAPI from '../../lib/listAPI';

const Components = styled.div`
  height: 20.1rem;
  margin-bottom: 4rem;
`;

const LikeBtn = styled.img`
`;

const Image = styled.div`
`;

const ImageContainer = styled.div`
  height: 17.3rem;
  position:relative;
  margin-bottom:1.2rem;
  ${Image}{
    //backgroundimage로 주고 center에 넣기
    position: absolute; top:0; left: 0;
    width: 100%;
    height: 100%;
  }
  ${LikeBtn}{
    z-index: 3;
    width:5rem;
    height:5rem;
    position: absolute;
    top:0.3rem;
    right:0.4rem;
    &:hover{
      //pointer:cursor;
    }
    &:focus {
      outline:none;
    }
  }
`;

const OptionElem = styled.span`
  font-family: inherit;
  font-weight: medium;
  text-align: left;
  font-size: 1.2rem;
`;

/*
좋아요 버튼 눌렀을 때
https://formytest.s3.ap-northeast-2.amazonaws.com/like_active.svg
*/

const SmallComponent = ({pictureData}) => {

  const [buttonState, setButtonState] = useState(pictureData.like);

  const onClickLikeBtn = () => {
    (async () => {
      try {
        const result = await listAPI.insertLike();
        setButtonState(prev => !prev);
      } catch (e) {
  
      }
    })();
  }
  
  return (
      <Components>
        <ImageContainer><Image src = {gray}/><LikeBtn src ={ buttonState === true ? activeBtn : unactiveBtn } onClick={onClickLikeBtn} /></ImageContainer>
        <OptionElem>지역 시간</OptionElem>
      </Components>
  );
};

export default SmallComponent;
