import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #000;
  // background-image: url("http://placeimg.com/1920/1080");
  background-repeat: no-repeat;
  width: 1024px;
  height: 768px;
`;

const Btn = styled.button`
  width: 107px;
  height: 107px;
  margin: 30px;
  font-size: 40px;
  font-weight: bold;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
`;

const SBtn = styled.button`
  width: 522px;
  height: 107px;
  position: relative;
  top: 100px;
  font-size: 40px;
  font-weight: bold;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 50px;
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

SwiperCore.use([Navigation, Autoplay]);

function Main({posts,onClickSbtn}) {
  const slides = [];

  useEffect(()=>{
    posts.map((post, index) => {
      slides.push(
        <SwiperSlide key={`slide-${index}`}>
          <img src={post.download_url} alt={`slide-${index}`} />
        </SwiperSlide>
      );
    });
  },[]);

  return (
    <>
      <Swiper navigation autoplay={true}>
        {slides}
      </Swiper>
      <MainWrapper>
        <BtnWrapper>
          <Btn>{"<"}</Btn>
          <Btn>{">"}</Btn>
        </BtnWrapper>
        <SBtnWrapper>
          <SBtn onClick={onClickSbtn}>잠시 멈춰, 바라보기</SBtn>
        </SBtnWrapper>
      </MainWrapper>
    </>
  );
}

export default Main;
/**
 * 전체 flow
 * 시작 시 (useEffect) useDispatch로 post들을 state에 담아놓는다(20개만 잘라서 받는다)
 * useSelector로 받은 post들을 swiper에 넣는다
 * 10개 째 지나갈 때 새로 통신을 요청한다.(해당 변수를 boolean으로 두어서 useEffect의 dependency로 두면 될 것 같음)
 *
 */
