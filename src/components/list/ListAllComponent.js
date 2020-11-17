import React from "react";
import styled from "styled-components";


/* 컨테이너 어떻게 반복되는지 방법 물어보기! 그 후 마진 넣기 */
const Container = styled.div`
  width: 25.7rem;
  height: 20.9rem;
  margin-bottom: 4rem;
`;

const LikeBtn = styled.img`
`

/*
  const Image = styled.img``;
  그림 대신 임시로. 나중엔 image에 src로 변경
*/

const Gray = styled.div`
  width: 25.7rem;
  height: 18rem;
  background-color: #c4c4c4;
  margin-bottom:1.2rem;
  ${LikeBtn}{
    z-index: 3;
    width:5rem;
    height:5rem;
    position: relative;
    top:0.3rem;
    left:20.3rem;
  }
`

const OptionElem = styled.span`
  font-family: inherit;
  font-weight: medium;
  text-align: left;
  font-size: 1.2rem;
`;

const ListAllComponent = () => {
  return (
    <Container>
      <Gray>
      <LikeBtn src="https://formytest.s3.ap-northeast-2.amazonaws.com/like_active.svg"/>
      </Gray>
      <OptionElem>지역 시간</OptionElem>
    </Container>
    );
};

export default ListAllComponent;
