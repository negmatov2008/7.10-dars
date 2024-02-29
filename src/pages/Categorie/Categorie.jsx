import React from "react";
import { styled } from "styled-components";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Catigories from "./components/Catigories";

const CategoryContainer = styled(Container)`
  padding-block: 32px;
  background: ${(props) => props.theme.backraund},
    url(${(props) => props.theme.bg.phone}) no-repeat center/cover;
`;

function Categorie() {
  return (
    <CategoryContainer>
      <Header text={"Pick a Category"} click={"/"} img={"back.svg"} />
      <Catigories />
    </CategoryContainer>
  );
}

export default Categorie;
