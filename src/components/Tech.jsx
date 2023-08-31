import { DiHtml5 } from 'react-icons/di';
import { DiCss3Full } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
//second row
import { DiJsBadge } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
//third row
import { SiJest } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiAxios } from 'react-icons/si';
import { SiReactrouter } from 'react-icons/si';
//fourth row
import { DiNodejs } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiSequelize } from 'react-icons/si';
//hooks
import { useState, useEffect } from 'react';
function Tech() {
   const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 768);

   useEffect(() => {
      function handleResize() {
         setIsScreenSmall(window.innerWidth < 768);
      }

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);
   return (
      <div className=' w-full h-full grid grid-cols-8 gap-4 justify-start items-center lg:gap-8 lg:grid-cols-4'>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <DiHtml5
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <DiCss3Full
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <DiSass
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <SiTailwindcss
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         {/* Second row */}
         <div class='col-span-1 hover:animate-wiggle-more'>
            <DiJsBadge
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <DiReact
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <SiNextdotjs
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <SiTypescript
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         {/* third row */}
         <div class='col-span-1 hover:animate-wiggle-more'>
            <SiRedux
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <SiAxios
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <SiReactrouter
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <SiJest
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         {/* fourth row */}
         <div class='col-span-1 hover:animate-wiggle-more'>
            <DiNodejs
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <SiExpress
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <BiLogoPostgresql
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
         <div class='col-span-1 hover:animate-wiggle-more'>
            <SiSequelize
               color='white'
               size={isScreenSmall ? 20 : 40}
            />
         </div>
      </div>
   );
}

export default Tech;
