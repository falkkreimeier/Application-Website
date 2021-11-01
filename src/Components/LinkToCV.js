import styled from "styled-components";
import { Link } from "react-router-dom";
import klecks from "../Assets/Kleckse_clean.jpg";

function LinkToCV() {
  return (
    <Wrapper>
      <Headline>Mein Lebenslauf</Headline>
      <Text>
        Werbetexter, Autovermieter, Schnapshändler, IT-Systemkaufmann und jetzt
        Programmierer. <br /> <br /> Mann könnte sagen, ich haben viele Seiten
        und das hier ist eine davon. Alle anderen findet ihr in meinem
        Lebenslauf:
      </Text>
      <LinkToCV1 to="/Lebenslauf1">Zu meinem Lebenslauf</LinkToCV1>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: -3px;
  grid-area: linktocv;
  border-radius: var(--border-radius);
  background-color: white;
  @media only screen and (max-width: 800px) {
    min-height: 352px;
    background-color: white;
    color: white;
    background-image: url(${klecks});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 21rem;
    height: 250px;
  }
`;

const Headline = styled.h2`
  margin-bottom: -20px;
  font-family: var(--main-Headline);
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  @media only screen and (max-width: 800px) {
    margin-top: 40px;
  }
`;

const Text = styled.p`
  padding: 20px;
  font-size: 13px;
  font-family: var(--main-font);
  @media only screen and (max-width: 800px) {
    padding: 20px 70px;
  }
`;

const LinkToCV1 = styled(Link)`
  margin: 30px;
  text-decoration: none;
  color: white;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
  border-radius: 40px;
  background-color: black;
  font-family: var(--main-font);
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
  @media only screen and (max-width: 800px) {
    background-color: white;
    color: black;
    box-shadow: 0 14px 8px white;
    &:active {
      box-shadow: 0 2px 4px white;
      transform: translateY(-0px);
      transition: 0.1s;
    }
  }
`;

export default LinkToCV;
