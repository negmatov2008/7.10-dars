import { styled } from "styled-components";

const Container = styled.div`
  height: 100%;
  padding-block: 206px;
  padding-inline: 25px;
  max-width: ${(props) => props.theme.size.phone}px;
  background: url(${(props) => props.theme.bg.phone}) no-repeat center/cover;
 
`;

export default Container;
