import React, { useRef,useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import styled, {css} from "styled-components";
import {StyledButtonShadow} from "../common/ButtonShadowComponent";
import likeIcon from "../../assets/icons/like_active.svg";
import unlikeIcon from "../../assets/icons/like_unactive.svg";
import btnRight from "../../assets/icons/btn_right.svg";

const sizes = {
  desktop:102.4,
  tablet:76.8,
  phone: 36,
};

const imagePath = {likeIcon, unlikeIcon};

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
  ${media.tablet`justify-content: space-around; margin-left: 4rem;`}
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
   ${media.phone`
      position: absolute;
      right: 8px;
   `}
`;

const PrevBtn = styled.button.attrs((props) => ({
  className: "swiper-button-prev",
}))`
  position: absolute;
  border: none;
  width: 5rem;
  height: 5rem;
  padding: 0;
  font-size: 10.7rem;
  border-radius: 50%;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-left: 11rem;
  color: #000000;
  font-weight: bold;
  ${media.desktop`margin-left:8rem;`}
  ${media.tablet`margin-left:5rem;`}
  &:focus{
    outline:none;
    box-shadow:none;
  }
  ${media.phone`
    width: 5rem;
    height: 5rem;
  `}
`;

const NextBtn = styled.button.attrs((props) => ({
  className: "swiper-button-next",
}))`
  position:absolute;
  border: none;
  width: 5rem;
  height: 5rem;
  padding: 0;
  border-radius: 50%;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  /* background-color: #ffffff; */
  margin-right: 11rem;
  color: #000000;
  /* font-weight: bold; */
  background-image: url(${btnRight});
  background-repeat: no-repeat; 
  ${media.desktop`margin-right:8rem;`}
  ${media.tablet`margin-right:5rem;`}
  &:focus{
    outline:none;
    box-shadow:none;
  }
  ${media.phone``}
`;

const StopBtnWrapper = styled.div`
  display: flex; 
  justify-content: center;
`;

const StopBtn = styled(StyledButtonShadow).attrs((props)=>({
  className: "swiper-container"
}))`
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
`;

const swiperStyle = {
  width:'192rem', 
  height:'108rem'
}

SwiperCore.use([Navigation, Autoplay]);

function Main({posts, onSlideChange}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(); // swiper DOM에 접근하여 swiper 객체에 접근하기 위함(swiper.autoplay.start() 호출 위함)
  const [autoPlay,setAutoPlay] = useState(true);
  const [selected, setSelected] = useState(imagePath.unlikeIcon);

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
        autoplay={autoPlay}
        ref={swiperRef}
      >
        {posts.map((post,index) =>
          <SwiperSlide key={`slide-${index}`} style={swiperStyle}>
            <Img src={post.download_url} alt={`slide-${index}`} />
            <Header>                
              <Desc>경기도 수원시 새벽</Desc>
              
              <Img src={selected} alt='likeIcon' onClick={()=>setSelected(imagePath.likeIcon)}/>
            </Header>
          </SwiperSlide>
        )}
        <PrevBtn ref={prevRef}/>
        <NextBtn ref={nextRef}/>
        <StopBtnWrapper>
          <StopBtn onClick={()=>setAutoPlay(!autoPlay)}>잠시 멈춰 바라보기</StopBtn>
        </StopBtnWrapper>
      </Swiper>
    </>
  );
}

export default Main;