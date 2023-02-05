import React from 'react'
import triangle from "../../assets/images/bg-triangle.svg"
import Rock from './PickItems/Rock'
import Paper from './PickItems/Paper'
import Scissors from './PickItems/Scissors'

const Game = () => {
  return (
    <div className='flex justify-center mt-40 relative'>
      <img src={triangle} alt="" className='h-56'/>
        <Rock />
        <Paper />
        <Scissors />
    </div>
  )
}

export default Game