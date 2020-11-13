import React, { useRef,useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import likeIcon from "../../assets/icons/like_active.svg";
import styled from "styled-components";
import {StyledButtonShadow} from "../common/ButtonShadowComponent";

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
`

const Desc = styled.div`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: bold;
`;

const Img = styled.img`
`;

const PrevBtn = styled.button.attrs((props) => ({
  className: "swiper-button-prev",
}))`
  border: none;
  width: 10.7rem;
  height: 10.7rem;
  padding: 0;
  font-size: 10.7rem;
  border-radius: 50%;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-left: 11rem;
  color: #000000;
  font-weight: bold;
`;

const NextBtn = styled.button.attrs((props) => ({
  className: "swiper-button-next",
}))`
  border: none;
  width: 10.7rem;
  height: 10.7rem;
  padding: 0;
  font-size: 10.7rem;
  border-radius: 50%;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-right: 11rem;
  color: #000000;
  font-weight: bold;
`;

const StopBtn = styled(StyledButtonShadow)`
  width: 38.4rem;
  height: 7.5rem;
  padding 2.4rem 7.2rem;  
  font-size: 2.25rem;
  position: absolute;
  bottom: 0rem;
  margin-bottom: 11rem;
  z-index: 2;
`;

SwiperCore.use([Navigation, Autoplay]);

function Main({posts}) {
  // const prevRef = useRef(null)
  // const nextRef = useRef(null)
  const [bool,setBool] = useState(true);

  return (
    <>
      <Swiper 
        navigation
        // ={{
        //   prevEl: prevRef.current ? prevRef.current : undefined,
        //   nextEl: nextRef.currnet ? nextRef.current : undefined,
        // }}
        autoplay={bool}
        // onInit = {(swiper) =>{
        //   swiper.params.navigation.prevEl = prevRef.current;
        //   swiper.params.navigation.nextEl = nextRef.current;
        //   // swiper.navigation.init();
        //   swiper.navigation.update();
        // }}
      >
        {posts.map((post,index) =>
          <SwiperSlide key={`slide-${index}`} style={{width:"192rem",height: "108rem"}}>
              <Img src={post.download_url} alt={`slide-${index}`} />
              <Header>                
                <Desc>경기도 수원시 새벽</Desc>
                <img src={likeIcon}/>
              </Header>
          </SwiperSlide>
        )}
        <PrevBtn/>
        <NextBtn/>
        <div style={{display:"flex", justifyContent:"center"}}>
          <StopBtn onClick={()=> setBool(!bool)}>잠시 멈춰 바라보기</StopBtn>
        </div>
        {/* <div ref={prevRef}></div>
        <div ref={nextRef}></div> */}
      </Swiper>
    </>
  );
}

export default Main;
/**
 * 전체 flow
 * 시작 시 (useEffect) useDispatch로 post들을 state에 담아놓는다(20개만 잘라서 받는다)
 * useSelector로 받은 post들을 swiper에 넣는다
 * 10개 째 지나갈 때 새로 통신을 요청한다.(해당 변수를 boolean으로 두어서 useEffect의 dependency로 두면 될 것 같음)
 */