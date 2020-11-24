import React from "react";
import styled from "styled-components";
import SmallComponent from "./SmallComponent";
import { useEffect, useState } from 'react';
import listAPI from '../../lib/listAPI';

const Wrapper = styled.div`
@media (max-width: 904px) {
    //양옆 최소마진 50px
    //아이템간 마진 16px 고정

    //820~903
    //

    //819이하부터 모바일 : 이미지 width 530에서 출발
    //360까지만 줄어
  }
`

const Container = styled.div`
  max-width:100vw;
  display: grid;
  margin : 0 11rem;
  grid-template-columns: repeat(auto-fill, minmax(25.7rem, 1fr));
  gap: 1.6rem;
  justify-items: stretch;
  align-items: center;
`

const ListAllComponent = () => {

  /*
  const [picturesState, setPicturesState] = useState({
    status : 'idle',
    pictures : null
  });

  //서버에서 사진 및 좋아요 정보 받아오기
  useEffect(() => {
    (async () => {
      setPicturesState({ pictures: null, status: 'pending' });
      try {
          const result = await listAPI.getAllPosts();
          setTimeout(() => setPicturesState({ pictures : result, status: 'resolved' }), 800);
      } catch (e) {
        setPicturesState({ pictures: null, status: 'rejected' });
      }
    })();
  }, []);


  switch (picturesState.status) {
    case 'pending':
      return <div></div>;
    case 'rejected':
      return <div></div>;
    case 'resolved':
    case 'idle':
      default:
        return <div></div>
  }  */

  return (
    <Wrapper>
    <Container>
      <SmallComponent/>
      <SmallComponent/>
      <SmallComponent/>
      <SmallComponent/>
      <SmallComponent/>
      <SmallComponent/>
      <SmallComponent/>
      <SmallComponent/>
      <SmallComponent/>
    </Container>
    </Wrapper>
  );
};
//{picturesState.pictures.map((picture) => <SmallComponent pictureData = {picture}/>)}
export default ListAllComponent;
