import styled from "styled-components/macro";

function Skills() {
  return (
    <Wrapper>
      <Headline>Fähigkeiten</Headline>
      <List>
        <ListItem>Web Developer</ListItem>
        <ListItem>Werbetexten</ListItem>
        <ListItem>Recherche</ListItem>
        <ListItem>Ikea Schränke augbauen</ListItem>
        <ListItem>Grillen</ListItem>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 220px;
  grid-area: skills;
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media only screen and (max-width: 800px) {
    min-width: 420px;
  }
`;

const Headline = styled.h2`
  font-family: var(--main-Headline);
  margin-top: 10px;
  font-size: 1.3rem;
`;

const List = styled.ol`
  margin: -10px 0 0 -30px;
  @media only screen and(max-width: 800px) {
    margin: -10px 0 10px 0px;
  }
`;

const ListItem = styled.li`
  text-align: left;
  font-family: var(--main-font);
  margin-left: 20px;
`;

export default Skills;
