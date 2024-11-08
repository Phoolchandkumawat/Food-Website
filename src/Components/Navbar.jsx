import React,{useState,useEffect} from 'react'

function Navbar() {
  const [navclick, setnavClick] = useState('hidden')

  const clicknavbutton =  ()=>{
    if(navclick == "hidden") return setnavClick('grid')
    if(navclick == "grid") return setnavClick('hidden')
  }


  return (
    <nav className='pt-5 relative min-h-16'>
        <span onClick={clicknavbutton} className='hover:bg-black cursor-pointer text-2xl flex sm:hidden px-4 rounded-xl  py-2 ml-5 absolute right-10 top-0 mt-2'>X</span>
        <ul className={`w-5/6 m-auto uppercase ${navclick} justify-center sm:justify-between items-center sm:flex gap-5 sm:gap-0`}>
            <li className='flex items-center justify-center'><a href="">About</a></li>
            <li className='flex items-center justify-center'><a href="">Products</a></li>
            <li className='flex items-center justify-center'><span className='flex text-center text-3xl font-semibold'>Eat <br /> Curious</span></li>
            <li className='flex items-center justify-center'><a href="">Recipes</a></li>
            <li className='flex items-center justify-center'><button className='uppercase p-2 bg-pink-400 rounded-md' type='button'>Contect us</button></li>
        </ul>
        
    </nav>
  )
}

export default Navbar