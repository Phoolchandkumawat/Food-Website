import React from 'react'
import Afro from '../img/Afro.png'
import home from '../img/home-3.svg'
import "../App.css"
import { motion } from 'framer-motion'


function Home() {
    let imgesvg = "data:image/svg+xml,%3Csvg width='41' height='64' viewBox='0 0 41 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.44531 5.56149C9.2181 2.6463 16.7405 1.48086 24.0853 2.21287C28.2019 2.62061 32.4511 3.71542 35.4918 6.5054C38.8555 9.59396 40.232 14.6506 38.7812 18.9784C37.4014 23.0944 33.1587 26.8122 28.6834 26.9856C25.6912 27.1012 21.0899 24.3593 22.8606 20.8309C24.2178 18.1244 28.7642 18.3106 31.2458 18.8596C33.9666 19.4632 36.5032 21.0492 37.9508 23.454C42.956 31.7597 34.3834 39.9916 27.0742 42.788C23.4455 44.1782 19.6326 45.273 15.7356 45.5394C12.3622 45.7706 7.39566 45.5844 5.07559 42.6981C2.04141 38.9257 7.09836 34.8579 10.5849 34.296C18.3562 33.0407 26.2406 38.7234 26.2438 46.7659C26.247 54.9464 18.3368 60.2663 11.0955 62' stroke='%23FFFFFF' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"


    return (
    <div data-scroll data-scroll-section data-scroll-speed = '-0.1' className='relative z-[99]'>
    <div className="w-screen h-screen font-normal text-[14vw] text-white bg-[#042f1a] uppercase text-center relative flex items-center justify-center overflow-hidden">
        <div className="hidden sm:flex">
            <motion.img initial={{width: "0"}} animate={{width:"25%"}} transition={{ease:[0.76,0,0.24,1], delay:0}} src={Afro} className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[25%] z-10' alt="" /><div>
            <motion.h3 initial={{fontSize : "0px"}} animate={{fontSize : "14vw"}}  className='tracking-tighter font-semibold'>meat-free</motion.h3>
            <motion.h3 initial={{fontSize : "0px"}} animate={{fontSize : "14vw"}} transition={{ease:[0.76,0,0.24,1], delay : 0.2}} className='z-20 relative tracking-tighter font-semibold'>your mind</motion.h3></div> 
        </div>
        <div className="grid sm:hidden items-center justify-center relative">
            <img src={Afro} alt="" className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[80%] z-10'/>
            <h3 className='tracking-tighter font-semibold text-[15vw] relative -top-36'>meat-free</h3>
            <h3 className='z-20 relative tracking-tighter font-semibold text-[13vh]'>your mind</h3>
        </div>
            
    </div>
    <div  className="w-screen h-screen bg-pink-400 relative mt-5">
        <img 
        src="data:image/svg+xml,%3Csvg viewBox='0 0 2868 139' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2868 139V43.0056C2868 53.8541 2752.86 50.0576 2649.42 16.9689C2551.18 -14.4606 2490.72 4.91814 2432.72 23.5073C2390.62 37.0006 2349.81 50.0778 2296.8 43.0057C2241.32 35.6046 2207.84 26.8376 2179.21 19.3408C2142.79 9.80471 2114.22 2.32386 2058.22 2.32386C2009.77 2.32387 1968.12 15.1762 1927.77 27.6295C1884.81 40.8875 1843.31 53.6933 1796.63 50.0572C1757.78 47.0316 1726.77 36.9158 1695.56 26.7368C1654.03 13.1927 1612.15 -0.463273 1551.04 2.32391C1502.46 4.53995 1476.32 20.0239 1453.49 33.5533C1436.08 43.8676 1419.88 49.25 1397.25 52.25L1372.25 54.1269C1341.08 54.4432 1324.58 49.9698 1221.42 16.9691C1123.18 -14.4603 1062.72 4.91841 1004.72 23.5076C962.615 37.0008 921.813 50.0781 868.802 43.0059C813.325 35.6049 779.843 26.8379 751.213 19.341C714.794 9.80498 686.224 2.32412 630.219 2.32412C581.767 2.32413 540.121 15.1764 499.768 27.6297C456.807 40.8878 415.312 53.6936 368.629 50.0575C329.785 47.0319 298.767 36.9161 267.556 26.7371C226.027 13.1929 184.154 -0.463011 123.044 2.32417C37.4142 6.22965 5.33636 43.0669 0.00117248 55.0002L0 139L2868 139Z' fill='%23ff73b5'/%3E%3C/svg%3E%0A" 
        className='absolute -top-10 left-0 object-cover' alt="" />
        <div className="text w-4/5 m-auto h-full flex imagess relative">
            <div className="w-1/2 flex flex-col justify-center h-full">
                <h3 className='uppercase text-[4vw]'>Curious... by name</h3>
                <h3 className='uppercase text-[4vw]'>nature</h3>
                <p className='w-4/5 text-2xl'>
                It's what inspires us to whip up, throw together, tear, shake, and break the rules - on a mission to redefine food for a new generation.
                </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
            <img src={home} alt="" className=''/>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Home