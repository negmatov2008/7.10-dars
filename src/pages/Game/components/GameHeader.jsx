import React from "react";
import { styled } from "styled-components";
import BackButton from "../../../components/BackButton";
import Titile from "../../../components/Titile";

const GAmeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Health = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > img {
    width: 26px;
  }
`;

function GameHeader() {
  const sum = (d, k) => {
    return (k * 100) / d;
  };
  const Progres = styled.div`
    width: 57px;
    border-radius: 96px;
    background: var(--White, #fff);
    padding: 4px;

    & > div {
      width: ${sum(10, 2)}%;
      height: 8px;
      border-radius: inherit;
      background-color: ${(props) => props.theme.colors.navy};
    }
  `;
  return (
    <GAmeHeader>
      <Left>
        <BackButton img={"menyu.svg"}></BackButton>
        <Titile danger={"bor"} text={"Country"}></Titile>
      </Left>
      <Health>
        <Progres>
          <div></div>
        </Progres>
        <img src="heart.svg" alt="" />
      </Health>
    </GAmeHeader>
  );
}

export default GameHeader;
