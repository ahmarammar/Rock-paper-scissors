import React from 'react'
import rock from "../../../assets/images/icon-rock.svg"


const Rock = ({ handlePlay, setUserSelection }) => {

  const selectRock = () => {
    setUserSelection("rock");
    handlePlay();
  }

  return (
    <button onClick={selectRock}>
      <img src={rock} alt="" className='absolute top-36 right-[66%] left-[34.7%] bg-white p-6 w-24 h-24 rounded-full ring-[1rem] ring-rockRing hover:scale-110 transition-transform' />
    </button>
  )
}

export default Rock