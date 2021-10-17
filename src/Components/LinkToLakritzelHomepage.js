import styled from "styled-components";
import Lakritzelimg from "../img/Lakritzel-Logo.svg";
import { Img } from "./Github";

function LinkToLakritzelHomepage() {
  return (
    <Wrapper href="https://lakritzel.com">
      <Img src={Lakritzelimg} alt="Lakritzel, mein Schnaps" />
    </Wrapper>
  );
}

const Wrapper = styled.a`
  grid-area: lakritzelHomepage;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: var(--border-radius);
  min-width: var(--main-width);
  padding: 10px;
  &:hover {
    background: #d4d4d4;
  }
`;

export default LinkToLakritzelHomepage;
