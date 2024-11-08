import React from 'react'

import { home9, home10, home11 , home12 } from '../img'

function Feature() {
  return (
    <div className="w-screen h-screen bg-white text-black">
        <div className="text text-center text-[4vw] font-extrabold tracking-tighter leading-[50px] uppercase text-[#042f1a] py-16">
            <h4>Features &amp; <br/>
                Benefits</h4>
        </div>
        <div className="grid gap-10 grid-cols-4 w-4/5 m-auto relative text-[#042f1a]  text-center mt-20">
            <div className="flex flex-col justify-center items-center">
                <img src={home9} alt="" />
                <div className="text flex flex-col items-center justify-center mt-16">
                    <h4 className='text-[2vw] w-max uppercase'>Plant based</h4>
                    <p>Plant-protein yumminess, suitable for everyone.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src={home10} alt="" />
                <div className="text flex flex-col items-center justify-center mt-16">
                    <h4 className='text-[2vw] uppercase' >Plant based</h4>
                    <p>Plant-protein yumminess, suitable for everyone.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src={home11} alt="" />
                <div className="text flex flex-col items-center justify-center mt-16">
                    <h4 className='text-[2vw] uppercase'>Plant based</h4>
                    <p>Plant-protein yumminess, suitable for everyone.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src={home12} alt="" />
                <div className="text flex flex-col items-center justify-center mt-16">
                    <h4 className='text-[2vw] uppercase'>Plant based</h4>
                    <p>Plant-protein yumminess, suitable for everyone.</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Feature