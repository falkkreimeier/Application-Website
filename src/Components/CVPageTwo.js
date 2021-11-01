import styled from "styled-components";
import CVContent2 from "../CVComponents/CVContent2";
import CVDetailItems2 from "../CVComponents/CVDetailItems2";
import { Link } from "react-router-dom";

function CVPageTwo() {
  return (
    <Wrapper>
      <Details>
        <DetailItemsContainer>
          <CVDetailItems2 />
        </DetailItemsContainer>
      </Details>

      <Content>
        <CVContent2 />
        <LinkToPageOne to="/lebenslauf1">Seite 1</LinkToPageOne>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  background-color: black;
  height: 720px;
  max-width: 510px;
  display: grid;
  grid-gap: 0px;
  grid-template-areas: "details content2";
  background-color: white;
  width: 100%;
`;

const Details = styled.div`
  width: 200px;
  grid-area: details;
  border-radius: var(border-radius);
  background-color: lightgrey;
`;

const DetailItemsContainer = styled.div`
  margin-top: 40px;
`;

const Content = styled.div`
  background-color: white;
  grid-area: content2;
  width: 320px;
`;

const LinkToPageOne = styled(Link)`
  position: relative;
  top: 330px;
  left: 210px;
  text-decoration: none;
  color: white;
  width: 130px;
  border: 1px solid black;
  padding: 0 5px 0 5px;
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
`;

export default CVPageTwo;
