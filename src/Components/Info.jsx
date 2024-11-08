import React from 'react'

function Info({
    className = "bg-white",
    image = '',
    text1 = "Inspiring good through tasty goodness",
    text2 = "We’re here to inspire discovery and tempt everyone to eat more plants.  Because we care about the future – yours, ours and the planet’s.",
    textcolor = "text-[#042f1a]",
    dire = "",
    zindex = 'z-50',
    ...props
}) {



  return (
    <>
    <div {...props} key={Math.floor(Math.random() * 1000)} className={`relative ${zindex} w-screen h-screen ${className} ${textcolor}`}>
        <div className={`w-4/5 m-auto gap-20 h-full flex ${dire} items-center justify-center`}>
            <div className={`w-1/2 flex items-center justify-center h-4/5`}>
            <img src={image} alt="" />
            </div>
            <div className="w-1/2 flex  justify-center h-4/5 flex-col">
                <h4 className='text-[3vw] font-extrabold uppercase tracking-tighter' >{text1}
                </h4>
                <p className='w-4/5'>{text2}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Info