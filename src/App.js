import styled from "styled-components";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Welcome from "./Components/Welcome";
import Interests from "./Components/Interests";
import Skills from "./Components/Skills";
import Facts from "./Components/Facts";
import Portfolio from "./Components/Portfolio";
import Xing from "./Components/Xing";
import Github from "./Components/Github";
import LinkToLakritzelHomepage from "./Components/LinkToLakritzelHomepage";
import BlogText from "./Components/BlogText";
import Footer from "./Components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Profile />
      <Welcome />
      <Interests />
      <Skills />
      <Facts />
      <Portfolio />
      <Xing />
      <Github />
      <LinkToLakritzelHomepage />
      <BlogText />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "head head head head"
    "profileArea welcome welcome welcome"
    "profileArea interests skills portfolio"
    "facts xing github lakritzelHomepage"
    "facts blogText blogText blogText"
    "footer footer footer footer";
  grid-gap: 0.2rem;
  text-align: center;
  font-family: "PT Serif", serif;

  @media only screen and (max-width: 850px) {
    width: 375px;
    grid-gap: 5px;
    grid-template-areas:
      "head"
      "profileArea"
      "welcome"
      "interests"
      "skills"
      "portfolio"
      "facts"
      "xing"
      "github"
      "lakritzelHomepage"
      "blogText"
      "footer";
  }
`;

export default App;
