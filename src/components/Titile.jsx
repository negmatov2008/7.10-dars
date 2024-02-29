import React from "react";
import { styled } from "styled-components";

const Titilee = styled.h2`
  text-align: center;
  -webkit-text-stroke-width: 4;
  -webkit-text-stroke-color: #243041;
  font-size: ${(props) => (props.danger == "bor" ? "40px" : "48px")};
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 57.6px */
  letter-spacing: 2.4px;
  background: linear-gradient(180deg, #67b6ff 16.42%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Titile({ text, danger }) {
  return <Titilee danger={danger}>{text}</Titilee>;
}

export default Titile;
