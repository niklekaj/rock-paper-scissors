import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Score } from './components/Score'
import { GameAction } from './components/GameAction'
import { Rules } from './components/Rules'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Score></Score>
      <GameAction></GameAction>
      <Rules></Rules>
    </>
  )
}

export default App
