import styled from "styled-components";
import Profilimg from "../Assets/Profilbild.jpg";
import CVSkillList from "../CVComponents/CVSkillList";
import CVDetailItems from "../CVComponents/CVDetailItems";
import CVHeader from "../CVComponents/CVHeader";
import CVContent from "../CVComponents/CVContent";
import { Link } from "react-router-dom";

function CVPageOne() {
  return (
    <Wrapper>
      <LinkToMainPage to="/">Zurück</LinkToMainPage>
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
        <LinkToPageTwo to="/lebenslauf2">Seite 2</LinkToPageTwo>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  background-color: black;
  display: grid;
  max-width: 510px;
  grid-template-areas: "details content1";
  background-color: white;
  height: 720px;
  width: 100%;
`;

const Details = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 720px;
  grid-area: details;
  border-radius: var(border-radius);
  background-color: lightgrey;
`;

const DetailItemsContainer = styled.div`
  margin-top: 40px;
`;

const Image = styled.img`
  margin: 40px 30px 0px 0px;
  height: 110px;
  border-radius: 50%;
  margin: 35px 0 -10px 20px;
`;

const Content = styled.div`
  background-color: white;
  grid-area: content1;
  height: 720px;
  width: 300px;
  margin-bottom: 25px;
`;

const LinkToPageTwo = styled(Link)`
  position: relative;
  top: 10px;
  left: 200px;
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
  bottom: 735px;
  left: 10px;
  width: 60px;
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
