import React from 'react'
import { easeIn, easeOut, motion } from 'framer-motion'

function Slider() {
  return (
    <div className="w-full h-[60px] bg-[#ff73b5] fixed bottom-0 overflow-hidden left-0 z-[999] flex text-[#042f1a] font-extrabold text-2xl uppercase">
      <div className="text whitespace-nowrap flex text-nowrap relative w-max items-center">
        <motion.span initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', duration:5, repeat:Infinity}} className="px-6 w-80">packed with flavour</motion.span>
        <motion.span initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', duration:5, repeat:Infinity}} className="px-6 w-80">packed with flavour</motion.span>
        <motion.span initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', duration:5, repeat:Infinity}} className="px-6 w-80">packed with flavour</motion.span>
        <motion.span initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', duration:5, repeat:Infinity}} className="px-6 w-80">packed with flavour </motion.span>
        <motion.span initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', duration:5, repeat:Infinity}} className="px-6 w-80">packed with flavour</motion.span>
        <motion.span initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', duration:5, repeat:Infinity}} className="px-6 w-80">packed with flavour</motion.span>
        {/* <span className='c'>packed with flavour</span>
        <span className='c'>packed with flavour</span>
        <span className='c'>packed with flavour</span> */}
      </div>
      
    </div>

  )
}

export default Slider