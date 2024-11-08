import React from 'react'

function HeroCard({text= "not anything" , image ='' , bg = 'bg-[#1ABE71]'}) {
  return (
        <div className={`h-[25vw] ${bg} relative overflow-hidden rounded-md cursor-pointer`}>
            <h5 className='w-full text-[5vw] text-center font-extrabold uppercase tracking-tighter leading-tight text-[#042f1a]'>{text}</h5>
            <div className='absolute -bottom-20 felx items-center justify-center '>
                <img src={image} alt="" className='w-2/3 m-auto flex items-center justify-center'/>
            </div>
        </div>
  )
}

export default HeroCard