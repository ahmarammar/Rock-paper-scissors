import React, { useEffect, useState } from 'react'

const Score = ({winner}) => {

  const [points, setPoints] = useState(0);

  useEffect(() => {
    console.log(winner);
    if(winner !== ""){
      if(winner === "user"){
        setPoints(points+1);
      }
      if(winner === "house"){
        setPoints(points-1);
      }
    }
  },[winner])

  return (
    <div className='bg-gray-200 rounded-lg p-2 w-24'>
      <div className='flex flex-col items-center justify-center gap-1'>
        <span className='uppercase font-semibold text-scoreText tracking-wide text-md'>score</span>
        <h3 className='text-5xl font-extrabold text-scoreText2'>{points}</h3>
      </div>
    </div>
  )
}

export default Score