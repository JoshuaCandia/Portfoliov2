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
function Tech() {
   return (
      <div className='w-full h-full flex flex-col justify-start items-center py-2 '>
         <div className=' w-full h-full grid grid-cols-4 gap-4 justify-center items-center'>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <DiHtml5
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <DiCss3Full
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <DiSass
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <SiTailwindcss
                  color='white'
                  size={50}
               />
            </div>
            {/* Second row */}
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <DiJsBadge
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <DiReact
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <SiNextdotjs
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <SiTypescript
                  color='white'
                  size={50}
               />
            </div>
            {/* third row */}
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <SiRedux
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <SiAxios
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <SiReactrouter
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <SiJest
                  color='white'
                  size={50}
               />
            </div>
            {/* fourth row */}
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <DiNodejs
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <SiExpress
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <BiLogoPostgresql
                  color='white'
                  size={50}
               />
            </div>
            <div class=' col-span-1 hover:animate-wiggle-more '>
               <SiSequelize
                  color='white'
                  size={50}
               />
            </div>
         </div>
      </div>
   );
}

export default Tech;
