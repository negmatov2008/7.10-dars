import { styled } from "styled-components";

const BigButton = styled.button`
  width: 160px;
  height: 160px;
  flex-shrink: 0;
  margin-top: 138px;
  border-radius: 999px;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9d2df5 inset;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 57px;
  border: none;
  transition: all 300ms;

  &:hover,:active {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  }
`;

export default BigButton;
