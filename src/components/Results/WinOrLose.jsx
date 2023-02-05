import React, { useEffect, useState } from 'react'
import rock from "../../assets/images/icon-rock.svg"
import paper from "../../assets/images/icon-paper.svg"
import scissors from "../../assets/images/icon-scissors.svg"

const WinOrLose = ({userPicked, housePicked, setPlay, setUserSelection, setHouseSelection, handleScore}) => {

  const [showHousePicked, setShowHousePicked] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [showLose, setShowLose] = useState(false);
  const [showDraw, setShowDraw] = useState(false);
  
  const playAgain = () => {
    setUserSelection("");
    setHouseSelection("");
    setShowHousePicked(false);
    setShowWin(false);
    setShowLose(false);
    setShowDraw(false);
    setPlay(false);
  }

  let left, right;
  if(userPicked === "rock"){
    left = rock;
  }else if(userPicked === 'paper'){
    left = paper;
  }else{
    left = scissors;
  }

  if(housePicked === "rock"){
    right = rock;
  }else if(housePicked === 'paper'){
    right = paper;
  }else{
    right = scissors;
  }

  if(housePicked !== ""){
    setTimeout(() => {
      setShowHousePicked(true);
      whowins(userPicked, housePicked);
    },1000)
  }

  const whowins = (user, house) => {
    if(user === 'paper' && house === 'rock'){
      setShowWin(true);
      handleScore("user");
    }else if(user === 'rock' && house === 'scissors'){
      setShowWin(true);
      handleScore("user");
    }else if(user === 'scissors' && house === "paper"){
      setShowWin(true);
      handleScore("user");
    }else{
      if(user === house){
        setShowDraw(true);
        handleScore("draw");
        return;
      }
      handleScore("house");
      setShowLose(true);
    }
  }

  return (
    <div className='relative left-4 min-h-[14rem] mt-32 flex flex-col gap-[5.75rem]'>
      <div className='flex justify-between relative right-3'>
        <div className='flex flex-col gap-10 items-center'>
          <img src={left} alt="" className={`bg-white p-6 w-24 h-24 rounded-full ring-[1rem] ring-${userPicked}Ring hover:scale-105 transition-transform`} />
          <span className='uppercase text-gray-200 font-extrabold text-lg'>you picked</span>
        </div>
        <div className='flex flex-col gap-10 items-center'>
          {
          showHousePicked
           ? 
           <img src={right} alt="" className={`bg-white p-6 w-24 h-24 rounded-full ring-[1rem] ring-${housePicked}Ring hover:scale-105 transition-transform`} /> 
           : 
           <div className='bg-black/20 p-6 w-24 h-24 rounded-full hover:scale-105 transition-transform`'></div>
          }
          <span className='uppercase text-gray-200 font-extrabold text-lg'>the house picked</span>
        </div>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center'>

        {showWin && <div className='absolute top-52 right-14 flex flex-col gap-10 items-center'><h2 className='uppercase text-gray-100 text-6xl font-extrabold tracking-wide'>You Win</h2><button className='text-scoreText2 bg-gray-50 py-3 px-12 text-2xl uppercase rounded-xl font-extrabold tracking-wider hover:opacity-80' onClick={playAgain}>play again</button></div>}

        {showLose && <div className='absolute top-52 right-14 flex flex-col gap-10 items-center'><h2 className='uppercase text-gray-100 text-6xl font-extrabold tracking-wide'>You Lose</h2><button className='text-scoreText2 bg-gray-50 py-3 px-12 text-2xl uppercase rounded-xl font-extrabold tracking-wider hover:opacity-80' onClick={playAgain}>play again</button></div>}

        {showDraw && <div className='absolute top-52 right-14 flex flex-col gap-10 items-center'><h2 className='uppercase text-gray-100 text-6xl font-extrabold tracking-wide'>Draw</h2><button className='text-scoreText2 bg-gray-50 py-3 px-12 text-2xl uppercase rounded-xl font-extrabold tracking-wider hover:opacity-80' onClick={playAgain}>play again</button></div> 
        }
        
      </div>
    </div>
  )
}

export default WinOrLose