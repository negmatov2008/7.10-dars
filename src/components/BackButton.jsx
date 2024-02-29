import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const BackButon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -5px 0px -1px rgba(157, 45, 245, 0.25) inset;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  }
`;

const Img = styled.img`
  width: 17px;
`;

function BackButton({ click, img }) {
  const navigate = useNavigate();
  return (
    <BackButon onClick={() => navigate(click)}>
      <Img src={img} />
    </BackButon>
  );
}

export default BackButton;
