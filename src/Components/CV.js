import styled from "styled-components";

function CV() {
  return <Wrapper>Lebenslauf</Wrapper>;
}

const Wrapper = styled.section`
  margin-top: -3px;
  grid-area: cv;
  border-radius: var(--border-radius);
  background-color: white;
`;

export default CV;
