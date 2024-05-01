import styled from "styled-components";

export default function CardFront() {
  return (
    <FrontCont className="card-front">
      <FrontTop>
        <CardTitle>BlahBlahCard</CardTitle>
        <Chip></Chip>
      </FrontTop>
      <FrontBot>
        <CardName>ZERO</CardName>
        <CardMeta>Edition 2</CardMeta>
      </FrontBot>
    </FrontCont>
  )
}

const FrontCont = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //height: 100%;
  font-size: 120%;
`
const FrontTop = styled.div`
  display: flex;
  //flex-direction: column;
  gap: 5%;
  width: 100%;
`
export const CardTitle = styled.div`
  font-weight: bold;
  color: #143f72;
`
const Chip = styled.div `
  margin-top: 15%;
  width: 18%;
  aspect-ratio: 1 / 1.3;
  border-radius: 20%;
  background: #b6c1cb;
`

const FrontBot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40%;
`

const CardName = styled.div`
  font-size: 300%;
  font-weight: bold;
  color: #b6c1cb;
`

const CardMeta = styled.div`
  font-size: 80%;
`