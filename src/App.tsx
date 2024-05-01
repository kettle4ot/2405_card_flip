import { useState } from "react";
import styled from "styled-components";
import CardFront from "./components/CardFront.tsx";
import CardBack from "./components/CardBack.tsx";

export default function App() {
  // true: front side
  const [count, setCount] = useState<boolean>(true);

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
          {count ? <CardFront/> : <CardBack/>}
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
  min-width: 280px;
  overflow: hidden;
  text-align: center;
`

const Card = styled.div<{ $count: boolean }> `
  aspect-ratio: 1 / 1.58;
  background: #fff;
  border-radius: 3%;
  padding: 5% 7%;
  color: slategray;
  cursor: pointer;
`

// const Card = styled.div<{ $count: boolean }>`
  //width: 100%;
  //height: 100%;
  // background: ${(props) => (props.$count ? "#82cbac" : "pink")};
// `;
