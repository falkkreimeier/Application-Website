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
  height: 90px;
  border-radius: 50%;
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
  text-decoration: none;
  color: white;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
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
