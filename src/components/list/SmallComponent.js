import React from "react";
import styled from "styled-components";


/*
    width: 25.7rem;
    height: 20.9rem;
*/
const Components = styled.div`
  width: 24.7rem;
  height: 20.1rem;
  margin-bottom: 4rem;
`;

const LikeBtn = styled.img`
`

/*
  const Image = styled.img``;
  그림 대신 임시로. 나중엔 image에 src로 변경
*/

const Gray = styled.div`
  width: 24.7rem;
  height: 17.3rem;
  background-color: #c4c4c4;
  margin-bottom:1.2rem;
  ${LikeBtn}{
    z-index: 3;
    width:5rem;
    height:5rem;
    position: relative;
    top:0.3rem;
    left:19rem;
  }
`

const OptionElem = styled.span`
  font-family: inherit;
  font-weight: medium;
  text-align: left;
  font-size: 1.2rem;
`;

const SmallComponent = () => {
  return (
      <Components>
        <Gray>
        <LikeBtn src="https://formytest.s3.ap-northeast-2.amazonaws.com/like_unactive.svg"/>
        </Gray>
        <OptionElem>지역 시간</OptionElem>
      </Components>
    );
};

export default SmallComponent;
