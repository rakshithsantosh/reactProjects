import { useState } from "react"
import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const RoleDice = ({currentDice,roleDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
        <img src={`/images/dice-six-faces-${currentDice}.png`} alt="dice 1" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

.dice {
    cursor: pointer;
    img{

    border-radius: 15px;
}}
`
