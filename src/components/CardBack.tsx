import styled from "styled-components";

export default function CardBack() {
  return (
    <BackCont className="card-back">
      <BackLeft>
      </BackLeft>
      <BackRight>
        <BackRightBot>
          <CardTitle>BlahBlahCard</CardTitle>
          <div>
            <div>0000</div>
            <div>0000</div>
            <div>0000</div>
            <div>0000</div>
          </div>
        </BackRightBot>
        <div>back side</div>
      </BackRight>
    </BackCont>
  )
}

const BackCont = styled.div `
  display: flex;
  justify-content: space-between;
  font-size: 120%;
  transform: rotateY(180deg);;
`

const BackLeft = styled.div`
  width: 25%;
  margin: -5.3% 4%;
  background: #b6c1cb;
`
export const CardTitle = styled.div`
  font-weight: bold;
  color: #143f72;
`

const BackRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

const BackRightBot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-weight: bold;
  color: #b6c1cb;
`