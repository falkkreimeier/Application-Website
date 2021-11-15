import Kritzelkopf from "./Components/Kritzelkopf";
import styled from "styled-components";
import CVPageOne from "./Components/CVPageOne";
import CVPageTwo from "./Components/CVPageTwo";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Kritzelkopf />
        </Route>
        <Route exact path="/lebenslauf1">
          <CVPageOne />
        </Route>
        <Route exact path="/lebenslauf2">
          <CVPageTwo />
        </Route>
      </Switch>
    </Container>
  );
}

const Container = styled.section`
  margin: 0 auto;
  height: 100vh;
  max-width: 1000px;
`;

export default App;
