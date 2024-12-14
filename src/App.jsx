import { useEffect, useState } from 'react'
import './App.css'
import { Score } from './components/Score'
import { GameAction } from './components/GameAction'
import { Rules } from './components/Rules'

function App() {
  const [score, setScore] = useState(0)

  const manageScore = (roundResultForUser) => {
    console.log("incoming: ", roundResultForUser)

    if(roundResultForUser === "won") {
      setScore(score + 1)
      return
    }

    if(roundResultForUser === "lost") {
      setScore(prevScore => Math.max(0, prevScore - 1));
      return
    }
    
    return
  }

  console.log("Score: ", score)

  return (
    <>
      <Score score={score}></Score>
      <GameAction manageScore={manageScore} />
      <Rules></Rules>
    </>
  )
}

export default App
