import React from "react";
import { styled } from "styled-components";
import Container from "../../components/Container";
import Header from "../../components/Header";
import List from "./components/List";

const AbouContainer = styled(Container)`
  padding-block: 32px;
  background: ${(props) => props.theme.backraund},
    url(${(props) => props.theme.bg.phone}) no-repeat center/cover;
`;

function About() {
  return (
    <AbouContainer>
      <Header img={"back.svg"} text={"How to Play"} click={"/"} />
      <List />
    </AbouContainer>
  );
}

export default About;
