import styled from "styled-components";
import { Headline } from "./Profile";
import { Text } from "./Welcome";
import { Button } from "./Portfolio";

function BlogText() {
  return (
    <Wrapper>
      <Headline>
        Das einzige Steak, das man sich beim Essen versauen kann.
      </Headline>
      <Text>
        Es gibt Hüftsteak, Filetsteak, Rumpsteak, T-Bone Steak, Rib-Eye Steak,
        Tomahawk Steak...
      </Text>
      <a href="https://www.maredo.com/flanksteak-interview-mit-dem-maredo-fleischexperten-martin-ostermeier/">
        <Button type="button">weiterlesen</Button>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: blogText;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media only screen and (max-width: 375px) {
    max-width: 375px;
    margin: 0;
  }
`;

export default BlogText;
