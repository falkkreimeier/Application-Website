import styled from "styled-components";

function CVDetailItems() {
  return (
    <>
      <Headline>Details</Headline>
      <Text>
        Falk Kreimeier <br /> Gesundheitstraße 11 <br /> 42699 Solingen <br />
        Tel.: 0152-05639742 <br /> eMail: f.kreimeier@gmx.net
      </Text>
      <Headline>Skills</Headline>
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

const Text = styled.p`
  text-align: left;
  padding: 0px 15px 0px 20px;
  font-size: 0.5rem;
`;

export default CVDetailItems;
