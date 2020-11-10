import React from "react";
import styled from "styled-components";

const ModalBackgorundWrap = styled.div`
  background: rgba(0, 0, 0, 0.4);
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
  width: 20rem; // 200px
  height: 20rem; //760px
  border-radius: 2rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalTtile = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

const ModalComponent = () => {
  return (
    <ModalBackgorundWrap>
      <ModalWrap>
        <ModalTtile>작성</ModalTtile>
      </ModalWrap>
    </ModalBackgorundWrap>
  );
};

export default ModalComponent;
