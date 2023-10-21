import React from 'react'

import { loader } from '../assets';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <img src={loader} alt="loader" className="w-[70%] h-[70%] object-contain"/>
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">Transaction is in progress <br /> Please wait...</p>
    </div>
  )
}

export default Loader