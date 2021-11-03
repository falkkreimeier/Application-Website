import styled from "styled-components/macro";
import Profilimg from "../Assets/Profilbild.jpg";
import CVSkillList from "../CVComponents/CVSkillList";
import CVDetailItems from "../CVComponents/CVDetailItems";
import CVHeader from "../CVComponents/CVHeader";
import CVContent from "../CVComponents/CVContent";
import { Link } from "react-router-dom";

function CVPageOne() {
  return (
    <Wrapper>
      <Details>
        <Image src={Profilimg} alt="" />
        <DetailItemsContainer>
          <CVDetailItems />
        </DetailItemsContainer>
        <CVSkillList />
      </Details>

      <Content>
        <CVHeader />
        <CVContent />
        <LinkToMainPage to="/">Hauptseite</LinkToMainPage>
        <LinkToPageTwo to="/lebenslauf2">Seite 2</LinkToPageTwo>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 430px;
  margin: 0 auto;
  background-color: black;
  display: grid;
  grid-template-areas: "details content1";
`;

const Details = styled.div`
  margin: 0 auto;
  grid-area: details;
  border-radius: var(border-radius);
  background-color: lightgrey;
`;

const DetailItemsContainer = styled.div`
  margin-top: 40px;
`;

const Image = styled.img`
  height: 80px;
  border-radius: 50%;
  margin: 35px 25px -10px 20px;
`;

const Content = styled.div`
  margin-top: -10px;
  background-color: white;
  grid-area: content1;
`;

const LinkToPageTwo = styled(Link)`
  position: relative;
  top: 67px;
  left: 160px;
  padding: 0 5px 0 5px;
  text-decoration: none;
  color: white;
  text-decoration: none;
  border: 1px solid black;
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

const LinkToMainPage = styled(Link)`
  position: relative;
  top: 67px;
  left: 140px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: white;
  text-decoration: none;
  border: 1px solid black;
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

export default CVPageOne;
