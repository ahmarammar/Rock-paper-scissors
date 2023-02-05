import React from 'react'
import rock from "../../../assets/images/icon-rock.svg"


const Rock = () => {
  return (
    <button>
      <img src={rock} alt="" className='absolute top-36 right-28 bg-white p-6 w-24 h-24 rounded-full ring-[1rem] ring-rockring hover:scale-110 transition-transform' />
    </button>
  )
}

export default Rock