import styled from "styled-components/macro";

function CVHeader() {
  return (
    <HeaderEl>
      <Headline>Falk Kreimeier</Headline>
      <Text>Junior Web Developer</Text>
    </HeaderEl>
  );
}

const HeaderEl = styled.div`
  position: relative;
  right: 40px;
  background-color: white;
  margin: 20px auto;
  width: 270px;
  height: 110px;
  border: 1px solid black;
  z-index: 20;
`;

const Headline = styled.h2`
  font-family: var(--main-Headline);
  font-size: 2rem;
  margin-left: 60px;
`;

const Text = styled.p`
  margin-top: -30px;
  font-family: var(--main-font);
  font-size: 1.1rem;
  margin-left: 60px;
`;

export default CVHeader;
