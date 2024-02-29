import React from "react";
import { styled } from "styled-components";
import Container from "../../components/Container";
import GameHeader from "./components/GameHeader";
import Body from "./components/Body";
import Keybord from "./components/Keybord";

const GameContainer = styled(Container)`
  padding-block: 32px;
  background: ${(props) => props.theme.backraund},
    url(${(props) => props.theme.bg.phone}) no-repeat center/cover;
  margin-bottom: 92px;
`;

function Game() {
  return (
    <GameContainer>
      <GameHeader />
      <Body />
      <Keybord />
    </GameContainer>
  );
}

export default Game;
