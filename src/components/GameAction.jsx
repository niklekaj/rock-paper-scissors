import { useEffect, useState } from 'react'
import './GameAction.css'
import RockIcon from '../../images/icon-rock.svg'
import PaperIcon from '../../images/icon-paper.svg'
import ScissorsIcon from '../../images/icon-scissors.svg'
import TriangleIcon from '../../images/bg-triangle.svg'

export function GameAction({ manageScore }) {
  const [userSelection, setUserSelection] = useState(null)
  const [computerRandomSelection, setComputerRandomSelection] = useState(null)
  const [gameStatus, setGameStatus] = useState("play")

  const getComputerRandomSelection = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex]
  }

  const handleSelections = (usersCurrentSelection) => {
    const computerSelection = getComputerRandomSelection()

    setUserSelection(usersCurrentSelection)
    setComputerRandomSelection(computerSelection)
  }

  const updateGameStatus = (status) => {
    setGameStatus(status);
    manageScore(status);
  };

  useEffect(() => {
    if (userSelection && computerRandomSelection) {
      if (userSelection === computerRandomSelection) {
        updateGameStatus("drew")
      } else if (
        (userSelection === 'rock' && computerRandomSelection === 'scissors') ||
        (userSelection === 'paper' && computerRandomSelection === 'rock') ||
        (userSelection === 'scissors' && computerRandomSelection === 'paper')
      ) {
        updateGameStatus("won")
      } else {
        updateGameStatus("lost")
      }
    }
  }, [userSelection, computerRandomSelection]);

  console.log("GS: ", gameStatus)

  return (
    <>
      {/* game start */}
      {gameStatus === 'play' && (
        <div className='game-start'>
          <div>
            <img src={RockIcon} onClick={() => handleSelections("rock")} />
          </div>
          <div>
            <img src={PaperIcon} onClick={() => handleSelections("paper")} />
          </div>
          <div>
            <img src={ScissorsIcon} onClick={() => handleSelections("scissors")} />
          </div>
        </div>
      )}

      {/* user and computer selection */}
      {gameStatus !== 'play' && (
        <>
        <div className='game-result'>
          <div className='user'>
            <div className='selection-label'>
                You picked:
            </div>
            {userSelection === 'rock' && <div><img src={RockIcon} /></div>}
            {userSelection === 'paper' && <div><img src={PaperIcon} /></div>}
            {userSelection === 'scissors' && <div><img src={ScissorsIcon} /></div>}
          </div>

          <div className='computer'>
            <div className='selection-label'>
             The house picked:
            </div>
            {computerRandomSelection === 'rock' && <div><img src={RockIcon} /></div>}
            {computerRandomSelection === 'paper' && <div><img src={PaperIcon} /></div>}
            {computerRandomSelection === 'scissors' && <div><img src={ScissorsIcon} /></div>}
          </div>
        </div>
        <div>
            You {gameStatus}
        </div>
        </>
      )}
    </>
  )
}
