/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Footer = styled.footer``;

const UploadButton = styled.button`
  border: none;
  width: 10.7rem;
  height: 10.7rem;
  padding: 0;
  float: right;
  margin-right: 14rem;
  margin-bottom: 9rem;
  font-size: 10.7rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export default ({ onToggleModal }) => (
  <Footer>
    <UploadButton onClick={onToggleModal}>+</UploadButton>
  </Footer>
);
