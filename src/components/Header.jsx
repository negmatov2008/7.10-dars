import React from "react";
import { styled } from "styled-components";
import BackButton from "./BackButton";
import Titile from "./Titile";

const HeaderStyle = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header({ img, click, text }) {
  return (
    <HeaderStyle>
      <BackButton img={img} click={click}></BackButton>
      <Titile text={text}></Titile>
    </HeaderStyle>
  );
}
