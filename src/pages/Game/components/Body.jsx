import React from "react";
import { styled } from "styled-components";

const Bodyy = styled.div`
  display: flex;
  max-width: 100%;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  height: 144px;
  margin-top: 92px;
`;

const Word = styled.div`
  border-radius: 12px;
  background: var(--Blue, #2463ff);
  box-shadow: 0px 1px 0px 6px #3c74ff inset, 0px -2px 0px 3px #140e66 inset;
  display: flex;
  width: 40px;
  height: 66px;
  padding: 12px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const Letter = styled.h5`
  color: var(--White, #fff);
  text-align: center;
  font-family: "Mouse Memoirs";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 48px */
  letter-spacing: 2px;
  text-transform: uppercase;
`;

function Body() {
  return (
    <Bodyy>
      <Word><Letter>S</Letter></Word>
    </Bodyy>
  );
}

export default Body;
