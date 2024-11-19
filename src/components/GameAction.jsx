import { useEffect, useState } from 'react'
// import './App.css'
import RockIcon from '../../images/icon-rock.svg'
import PaperIcon from '../../images/icon-paper.svg'
import ScissorsIcon from '../../images/icon-scissors.svg'

export function GameAction({ manageScore }) {
  const [userSelection, setUserSelection] = useState(null)
  const [computerRandomSelection, setComputerRandomSelection] = useState(null)
  const [gameStatus, setGameStatus] = useState("playing")

  const getComputerRandomSelection = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex]
  }

  const handleSelections = (usersCurrentSelection) => {
    const computerSelection = getComputerRandomSelection()

    setUserSelection(usersCurrentSelection)
    setComputerRandomSelection(computerRandomSelection)

    console.log("status: ", usersCurrentSelection, computerSelection, gameStatus)
    
    if(usersCurrentSelection === computerSelection) {
        updateGameStatus("drew")
        return
    }

    if(usersCurrentSelection == 'rock') {
        if(computerSelection == 'paper') {
            updateGameStatus("lost")
            return
        }

        updateGameStatus('won')
        return        
    }

    if(usersCurrentSelection == 'paper') {
        if(computerSelection == 'scissors') {
            updateGameStatus("lost")
            return
        }

        updateGameStatus('won')
        return  
    }

    if(usersCurrentSelection == 'scissors') {
        if(computerSelection == 'rock') {
            updateGameStatus("lost")
            return
        }

        updateGameStatus('won')
        return  
    }
  }

  const updateGameStatus = (status) => {
    setGameStatus(status);
    manageScore(status);
  };

  console.log("GS: ", gameStatus)

  return (
    <>
    <img src={RockIcon} onClick={() => handleSelections("rock")} />
    <img src={PaperIcon} onClick={() => handleSelections("paper")}/>
    <img src={ScissorsIcon} onClick={() => handleSelections("scissors")}/>
    </>
  )
}
