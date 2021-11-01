import styled from "styled-components";

function CVDetailItems() {
  return (
    <>
      <Headline>Details</Headline>
      <Text>
        Tel.: 0152-05639742 <br /> eMail: f.kreimeier@gmx.net
      </Text>
      <Headline>Über mich:</Headline>
      <Text>
        Programmieren gibt mir etwas zurück, was noch kein anderer Job jemals
        geschafft hat: <br /> 1.) Das Gefühl etwas wertvolles und schönes zu
        produzieren. <br /> 2.) Eine tägliche Weiterentwicklung, bei der ich
        jeden Tag Neues lerne. <br /> 3.) Innere Zufriedenheit. <br /> Ich will
        nichts anderes mehr machen.
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
