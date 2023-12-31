//components
import MatrixRainComponent from './MatrixRain';
import { Button } from '@nextui-org/react';
import Swal from 'sweetalert2';
//icons

import { BiLogoGmail } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
function SliderContact() {
   return (
      <section className='bg-[#060918] text-center h-screen w-screen relative overflow-hidden flex justify-center items-between'>
         <MatrixRainComponent />
         <div className=' absolute w-[80%] h-1/6 lg:h-15 xl:h-1/3 top-36 flex justify-center items-center rounded-xl text-white'>
            <div className='pb- flex text-gray-400 flex-col items-start xl:items-center'>
               <h2 className='text-white text-xl md:text-lg lg:text-2xl xl:text-4xl pb-2 flex w-[80%] justify-start lg:justify-center'>
                  Contact me
               </h2>

               <h5 className='text-sm xl:text-xl'>
                  Do you speak <span className='text-white'>Guaraní</span>? It's ok
                  if you don't,
               </h5>
               <h5 className='text-sm xl:text-xl'>
                  I speak <span className='text-white'> English</span> too.
               </h5>

               <div className='text-sm text-gray-100 w-full flex flex-col  pt-4 gap-2 mb-6 '>
                  <a
                     target='_blank'
                     href='https://www.linkedin.com/in/candiajoshua/'
                     className='cursor-pointer flex justify-start items-center w-64'
                  >
                     <span className='mr-2 '>
                        <BiLogoLinkedinSquare
                           size={24}
                           color='purple'
                        />
                     </span>
                     Connect with me in Linkedin
                  </a>
                  <a
                     target='_blank'
                     href='https://www.instagram.com/candiajoshua_/'
                     className='cursor-pointer flex justify-start items-center w-64'
                  >
                     <span className=' mr-2'>
                        <FiInstagram
                           size={24}
                           color='purple'
                        />
                     </span>
                     Follow me on Instagram
                  </a>
                  <span className='flex justify-start items-center w-64'>
                     <span className='mr-2'>
                        <BiLogoGmail
                           size={24}
                           color='purple'
                        />
                     </span>
                     joshuacandia74@gmail.com
                  </span>
               </div>
            </div>
         </div>
         <div className=' rounded-xl absolute bottom-24  lg:bottom-8 xl-36  w-[80%] lg:w-[35%] h-1/'>
            <h5 className='text-large lg:text-xl text-[#4112A4]'>Source Code</h5>
            <h2 className='text-2xl lg:text-4xl p-2 text-white '>
               Behind the simulation
            </h2>
            <p className='text-gray-500 text-sm lg:text-md xl:text-lg'>
               You take the <span className='text-white'>blue pill</span> - you keep
               scrolling, you leave this site and believe whatever you want to
               believe. You take the <span className='text-white'>red pill</span> -
               you stay in wonderland, and I show you how deep the rabbit hole goes.
            </p>
            <Button className='bg-[#FF2E5B] p-2 mt-6 rounded-2xl'>
               <a
                  target='_blank'
                  href='https://github.com/JoshuaCandia/Portfoliov2'
               >
                  Show me
               </a>
            </Button>
         </div>
      </section>
   );
}

export default SliderContact;
