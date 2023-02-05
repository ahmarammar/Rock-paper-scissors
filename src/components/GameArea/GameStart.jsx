import React from 'react'
import triangle from "../../assets/images/bg-triangle.svg"
import Rock from './PickItems/Rock'
import Paper from './PickItems/Paper'
import Scissors from './PickItems/Scissors'

const GameStart = ({ setPlay, setUserSelection, generateHouseSelection, variety }) => {

  const handlePlay = () => {
    setPlay(true);
    generateHouseSelection(variety);
  }


  return (
    <div className='flex justify-center mt-40 relative min-h-[14rem]'>
      <img src={triangle} alt="" className='h-56'/>
        <Rock handlePlay={handlePlay} setUserSelection={setUserSelection}/>
        <Paper handlePlay={handlePlay} setUserSelection={setUserSelection}/>
        <Scissors handlePlay={handlePlay} setUserSelection={setUserSelection}/>
    </div>
  )
}

export default GameStart