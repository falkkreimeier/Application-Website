import Kritzelkopf from "./Components/Kritzelkopf";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Kritzelkopf />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 1000px;
  display: grid;
  grid-template-areas:
    "header header header header"
    "profile welcome welcome welcome"
    "profile interests skills portfolio"
    "facts xing github linkedin"
    "facts techstack cv cv"
    "footer footer footer footer";
  grid-gap: 0.2rem;
  text-align: center;
  font-family: "PT Serif", serif;

  @media only screen and (max-width: 800px) {
    width: 375px;
    grid-gap: 5px;
    grid-template-areas:
      "header"
      "profile"
      "welcome"
      "interests"
      "facts"
      "skills"
      "portfolio"
      "cv"
      "techstack"
      "xing"
      "github"
      "linkedin"
      "footer";
  }
`;

export default App;
