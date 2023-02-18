import React, { useState } from 'react'
import Game from './Game'
import Header from '../Header/Header'
import RulesButton from '../Rules/RulesButton'


const GameView = ({showRules}) => {

  const [winner, setWinner] = useState("");

  const handleRules = () => {
    showRules();
  }

  const handleScore = (win) => {
    setWinner(win);
  }

  return (
    <div className='min-h-screen p-9 md:p-12 bg-gradient-to-b from-bgFirst to-bgSecond'>
        <div className='max-w-xs mx-auto relative'>
          <div className='flex flex-col'>
            <Header winner={winner} />
            <Game manageScore={handleScore} setWinner={setWinner}/>
          </div>
          <RulesButton handleRules={handleRules} />
        </div>
    </div>
  )
}

export default GameView