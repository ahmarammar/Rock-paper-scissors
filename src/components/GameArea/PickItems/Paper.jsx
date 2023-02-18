import React from 'react'
import paper from "../../../assets/images/icon-paper.svg"

const Paper = ({ handlePlay, setUserSelection }) => {

  const selectPaper = () => {
    setUserSelection("paper");
    handlePlay();
  }

  return (
    <button onClick={selectPaper}>
      <img src={paper} alt="" className='absolute bottom-44 left-0 bg-white p-6 w-24 h-24 rounded-full ring-[1rem] ring-paperRing hover:scale-110 transition-transform' />
    </button>
  )
}

export default Paper