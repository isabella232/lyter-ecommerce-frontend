import React from 'react'

export default function Preloader() {
  return (
    <div className=" fixed w-[100%] h-[100%] top-[0] left-[0] bg-[#fff] z-[9999999999] flex justify-center items-center" style={{
        background: '#FFF'
    }} >
      <div className="loader text-white flex justify-center items-center " >
        <span className='bg-[#000] px-2 rounded-[50%] text-center text-[#fff]' style={{ transform: 'rotateZ(-43deg)' }}>L</span> 
      </div>
    </div>
  )
}
