import styled from "styled-components/macro";
import klecks from "../Assets/Kleckse_clean.jpg";

function Welcome() {
  return (
    <Wrapper>
      <Headline>Der Mensch hinter dem Monster</Headline>
      <Text>
        Hi, ich bin Falk, Programmierer, Werbexter und Weltenretter, denn ich
        habe Lakritzel gefangen. <br />
        Das übergeschnapste Tröpfchen raubt unschuldigen Seelen den Verstand,
        lässt sie auf Tischen tanzen, und berauschende Gespräche über das Leben
        führen.
        <br />
        Diese und viele andere meiner vermeintlichen Heldentaten findet ihr
        hier.
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
  @media only screen and (max-width: 800px) {
    margin: 0px 20px 20px 20px;
  }
`;
const Headline = styled.h2`
  font-family: var(--main-Headline);
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  @media only screen and (max-width: 800px) {
    margin: 0px 20px 20px 20px;
    color: black;
  }
`;

export default Welcome;
