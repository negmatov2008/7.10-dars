import React from "react";
import { styled } from "styled-components";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const Keybordd = styled.div`
  display: flex;
  max-width: 100%;
  gap: 16px;
  justify-content: center;
  margin-top: 118px;

  flex-wrap: wrap;
`;

const Key = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 56px;
  border-radius: 8px;
  background: var(--White, #fff);
  color: var(--Dark-Navy, #261676);
  text-align: center;
  font-family: "Mouse Memoirs";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  &:disabled {
    border-radius: 8px;
    opacity: 0.25;
    background: var(--White, #fff);
  }
`;

function Keybord() {
  return (
    <Keybordd>
      {alphabet.map((l) => (
        <Key  key={l}>{l}</Key>
      ))}
    </Keybordd>
  );
}

export default Keybord;
