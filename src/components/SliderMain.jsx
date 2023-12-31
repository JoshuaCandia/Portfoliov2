import LandingBackground from './LandingBackground/LandingBackground';
import { Button } from '@nextui-org/react';
import classNames from 'classnames';
import style from '../sass/styles/buttonHover.module.scss';
function SliderMain({ myRef }) {
   function smooth(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
   }
   return (
      <section className='bg-[#6919FF] text-center h-screen w-screen relative overflow-hidden flex justify-start items-center'>
         <div className='w-full flex flex-col gap-12'>
            <h1
               ref={myRef}
               className=' text-white font-bold text-4xl md:text-7xl xl:text-8xl flex justify-center flex-col gap-4'
            >
               <span>I'm Joshua, </span>
               <span>Welcome To </span>
               <span>My Portfolio</span>
            </h1>
            <div className='flex justify-center'>
               <Button
                  onClick={() => smooth('portfolio')}
                  className={classNames(
                     style.buttonHover,
                     'px-4 py-2 md:px-6 md:py-4 xl:px-8  md:text-xl lg:text-2xl  text-white border border-white '
                  )}
                  variant='solid'
               >
                  Discover my Work
               </Button>
            </div>
         </div>

         <LandingBackground />
      </section>
   );
}

export default SliderMain;
