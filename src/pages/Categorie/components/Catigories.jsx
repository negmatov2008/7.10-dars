import React from "react";
import { styled } from "styled-components";
import Button from "../../../components/Button";

const List = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 16px;
  padding-top: 100px;
`;

function Catigories() {
  return (
    <List>
      <Button variant={"regtengular"} danger={true} onClick={"/Game"}>
        Movie
      </Button>
    </List>
  );
}

export default Catigories;
