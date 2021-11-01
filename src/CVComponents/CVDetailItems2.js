import styled from "styled-components";

function CVDetailItems2() {
  return (
    <>
      <Headline>Weiterbildung und Schule</Headline>
      <SubHeadline> Diplom Copywriter, Kretivkader</SubHeadline>
      <Text>
        Sep 2014 - Sep 2015 <br /> Duale Ausbildung/Studium zum Werbetexter
      </Text>
      <SubHeadline>Schule</SubHeadline>
      <Text>
        Geschwister Scholl Gesamtschule <br /> Abschluss: Abitur
      </Text>
    </>
  );
}

const Headline = styled.h2`
  text-align: left;
  border-bottom: 1px solid black;
  width: 140px;
  margin-left: 20px;
  font-size: 0.8em;
`;

const SubHeadline = styled.h2`
  text-align: left;
  margin: 0 0 -10px 20px;
  width: 300px;
  font-size: 0.7rem;
  font-family: var(--main-Headline);
`;

const Text = styled.p`
  text-align: left;
  padding: 0px 15px 0px 20px;
  font-size: 0.5rem;
`;

export default CVDetailItems2;
