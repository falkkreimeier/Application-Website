import styled from "styled-components";

function LinkToCV() {
  return <Wrapper>Lebenslauf</Wrapper>;
}

const Wrapper = styled.section`
  margin-top: -3px;
  grid-area: linktocv;
  border-radius: var(--border-radius);
  background-color: white;
`;

export default LinkToCV;
