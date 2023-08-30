//components
import LandingBackground from './LandingBackground/LandingBackground';
//hooks
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Image } from '@nextui-org/react';
//assets
import me from '../assets/me.jpg';

function SliderAbout({ myRef1 }) {
   const [text] = useTypewriter({
      words: ['Frontend Dev', 'Backend Dev', 'Designer', 'Freelancer'],
      loop: true,
      typeSpeed: 40,
      deleteSpeed: 50
   });
   return (
      <section className='  h-screen w-screen relative overflow-hidden bg-[#060918] flex justify-start items-center'>
         <div className='w-[50%]  z-30'>
            <Image
               isZoomed
               src={me}
               alt='profile picture'
               classNames=''
            />
         </div>
         <div className='text-white pl-32  flex flex-col items-start w-[50%] gap-4'>
            <h2 className='text-yellow-500'>About</h2>
            <h3 className='text-4xl width-full text-start '>
               <span>{text}</span>
               <span>
                  <Cursor cursorStyle='|' />
               </span>
            </h3>
            <h4 className='z-40 text-indigo-300 text-md flex flex-col'>
               <span ref={myRef1}>
                  I am Joshua, a passionate Developer from Buenos Aires,
               </span>
               <span>
                  Argentina, in this page i bring you my personal
                  <span className='text-yellow-200 '> projects</span>,
               </span>
               <span>
                  my prefered technologies and more. My
                  <span className='text-yellow-200'> expertise </span>
                  is
               </span>
               <span>
                  developing
                  <span className='text-yellow-200'> Front </span> and
                  <span className='text-yellow-200'> Backend </span>
                  web applications using
               </span>
               <span>React, Express and SQL.</span>
            </h4>
         </div>

         <LandingBackground />
      </section>
   );
}

export default SliderAbout;
