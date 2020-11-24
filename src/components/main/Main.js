import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import styled, {css} from "styled-components";
import {StyledButtonShadow} from "../common/ButtonShadowComponent";
import likeIcon from "../../assets/icons/like_active.svg";
import unlikeIcon from "../../assets/icons/like_unactive.svg";

const sizes = {
  desktop:102.4,
  tablet:76.8,
  phone: 36,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width:${sizes[label]}rem){
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Header = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 0rem;
  align-items: center;
  justify-content: space-between;
  padding-left: 11rem;
  padding-right: 11rem;
  margin-top: 6rem;
  z-index: 2;
  ${media.desktop`justify-content: space-between;`}
  ${media.tablet`justify-content: center; padding:0; margin-left: 0;`}
  ${media.phone`
    justify-content: center;
    padding: 0;
    margin-left: 0;
  `}
`

const Desc = styled.div`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: bold;
`;

const Img = styled.img`
   ${media.tablet`
      position: absolute;
      right: 56px;
   `}
   ${media.phone`
      position: absolute;
      right: 8px;
   `}
`;

const SlideImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => `${props.imageUrl}`});
  background-repeat:none;
  background-position:center;
  background-size:cover;
`

const NavBtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PrevBtn = styled.button.attrs((props) => ({
  className: "swiper-button-prev",
}))`
  position: absolute;
  border: none;
  width: 7rem;
  height: 7rem;
  padding: 0;
  color: #000000;
  background-color: #ffffff;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-left: 11rem;
  font-size: 3rem;
  /* ${media.desktop`margin-left:8rem;`} */
  ${media.tablet`margin-left:5rem;`}
  ${media.phone`margin-left: 2rem;`}
  &:focus{
    outline:none;
    box-shadow:none;
  }
  &:after{
    content: "";
  }
`;

const NextBtn = styled.button.attrs((props) => ({
  className: "swiper-button-next",
}))`
  position: absolute;
  border: none;
  width: 7rem;
  height: 7rem;
  padding: 0;
  color: #000000;
  background-color: #ffffff;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-right: 11rem;
  font-size: 3rem;
  /* ${media.desktop`margin-right:8rem;`} */
  ${media.tablet`margin-right:5rem;`}
  ${media.phone`margin-right: 2rem;`}
  &:focus{
    outline:none;
    box-shadow:none;
  }
  &:after{
    content: "";
  }
`;

const StopBtnWrapper = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const StopBtn = styled(StyledButtonShadow)`
  width: 38.4rem;
  height: 7.5rem;
  padding: 2.4rem 7.2rem;  
  font-size: 2.25rem;
  position: absolute;
  bottom: 0rem;
  margin-bottom: 11rem;
  z-index: 2;
  &:focus{
    outline:none;
    box-shadow:none;
  }
  ${media.phone`
    margin-bottom: 10.5rem;
    width: 25.6rem;
    height: 5rem;
    font-size: 1.5rem;
    padding: 1.6rem 7.2rem;
  `}
`;

const swiperStyle = {
  width:'100%', 
  height:'100vh'
}

SwiperCore.use([Navigation, Autoplay]);

function Main({posts, autoPlay, toggleSbtn, like, toggleLike, onSlideChange}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(); // swiper DOM에 접근하여 swiper 객체에 접근하기 위함(swiper.autoplay.start() 호출 위함)
  useEffect(()=>{
    if(autoPlay){
      swiperRef.current.swiper.autoplay.start();
    }else{
      swiperRef.current.swiper.autoplay.stop();
    }
  },[autoPlay]);

  return (
    <>
      <Swiper 
        navigation = {{
          prevEl: prevRef.current ? prevRef.current : null,
          nextEl: nextRef.currnet ? nextRef.current : null,
        }}
        onInit = {(swiper) =>{
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        onSlideChange={(swiper)=> onSlideChange(swiper.activeIndex)}
        autoplay={{
          autoplay: true,
          delay: 2000,
        }}
        ref={swiperRef}
      >
        {posts.map((post,index) =>
          <SwiperSlide key={`slide-${index}`} style={swiperStyle}>
            <SlideImg imageUrl={post.download_url} />
            <Header>                
              <Desc>경기도 수원시 새벽</Desc>
              <Img src={like?likeIcon:unlikeIcon} alt='likeIcon' onClick={toggleLike}/>
            </Header>
          </SwiperSlide>
        )}
        <NavBtnWrapper>
          <PrevBtn ref={prevRef}>
              <i class="fas fa-chevron-left"></i>
          </PrevBtn>
          <NextBtn ref={nextRef}>
            <i class="fas fa-chevron-right"></i>
          </NextBtn>
        </NavBtnWrapper>
        <StopBtnWrapper>
          <StopBtn onClick={toggleSbtn}>잠시 멈춰 바라보기</StopBtn>
        </StopBtnWrapper>
      </Swiper>
    </>
  );
}

export default Main;