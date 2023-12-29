import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"

const GamePlay = () => {
    const [selectedNumber,setSelectedNumber] = useState()
    const [currentDice,setCurrentDice] = useState(1)
    const [score,setScore] = useState(0)
    const [error,setError] = useState("")
    
    const generateRandomNumber = () =>{
        return Math.floor(Math.random()*(7-1)+1);
    }
    const roleDice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number")
            return
        }

        const randomNumber = generateRandomNumber()
        setCurrentDice((prev)=>randomNumber)

        if(selectedNumber==randomNumber){
            setScore((prev)=>prev +randomNumber)
        }
        else{
            setScore((prev)=>prev-2)
        }
        setSelectedNumber(undefined)
    }


  return (
    <MainContainer>
        <div className="topSection">
        <TotalScore score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
padding-top: 5
0px;
.topSection{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`
