import React from "react";
import { useNavigate } from "react-router-dom";
import { css, styled } from "styled-components";

const ButtonStyle = styled.button`
  color: white;

  color: var(--White, #fff);
  text-align: center;

  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 38.4px */

  text-transform: uppercase;
  transition: all 300ms;
  background: ${(props) =>
    props.danger
      ? "#2463FF"
      : "var(--Pink-Gradient, linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%))"};

  box-shadow: ${(props) =>
    props.danger
      ? "0px 1px 0px 6px #3C74FF inset, 0px -2px 0px 3px #140E66 inset"
      : "0px 1px 0px 6px #C642FB inset, 0px -2px 0px 3px #140E66 inset"};

  ${(props) =>
    props.variant == "circular"
      ? css`
          padding-inline: 64px;
          padding-block: 12px;
          border-radius: 40px;
          font-size: 32px;
        `
      : props.variant == "regtengular"
      ? css`
          max-width: 100%;
          padding-block: 24px;
          border-radius: 20px;
          font-size: 24px;
        `
      : ""}

  &:hover {
    background: ${(props) =>
      props.danger
        ? "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), #2463FF"
        : "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)"};
  }
`;

function Button({ children, variant, danger, onClick }) {
  const navegate = useNavigate();
  return (
    <ButtonStyle
      onClick={() => navegate(onClick)}
      variant={variant}
      danger={danger}
    >
      {children}
    </ButtonStyle>
  );
}

export default Button;
