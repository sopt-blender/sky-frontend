import React, { useRef } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import ButtonLineComponent from "../common/ButtonLineComponent";
import ButtonShadowComponent from "../common/ButtonShadowComponent";
const ModalBackgorundWrap = styled.div`
  background: hsla(0, 0%, 0%, 0.4);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrap = styled.div`
  width: 50rem; // 200px
  /* height: 90%; //760px */
  border-radius: 2rem;
  background: #ffffff;
  padding: 6rem 6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const ModalTtile = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 2.4rem;
`;

const ModalImageCanverse = styled.div`
  width: 100%;
  height: 27rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a9a9a9;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-bottom: 4rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ModalInputWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const ModalInput = styled.input`
  flex: 1;
  padding: 0.8rem 0;
  border: none;
  border-bottom: 1px solid #ebebeb;
  background: rgba(0, 0, 0, 0);
  &:focus {
    outline: none;
  }
`;

const ModalInputButton = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
  margin-left: 2rem;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalTimeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const ModalTimeButton = styled.div`
  padding: 0.7rem 3rem;
  background: #000000;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bolder;
  border-radius: 4rem;

  &:hover {
    cursor: pointer;
  }
`;

const ModalResultWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalComponent = ({ imgBase64, handleChangeFile, onToggleModal }) => {
  const inputRef = useRef();

  const handleClick = (e) => {
    inputRef.current.click();
  };

  return (
    <form>
      <ModalBackgorundWrap onClick={onToggleModal}></ModalBackgorundWrap>
      <ModalWrap>
        <ModalTtile>하늘 등록하기</ModalTtile>
        <ModalImageCanverse
          onClick={handleClick}
          style={{ backgroundImage: `url(${imgBase64})` }}
        >
          사진을 업로드 해주세요
        </ModalImageCanverse>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={handleChangeFile}
        ></input>
        <ModalTtile>지역</ModalTtile>
        <ModalInputWrap>
          <ModalInput placeholder="지역을 검색해주세요" />
          <ModalInputButton>
            <IoIosSearch size="20" />
          </ModalInputButton>
        </ModalInputWrap>
        <ModalTtile>시간</ModalTtile>
        <ModalTimeWrap>
          <ModalTimeButton>새벽</ModalTimeButton>
          <ModalTimeButton>한낮</ModalTimeButton>
          <ModalTimeButton>초저녁</ModalTimeButton>
          <ModalTimeButton>한밤중</ModalTimeButton>
        </ModalTimeWrap>
        <ModalResultWrap>
          <div
            style={{
              marginBottom: "1.6rem",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            경기도 수원 새벽
          </div>
          <ButtonShadowComponent>등록하기</ButtonShadowComponent>
        </ModalResultWrap>
      </ModalWrap>
    </form>
  );
};

export default ModalComponent;
