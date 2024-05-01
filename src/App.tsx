import { useState } from "react";
import styled from "styled-components";
import CardFront from "./components/CardFront.tsx";
import CardBack from "./components/CardBack.tsx";

export default function App() {
  const [isFront, setIsFront] = useState<boolean>(true);

  function FlipCardFunc() {
    setIsFront(!isFront)
  }

  return (
    <Container>
      <h1>Card Flip</h1>
      <div>
        <Card
          onClick={FlipCardFunc}
          $isFront = {isFront}
        >
          {isFront ? <CardFront/> : <CardBack/>}
          {/*<CardFront/>*/}
          {/*<CardBack/>*/}
        </Card>
      </div>
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

const Card = styled.div<{ $isFront: boolean }> `
  aspect-ratio: 1 / 1.58;
  background: #fff;
  border-radius: 3%;
  padding: 5% 7%;
  color: slategray;
  cursor: pointer;
  
  transition: transform 0.3s;
  perspective: 800px;
  transform: ${props => props.$isFront ? "rotateY(0deg)" : "rotateY(180deg)" };
  transform-style: preserve-3d;
  //backface-visibility: hidden;
`
