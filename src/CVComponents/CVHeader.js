import styled from "styled-components";

function CVHeader() {
  return (
    <Header>
      <Headline>Falk Kreimeier</Headline>
      <Text>Junior Web Developer</Text>
    </Header>
  );
}

const Header = styled.div`
  position: relative;
  right: 50px;
  background-color: white;
  margin: 20px auto;
  width: 300px;
  height: 130px;
  border: 1px solid black;
  z-index: 20;
`;

const Headline = styled.h2`
  font-family: var(--main-Headline);
  font-size: 2rem;
  margin-left: 70px;
`;

const Text = styled.p`
  margin-top: -30px;
  font-family: var(--main-font);
  font-size: 1.1rem;
  margin-left: 70px;
`;

export default CVHeader;
