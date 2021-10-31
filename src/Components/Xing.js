import styled from "styled-components";
import Xingimg from "../Assets/xing.svg";

function Xing() {
  return (
    <Wrapper href="https://www.xing.com/profile/falk_kreimeier">
      <Img src={Xingimg} alt="Mein Xing Profil" />
    </Wrapper>
  );
}

export const Img = styled.img`
  position: sticky;
  height: 40px;
`;

const Wrapper = styled.a`
  grid-area: xing;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: var(--border-radius);
  padding: 10px;
  margin-top: 5px;
  transform: translateY(-4px);
  &:hover {
    background-color: lightgrey;
  }
  &:active {
    transform: translateY(-0px);
    transition: 0.1s;
  }
`;

export default Xing;
