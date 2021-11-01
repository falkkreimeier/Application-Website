import styled from "styled-components/macro";
import klecks from "../Assets/Kleckse_clean.jpg";

function Welcome() {
  return (
    <Wrapper>
      <Headline>Der Mensch hinter dem Monster</Headline>
      <Text>
        40 lange Jahre habe ich geglaubt, dass jeder, der sagt: "Ich liebe
        meinen Job!", lügt. <br /> <br />
        Ich habe mich geirrt, denn ich bin ins kalte Wasser gesprungen und im
        Talentpool von neuefische gelandet. Hier habe ich das Programmieren für
        mich entdeckt, und auch, wenn ich noch ein kleiner Fisch bin.
        <br />
        <br />
        Ich möchte in meinem Leben nichts anderes mehr machen.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-area: welcome;
  background-color: white;
  color: black;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media only screen and (max-width: 800px) {
    min-height: 352px;
    background-color: white;
    color: white;
    background-image: url(${klecks});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 21rem;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  font-family: var(--main-font);
  margin: -10px 20px 20px 20px;
  @media only screen and (max-width: 800px) {
    margin: -10px 20px 20px 20px;
    padding: 0 40px;
  }
`;

const Headline = styled.h2`
  font-family: var(--main-Headline);
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  @media only screen and (max-width: 800px) {
    margin: 35px 20px 20px 20px;
    color: white;
  }
`;

export default Welcome;
