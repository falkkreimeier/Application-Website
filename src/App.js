import Kritzelkopf from "./Components/Kritzelkopf";
import styled from "styled-components";
import CVPageOne from "./CVPageOne";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Kritzelkopf />
        </Route>
        <Route exact path="/lebenslauf">
          <CVPageOne />
        </Route>
      </Switch>
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
    "facts techstack linktocv linktocv"
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
