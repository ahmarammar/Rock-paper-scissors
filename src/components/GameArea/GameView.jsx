import React from 'react'
import Game from './Game'
import Header from '../Header/Header'
import RulesButton from '../Rules/RulesButton'


const GameView = ({showRules}) => {

  const handleRules = () => {
    showRules();
  }

  return (
    <div className='min-h-screen p-12 bg-gradient-to-b from-bgFirst to-bgSecond'>
        <div className='max-w-xs mx-auto relative'>
          <div className='flex flex-col'>
            <Header />
            <Game />
          </div>
          <RulesButton handleRules={handleRules} />
        </div>
    </div>
  )
}

export default GameView