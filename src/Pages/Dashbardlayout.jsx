import React, { useState } from 'react';

export default function Dashbardlayout({children}) {
  return (
    <div className='grid w-full grid-cols-3 h-screen md:h-auto'>

      <div className="left col-span-1 bg-[#000] text-white">
        Hello
      </div>

      <div className="right col-span-2 bg-[#00ff00]">{children}</div>

    </div>
  )
}
