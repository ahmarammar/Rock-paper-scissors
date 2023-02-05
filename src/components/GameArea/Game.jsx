import React, { useState } from 'react'
import GameStart from './GameStart';
import WinOrLose from '../Results/WinOrLose';

const Game = () => {
  const [play, setPlay] = useState(false);
  const [userSelection, setUserSelection] = useState("");
  const [houseSelection, setHouseSelection] = useState("");

  const variety = ["rock","paper","scissors"];

  const generateHouseSelection = ( variety ) => {
    let n = Math.floor(Math.random()*3);
    setTimeout(() => {
      setHouseSelection(variety[n]);
    },2000)
  }

  return (
    play ? <WinOrLose setPlay={setPlay} setUserSelection={setUserSelection} setHouseSelection={setHouseSelection} userPicked={userSelection} housePicked={houseSelection} /> : <GameStart setPlay={setPlay} setUserSelection={setUserSelection} variety={variety} generateHouseSelection={generateHouseSelection} />
  )
}

export default Game