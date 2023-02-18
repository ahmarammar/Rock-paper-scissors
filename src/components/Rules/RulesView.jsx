import React from 'react'
import close from "../../assets/images/icon-close.svg"
import rules from "../../assets/images/image-rules.svg"

const RulesView = ({showRules}) => {

  const handleRules = () => {
    showRules();
  }

  return (
    <div className='min-h-screen bg-gray-50 md:p-12 p-9 flex items-center justify-center flex-col gap-48'>
      <h2 className='uppercase font-extrabold tracking-wide text-5xl'>rules</h2>
      <img src={rules} alt="" className='h-64'/>
      <button onClick={handleRules}>
        <img src={close} alt="" className='hover:scale-110 transition-all'/>
      </button>
    </div>
  )
}

export default RulesView