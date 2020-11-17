import React from "react";
import styled from "styled-components";


const Components = styled.div`
  height: 20.1rem;
  margin-bottom: 4rem;
`;

/* 이미지 버튼으로 변경 */
const LikeBtn = styled.img`
`

/*
  const Image = styled.img``;
  그림 대신 임시로. 나중엔 image에 src로 변경
*/

const Gray = styled.div`
  height: 17.3rem;
  position:relative;
  background-color: #c4c4c4;
  margin-bottom:1.2rem;
  ${LikeBtn}{
    z-index: 3;
    width:5rem;
    height:5rem;
    position: absolute;
    top:0.3rem;
    right:0.4rem;
    &:hover{
      pointer:cursor;
    }
    &:focus {
      outline:none;
    }
  }
`

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

const SmallComponent = () => {
  return (
      <Components>
        <Gray>
        <LikeBtn img src="https://formytest.s3.ap-northeast-2.amazonaws.com/like_unactive.svg"/>
        </Gray>
        <OptionElem>지역 시간</OptionElem>
      </Components>
    );
};

export default SmallComponent;
