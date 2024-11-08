import React from 'react'
import HeroCard from './HeroCard'
import { home54, img1, pieces ,img2, img3, img4, bbq, original, tandoori } from '../img'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'


function Hero() {
  new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    arrows: false,
  } );

  
  return (
    <div className="w-screen bg-white   ">
      <div className="w-full h-full rounded-t-full  overflow-hidden bg-[#042f1a] flex items-center justify-center text-white">
        <svg class="tiles__title w-2/2 h-[20vw] py-10" width="1224" height="312" viewBox="0 0 1224 312" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
<g clip-path="url(#clip0_587_15588)">
<path d="M53.5642 159.552C95.363 133.013 98.7096 180.342 100.383 212.379C102.173 246.706 109.753 311.182 58.0486 309.41C38.8225 309.611 19.5964 309.795 0.353516 310.012C0.671441 290.86 0.738378 271.708 0.738378 252.555C0.738378 233.403 0.637975 214.218 0.353516 195.065C17.7223 182.698 35.4759 170.85 53.5642 159.552ZM53.9658 231.532C53.1124 205.962 51.2383 203.572 47.4734 205.26C46.7204 205.594 46.1013 205.878 45.3483 206.413C45.3818 215.939 45.683 225.899 45.9842 236.061C46.2854 246.222 46.5364 254.461 46.8878 261.547C47.6575 261.38 48.4439 261.229 49.2136 261.062C53.2295 260.226 54.8024 256.516 53.9658 231.548V231.532Z" fill="#FFF6F6"></path>
<path d="M186.422 217.225C207.455 218.613 211.12 246.572 212.241 262.315C213.094 274.214 215.219 296.608 216.608 308.09C200.795 308.207 192.897 308.257 177.085 308.374C170.291 308.424 167.882 303.21 166.777 289.255C165.84 277.456 167.714 252.689 157.926 244.182C157.608 244.232 157.457 244.249 157.139 244.299C158.562 265.724 160.034 287.133 162.326 308.491C146.096 308.624 129.865 308.758 113.634 308.909C112.529 278.944 111.291 248.945 109.869 219.014C108.446 189.166 106.94 159.268 105.066 129.403C125.146 118.39 145.594 108.045 166.359 98.385C200.21 78.2134 205.313 124.774 206.987 145.831C208.693 167.239 211.421 204.374 186.305 215.22C186.355 216.022 186.372 216.423 186.405 217.242L186.422 217.225ZM161.657 175.746C160.754 158.432 158.98 154.872 155.081 156.276C154.429 156.51 152.437 157.028 152.103 157.63C148.84 163.629 153.609 186.726 154.479 200.981C155.516 200.714 156.57 200.446 157.742 200.146C161.674 199.143 162.544 193.076 161.64 175.763L161.657 175.746Z" fill="#FFF6F6"></path>
<path d="M276.965 311.666C219.421 311.499 218.333 226.334 216.359 187.06C214.033 140.901 212.075 73.8682 264.75 54.4152C324.738 32.2715 324.637 134.049 326.076 166.587C327.666 202.702 339.195 311.85 276.965 311.666ZM274.941 173.907C273.033 135.887 271.761 130.038 268.432 130.857C265.085 131.692 264.349 138.093 266.005 175.595C266.541 187.879 271.494 224.362 272.916 224.261C275.811 224.044 275.593 186.943 274.941 173.907Z" fill="#FFF6F6"></path>
<path d="M393.327 311.633C331.716 311.55 334.611 203.79 333.071 165.519C331.281 120.914 324.203 34.0939 383.421 20.3064C447.207 5.44921 443.408 117.989 444.362 152.182C445.416 189.668 457.648 311.734 393.327 311.65V311.633ZM392.59 156.026C392.239 144.094 388.139 106.759 386.416 106.876C383.387 107.076 382.986 144.094 383.521 157.129C384.14 171.802 389.294 212.68 390.064 212.647C392.724 212.513 393.042 171.184 392.607 156.026H392.59Z" fill="#FFF6F6"></path>
<path d="M506.525 172.585C511.411 171.95 516.849 171.298 522.555 170.663C522.789 193.275 523.074 215.903 523.392 238.515C523.726 261.26 524.094 284.006 524.513 306.751C502.124 306.784 479.752 306.834 457.364 306.901C456.427 257.784 455.439 208.667 454.218 159.583C452.996 110.533 451.875 61.4158 449.984 12.3655C468.073 9.74166 486.077 7.41866 504.232 5.39648C504.534 55.9007 505.504 106.422 506.24 156.926C506.341 163.193 506.408 166.335 506.508 172.602L506.525 172.585Z" fill="#FFF6F6"></path>
<path d="M533.312 306.736C532.961 256.131 532.275 205.51 531.605 154.905C530.953 104.301 530.334 53.713 529.363 3.10843C547.017 1.68789 564.804 0.735298 582.507 0.300781C582.407 51.2228 582.708 102.162 582.942 153.084C583.193 204.273 583.528 255.479 583.929 306.685C567.046 306.685 550.179 306.702 533.296 306.736H533.312Z" fill="#FFF6F6"></path>
<path d="M701.881 3.71026C700.141 54.0474 699.773 104.451 699.07 154.789C698.35 205.426 697.464 256.081 697.48 306.736C681.099 306.702 664.7 306.686 648.319 306.686C646.211 286.798 644.035 266.844 641.944 247.04C639.718 226.016 637.928 204.825 636.271 183.667C636.104 183.667 636.02 183.667 635.87 183.667C636.288 207.516 636.656 231.364 636.807 255.195C636.924 272.342 636.79 289.522 637.125 306.686C620.224 306.686 611.774 306.686 594.891 306.686C594.907 255.58 594.991 204.457 594.857 153.351C594.723 102.262 594.79 51.1395 594.004 0.0502858C612.209 -0.100124 630.281 0.0502858 648.47 0.518227C650.109 26.3386 652.82 52.3595 654.945 77.8623C656.317 94.4241 657.873 111.37 658.861 128.133C659.028 127.982 659.112 127.899 659.279 127.731C659.078 110.468 658.861 93.1706 658.844 75.9404C658.827 50.9724 658.877 25.9041 658.559 0.902608C675.912 1.67137 684.579 2.22287 701.898 3.69354L701.881 3.71026Z" fill="#FFF6F6"></path>
<path d="M764.144 205.695C764.479 197.823 765.048 173.808 765.248 165.535C765.516 154.505 765.767 143.876 765.817 136.389C774.535 137.96 783.387 138.812 789.796 139.464C797.56 140.266 807.633 141.353 817.84 141.804C817.02 183.501 829.252 311.466 760.496 311.984C696.091 312.469 708.223 188.364 708.808 151.196C709.394 114.881 701.58 -4.91252 768.428 6.3515C818.191 14.7243 820.701 65.0113 819.229 106.725C818.995 113.193 818.677 119.677 818.308 126.913C810.31 125.108 800.906 123.554 791.77 122.518C783.169 121.549 774.97 121.081 768.662 121.248C768.796 115.75 768.863 112.992 768.997 107.477C769.432 89.7788 767.24 82.5925 766.152 83.0939C757.083 87.3054 759.793 136.389 759.342 155.976C758.923 174.075 754.004 220.919 763.91 226.134C765.483 226.969 768.746 221.237 769.817 205.578C767.541 205.611 766.403 205.628 764.127 205.661L764.144 205.695Z" fill="#FFF6F6"></path>
<path d="M961.726 59.3444C953.142 115.063 942.433 173.639 937.296 226.717C934.82 252.22 935.071 280.865 934.167 307.955C925.55 307.236 911.979 306.802 901.99 306.735C892.134 306.685 878.263 306.952 869.846 307.654C871.77 278.257 874.23 247.457 874.163 219.347C873.996 159.216 868.307 93.4038 864.709 30.4824C880.906 34.4265 897.07 38.8051 913.034 43.5848C911.729 69.0876 911.059 94.7074 910.658 120.127C910.356 139.479 910.306 158.999 910.273 178.435C910.708 178.502 910.925 178.536 911.344 178.603C913 159.517 914.673 140.365 916.163 121.33C918.137 96.3118 919.71 71.1098 920.865 45.9579C937.296 50.9716 945.479 53.6622 961.743 59.3611L961.726 59.3444Z" fill="#FFF6F6"></path>
<path d="M1048.02 93.9556C1047.47 101.894 1046.53 114.662 1045.94 125.809C1045.32 137.541 1044.79 150.443 1044.62 158.532C1032.98 154.554 1021.15 150.677 1011.26 147.802C1010.97 153.284 1010.84 156.025 1010.55 161.506C1021.91 164.531 1033.24 167.389 1043 169.378C1041.88 187.41 1040.86 205.443 1040.04 223.475C1030.72 220.935 1018.99 218.244 1007.73 216.339C1007.42 222.071 1007.27 224.929 1006.99 230.661C1017.33 232.149 1030.18 233.77 1040.62 235.124C1039.87 244.516 1039.12 258.821 1038.43 271.974C1037.79 284.274 1037.06 298.279 1036.79 308.29C1009.2 308.072 981.589 307.888 953.996 307.721C956.456 266.626 958.531 225.481 960.522 184.369C962.53 143.223 964.454 102.028 965.977 60.832C993.737 70.993 1020.98 81.9897 1048 93.9389L1048.02 93.9556Z" fill="#FFF6F6"></path>
<path d="M1132.77 137.122C1132.08 146.615 1131.4 161.756 1130.78 175.293C1130.16 188.83 1129.46 204.656 1129.22 215.519C1124.12 213.781 1121.58 212.912 1116.47 211.207C1115.02 243.846 1113.29 276.502 1112.36 309.174C1105.35 308.405 1093.63 308.272 1085.13 308.188C1076.61 308.104 1065.19 307.987 1057.82 308.756C1060.35 271.404 1062.27 234.003 1064.32 196.617C1059.08 195.464 1056.45 194.896 1051.18 193.793C1052.18 177.432 1053.02 161.037 1053.87 144.693C1054.69 129.067 1055.53 113.391 1056.2 97.748C1082.19 110.082 1107.62 123.184 1132.77 137.155V137.122Z" fill="#FFF6F6"></path>
<path d="M1182.03 164.565C1203.25 179.055 1223.85 199.176 1223.65 227.085C1223.53 243.53 1220.2 249.647 1210.06 254.059C1205.56 256.683 1204.09 259.958 1204 264.888C1204 265.908 1203.97 266.76 1204.09 267.98C1197.01 266.108 1186.3 263.434 1178.27 261.763C1168.56 259.741 1161.8 258.738 1152.67 258.036C1152.62 256.115 1152.68 254.209 1152.78 251.903C1153.67 229.141 1158.67 223.726 1169.55 222.924C1179.17 222.222 1180.17 215.003 1180.43 206.814C1180.56 202.234 1179.62 199.661 1178 198.875C1175.25 197.555 1174.22 202.034 1173.92 211.426C1173.85 213.381 1173.65 215.872 1173.82 218.713C1170.9 217.409 1166.22 215.604 1160.75 213.565C1153.12 210.724 1143.13 207.749 1137.3 207.098C1137.42 201.232 1137.62 195.516 1137.76 190.67C1138.64 158.064 1152.06 144.093 1182.03 164.565ZM1206.75 291.578C1206.56 305.299 1196.77 311.482 1176.81 311.432C1157.12 311.382 1147.71 303.477 1148.42 286.013C1149.1 268.749 1158.94 262.733 1178.15 266.376C1197.61 270.069 1206.93 278.024 1206.76 291.595L1206.75 291.578Z" fill="#FFF6F6"></path>
</g>
<defs>
<clipPath id="clip0_587_15588">
<rect width="1224" height="312" fill="white"></rect>
</clipPath>
</defs>
        </svg>
        </div>

      <div className="w-screen bg-[#042f1a]">
          <div className="grid grid-cols-3 gap-5 w-4/5 m-auto overflow-hidden">
              <HeroCard text='curious h&s Pieces' image={pieces} bg='bg-[#1ABE71]'/>
              <HeroCard text='Curious Dehydrati mince' image={pieces} bg="bg-[#FFB500]"/>
              <HeroCard text='Curious BBq mince' image={bbq} bg="bg-[#FFB500]"/>
              <HeroCard text='Curious original mince' image={original} bg="bg-[#FFB500]"/>
              <HeroCard text='Curious Dehydrati mince' image={pieces} bg="bg-[#FFB500]"/>
              <HeroCard text='Curious Tandoori mince' image={tandoori} bg="bg-[#FFB500]"/>
          </div>
          <div className="flex items-center justify-center ">
            <div className='uppercase bg-[#ff73b5] my-20 px-3 py-2 rounded-md text-[20px] text-[#042f1a] font-extrabold tracking-tighter relative'><a href="" className='hover:translate-x-[100%] transition-[0.6s]'>View all</a>
            
            </div>
          </div>
      </div>
      <div className="h-screen w-screen bg-[#042f1a] grid grid-cols-12 gap-10">
        <div className="col-span-7 flex items-center justify-center h-full ">
          <img src={home54} alt=""  className='w-3/4 rounded-md'/>
        </div>
        <div className="col-span-5 pt-24">
          <h3 className='text-[4.5vw] leading-[70px] tracking-tighter font-extrabold uppercase w-[90%]'>We're growing more than plants...</h3>
          <p className='mt-5 text-[18px] w-4/5'>We’re here to grow a positive, curious and thoughtful attitude to plant-based food. Which is why we put curiosity at the heart of everything we do. So much so, we’ve built our own vertical farm – a near-off-grid, plant playground where we’re researching how to add even more flavour, nutrition and sustainability to the way we all eat.</p>
        </div>
      </div>


      <section className="w-full h-screen bg-[#042f1a]">
      <Splide 
      options = {{
      type   : 'loop',
      perPage:4,
      // gap: "5px",
      arrows: false,

      }} 
      aria-label="My Favorite Images"
      >
          <SplideSlide>
            <div className="w-[400px] h-[700px] bg-white border-black cursor-pointer">
              <div className="flex px-5 py-2 items-center justify-center w-[400px] h-[700px] bg-[#042f1a] relative overflow-hidden">
                  <span className='absolute top-10 p-2 bg-yellow-400 right-10 rounded-lg text-black tracking-tighter font-extrabold '>MINCE</span>
                <div className='w-full h-full overflow-hidden rounded-xl'>
                  <img src={img1} alt="" className='w-full h-full object-cover rounded-xl hover:scale-[1.1] transition-all' />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[400px] h-[700px] bg-white border-black cursor-pointer">
              <div className="flex px-5 py-2 items-center justify-center w-[400px] h-[700px] bg-[#042f1a] relative overflow-hidden">
                  <span className='absolute top-10 p-2 bg-green-700 right-10 rounded-lg text-black tracking-tighter font-extrabold '>BB PIECES</span>
                <div className='w-full h-full overflow-hidden rounded-xl'>
                  <img src={img2} alt="" className='w-full h-full object-cover rounded-xl hover:scale-[1.1] transition-all' />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[400px] h-[700px] bg-white border-black cursor-pointer">
              <div className="flex px-5 py-2 items-center justify-center w-[400px] h-[700px] bg-[#042f1a] relative overflow-hidden">
                  <span className='absolute top-10 p-2 bg-orange-400 right-10 rounded-lg text-black tracking-tighter font-extrabold '>ORIGINAL PIECES</span>
                <div className='w-full h-full overflow-hidden rounded-xl'>
                  <img src={img3} alt="" className='w-full h-full object-cover rounded-xl hover:scale-[1.1] transition-all' />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[400px] h-[700px] bg-white border-black cursor-pointer">
              <div className="flex px-5 py-2 items-center justify-center w-[400px] h-[700px] bg-[#042f1a] relative overflow-hidden">
                  <span className='absolute top-10 p-2 bg-green-400 right-10 rounded-lg text-black tracking-tighter font-extrabold '>H&S PIECES</span>
                <div className='w-full h-full overflow-hidden rounded-xl'>
                  <img src={img4} alt="" className='w-full h-full object-cover rounded-xl hover:scale-[1.1] transition-all' />
                </div>
              </div>
            </div>
          </SplideSlide>
          
          
      </Splide>
    </section>

    </div>
  )
}

export default Hero