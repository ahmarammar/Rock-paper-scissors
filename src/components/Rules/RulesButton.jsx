import React from 'react'

const RulesButton = ({handleRules}) => {

  const clickRules = () => {
    handleRules();
  }

  return (
    <div className='mt-52 flex justify-center'>
      <button className='uppercase py-2 px-12 border-2 rounded-lg border-gray-300 text-gray-300 outline-none text-xl font-semibold tracking-wide' onClick={clickRules}>
      rules
      </button>
    </div>
  )
}

export default RulesButton