import styled from "styled-components";

function CVContent() {
  return (
    <>
      <Headline>Employment Hystory</Headline>
      <SubHeadline>Trainee Web-Developer, neuefische</SubHeadline>
      <Text>
        Aug 2021 - Nov201 <br /> Bootcamp zum Web-Developer mit den Inhalten:
        <br /> HTML, CSS, JAVASCRIPT, REACT, GIT & GITHUB, NODE.JS, FIGMA,
        MONGODB, MONGOOSE, STORYBOOK, EXPRESSJS <br /> Gesellenstück:
        Entwicklung eines Onlineshops für meinen Lakritzschnaps.
      </Text>

      <SubHeadline>Copywriter/Redakteur, 12/05 Solutions</SubHeadline>
      <Text>
        Aug 2020 - Feb 2021
        <List>
          <ListItem>
            SEO Texterstellung von Blobs und Websites für Volov, Toyoto,
            Stadtwerke Solingen, Olaf Jansen Immobilien
          </ListItem>
          <ListItem>
            SEA Keyword Erstellung für Google Adwords Anzeigen
          </ListItem>
          <ListItem>
            US Texte für die interne Untenehemenskommunikation
          </ListItem>
          <ListItem>Social Media Pläne und Content-Entwicklung</ListItem>
          <ListItem>Kundenpräsentation</ListItem>
        </List>
      </Text>
      <SubHeadline>Copywriter, Supersieben</SubHeadline>
      <Text>
        Feb 2020 - Aug 2021
        <List>
          <ListItem>
            Kampanenentwicklung Funk, Print und Social Media für NETCOLOGNE und
            MAREDO
          </ListItem>
          <ListItem>SEO Texterstellung und Recherche für Blogbeiträge</ListItem>
          <ListItem>Social Media Pläne und Content-Entwicklung</ListItem>
          <ListItem>SEA Keyword Erstellung für Google Adword Anzeigen</ListItem>
          <ListItem>Kuindenmailings, Flyer und Brochürentexte</ListItem>
        </List>
      </Text>

      <SubHeadline>Copywriter, Brand Lounge GmbH</SubHeadline>
      <Text>
        Feb 2017 - Jan 2020
        <List>
          <ListItem>Ermittlung von Benutzeranforderungen</ListItem>
          <ListItem>Planen und Erstellen von Anwendungslösungen</ListItem>
          <ListItem>
            Einkaufspreise einholen, Verkaufsangebote erstellen
          </ListItem>
          <ListItem>Verpackungsdruck</ListItem>
          <ListItem>
            Funk-Erfahrung: Idee, Sprechercasting, Produktion im Studio
          </ListItem>
        </List>
      </Text>
    </>
  );
}

const Headline = styled.h2`
  text-align: left;
  margin: -2px 0px 0px 10px;
  width: 300px;
  font-size: 0.9rem;
  font-family: var(--main-Headline);
  border-bottom: 1px solid black;
`;

const SubHeadline = styled.h2`
  text-align: left;
  margin: 5px 0px 0px 10px;
  width: 300px;
  font-size: 0.7rem;
  font-family: var(--main-Headline);
`;

const Text = styled.p`
  text-align: left;
  margin: 0px 10px;
  font-family: var(--main-font);
  font-size: 0.6rem;
`;

const List = styled.ul`
  margin: 0px 0px 10px -25px;
`;

const ListItem = styled.li``;

export default CVContent;
