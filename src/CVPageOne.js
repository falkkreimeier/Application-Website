import styled from "styled-components";
import Profilimg from "./Assets/Profilbild.jpg";
import CVSkillList from "./CVSkillList";
import CVDetailItems from "./CVDetailItems";
import CVHeader from "./CVHeader";
import CVContent from "./CVContent";

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

      <Cv>
        <CVHeader />
        <CVContent />
      </Cv>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: black;
  display: grid;
  grid-gap: 0px;
  grid-template-areas:
    "details test"
    "details test"
    "details test"
    "details test";
  background-color: white;
  height: 100%;
  width: 100%;
`;

const Details = styled.div`
  margin: 0 auto;
  width: 200px;
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

const Cv = styled.div`
  background-color: white;
  grid-area: test;
  width: 300px;
`;

export default CVPageOne;
