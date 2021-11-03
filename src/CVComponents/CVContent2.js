import styled from "styled-components/macro";

function CVContent2() {
  return (
    <>
      <SubHeadline>
        Trainee und Junior Copywriter, TBWA Düsseldorf | <br /> HAVAS Worldwide
      </SubHeadline>
      <Text>
        Aug 2014 - Okt 2016
        <List>
          <ListItem>
            Kampagnenentwikclung Print/Funk/Social Media für Marken, wie:
            CITROEN, CAR2GO und die DEUTSCHE BANK
          </ListItem>
          <ListItem>
            Award: "Goldener MIDAS" für Guerilla Idee "Ihr Geld schmilzt"
          </ListItem>
        </List>
      </Text>

      <SubHeadline>
        Filialleiter/Vermietassistent, Car Partner Nord GmbH | <br /> Trio
        Autovermietung
      </SubHeadline>
      <Text>
        Okt 2001 - Apr 2003
        <List>
          <ListItem>Mitartbeiterführung, Personalmanagement</ListItem>
          <ListItem>Fuhrparkplanung und Disposition</ListItem>
          <ListItem>Neukundenaquise und Kundenbetreuung</ListItem>
          <ListItem>Umsatz und Budjetverantwortung</ListItem>
          <ListItem>
            Operatives Geschäft (Mietvertragerstellung, Schadensaufnahme,
            Schadensmanagement
          </ListItem>
        </List>
      </Text>
      <SubHeadline>
        Ausbildung IT-Systemkaufmann, Systemhaus Erdmann
      </SubHeadline>
      <Text>
        Okt 2001 - Apr 2003
        <List>
          <ListItem>Ermittlung von Benutzeranforderungen</ListItem>
          <ListItem>Planen und Erstellen von Anwendungslösungen</ListItem>
          <ListItem>
            Einkaufpreise einholen und Verkaufsangebote erstellen
          </ListItem>
          <ListItem>Kundenberatung</ListItem>
        </List>
      </Text>
    </>
  );
}

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

export default CVContent2;
