import React, { useState } from 'react'

const Score = () => {

  const [points, setPoints] = useState(0);

  

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