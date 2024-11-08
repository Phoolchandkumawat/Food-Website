import Feature from "./Components/Feature";
import Hero from "./Components/Hero";
import Home from "./Components/Home"
import Info from "./Components/Info"
import Navbar from "./Components/Navbar"
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import { home3, home4, home5, home7 } from "./img"
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
    <div className="bg-[#042f1a] text-white overflow-x-hidden font-rubik relative">
      <Navbar/>
      <Home/>
      <Info
      data-scroll data-scroll-section data-scroll-speed = '-0.9'
      image={home5} />
      <Info 
      zindex="z-40"
      data-scroll data-scroll-section data-scroll-speed = '-1'
      dire="flex-row-reverse"
      image={home7} 
      className="bg-[#d4ed6d]"
      text1="Powered by positivity" 
      text2="We're not crusading or going up against an industry. We're for; for flavour, for fun, for what's possible."/>
      <div className="overflow-hidden w-screen h-screen bg-white"></div>
      <Info image={home4}
      data-scroll data-scroll-section data-scroll-speed = '-0.9' 
      zindex="z-30"
      className="text-[#042f1a]"
      text1="Flavoursome food for everyone"
      text2="Our curious creations are made for vegans and meat-eaters alike. Because meat-free doesn’t mean flavour free."
      textcolor="text-white"
      />
      <div className="overflow-hidden w-screen h-screen "></div>
      <Feature/>
      <Hero/>
      <Footer/>
      <Slider/>
    </div>
    </>
  )
}

export default App
