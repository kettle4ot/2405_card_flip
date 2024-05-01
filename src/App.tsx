import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [count, setCount] = useState<boolean>(false);

  function FlipCardFunc() {
    count ? setCount(false) : setCount(true);
  }

  return (
    <Container>
      <h1>Card Flip</h1>
      <Card
        onClick={FlipCardFunc}
        $count = {count}
      >
        {count ? "앞면" : "뒷면"}
      </Card>
      <p>
        Click and Flip!
      </p>
    </Container>
  );
}

const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 320px;
  overflow: hidden;
`

const Card = styled.div<{ $count: boolean }>`
  background: ${(props) => (props.$count ? "green" : "pink")}
`;
