import React from "react";
import styled from "styled-components";
import SmallComponent from "./SmallComponent";
import { useEffect, useState } from 'react';

const Container = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin:0 11rem;
  column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  @media (max-width: 768px) {

  }
`

const ListAllComponent = () => {

  const [picturesState, setPicturesState] = useState({
    status : 'idle',
    pictures : null
  });

  //서버에서 사진 및 좋아요 정보 받아오기
  useEffect(() => {
    (async () => {
      setPicturesState({ pictures: null, status: 'pending' });
      try {
          //const result = await getAllPosts();
          //setTimeout(() => setPicturesState({ pictures : result, status: 'resolved' }), 800);
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
      return (
        <Container>
          {picturesState.pictures.map((picture) => <SmallComponent pictureData = {picture}/>)}
          <SmallComponent/>
        </Container>
      );
    case 'idle':
      default:
        return <div></div>
  }
};

export default ListAllComponent;
