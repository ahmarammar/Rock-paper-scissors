import React from 'react'
import Game from './GameArea/Game'
import Header from './Header/Header'
import Rules from './Rules'

const MainView = () => {
  return (
    <div className='min-h-screen p-12 bg-gradient-to-b from-bgFirst to-bgSecond'>
      <div className='max-w-md mx-auto relative'>
        <div className='flex flex-col'>
          <Header />
          <Game />
        </div>
        <Rules />
      </div>
    </div>
  )
}

export default MainView