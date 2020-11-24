/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  position:relative;
`;

const UploadButton = styled.button`
  z-index:5;
  position: fixed;
  border: none;
  width: 5rem;
  height: 5rem;
  padding: 0;
  float: right;
  right: 13rem;
  bottom: 5rem;
  font-size: 5rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
    &:hover{
      pointer:cursor;
    }
    &:focus {
      outline:none;
    }
`;

export default () => (
  <Footer>
    <UploadButton>+</UploadButton>
  </Footer>
);
