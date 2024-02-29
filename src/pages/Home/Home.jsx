import React from "react";
import Container from "../../components/Container";
import HomeContent from "./components/HomeContent";
import { styled } from "styled-components";

import BigButton from "./components/BigButton";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ImgLogo = styled.img`
  width: 263px;
  height: 130.203px;
  position: absolute;
  top: -60px;
  flex-shrink: 0;
  margin-bottom: 67px;
`;

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <HomeContent>
        <ImgLogo src={"logo.svg"} />
        <BigButton onClick={() => navigate("/Category")}>
          <img src="play.svg" alt="" />
        </BigButton>
        <Button onClick={"/About"} variant={"circular"} danger={true}>
          HOW TO PLAY
        </Button>
      </HomeContent>
    </Container>
  );
}

export default Home;
