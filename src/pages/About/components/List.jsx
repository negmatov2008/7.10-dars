import React from "react";
import { styled } from "styled-components";

const Listd = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 100%;
  margin-top: 79px;
`;

const Cont = styled.li`
  padding: 32px;
  background-color: white;
  border-radius: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;
const Number = styled.span`
  color: var(--Blue, #2463ff);
  font-family: "Mouse Memoirs";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 28.8px */
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Heding = styled.h4`
  color: var(--Dark-Navy, #261676);
  font-family: "Mouse Memoirs";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 28.8px */
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Paragaph = styled.p`
  color: #887dc0;
  font-family: "Mouse Memoirs";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  letter-spacing: 0.8px;
  align-self: stretch;
`;

const data = [
  {
    id: 1,
    title: "Choose a category",
    p: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    id: 2,
    title: "Guess letters",
    p: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If its wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    id: 3,
    title: "Win or lose",
    p: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];
function List() {
  return (
    <Listd>
      {data.map((e) => (
        <Cont key={e.id}>
          <Top>
            <Number>0{e.id}</Number>
            <Heding>{e.title}</Heding>
          </Top>
          <Paragaph>{e.p}</Paragaph>
        </Cont>
      ))}
    </Listd>
  );
}

export default List;
