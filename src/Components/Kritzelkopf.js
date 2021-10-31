import styled from "styled-components/macro";
import Header from "./Header";
import Profile from "./Profile";
import Welcome from "./Welcome";
import Interests from "./Interests";
import Skills from "./Skills";
import Facts from "./Facts";
import Portfolio from "./Portfolio";
import Xing from "./Xing";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import TechStack from "./TechStack";
import Footer from "./Footer";
import CV from "./CV";

function Kritzelkopf() {
  return (
    <>
      <Header />
      <Profile />
      <Welcome />
      <Interests />
      <Skills />
      <Facts />
      <Portfolio />
      <TechStack />
      <CV />
      <Xing />
      <Github />
      <LinkedIn />
      <Footer />
    </>
  );
}

export default Kritzelkopf;
