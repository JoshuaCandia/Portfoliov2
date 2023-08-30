import style from '../sass/styles/buttonHover.module.scss';
import classNames from 'classnames';

//hooks
import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
//style line
const headerStyle =
   ' z-40 pt-2 sm:py-3 sm:px-10 flex sm:items-center fixed top-0 w-full sm:justify-around text-white';

function LandingHeader({ inViews }) {
   const { observer } = inViews;

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
      <header
         className={
            observer
               ? `transition-colors ${headerStyle}`
               : `bg-black bg-opacity-40 transition-colors  ${headerStyle}`
         }
      >
         <ul className='text-md lg:text-xl flex'>
            <li className='inline-block px-2 cel:px-4 py-2'>
               <a
                  className={
                     observer
                        ? 'hover:text-black transition-colors'
                        : 'hover:text-gray-400 transition-colors'
                  }
                  underline='hover'
                  href='#about'
                  onClick={() => smooth('about')}
               >
                  About
               </a>
            </li>
            <li className='inline-block px-2 cel:px-4 py-2'>
               <a
                  className={
                     observer
                        ? 'hover:text-black transition-colors'
                        : 'hover:text-gray-400 transition-colors'
                  }
                  underline='hover '
                  href='#portfolio'
                  onClick={() => smooth('portfolio')}
               >
                  Portfolio
               </a>
            </li>
         </ul>
         <div className='flex px-2 py-2 lg:text-xl'>
            <span
               className={observer ? ' cursor-pointer' : ' cursor-pointer'}
               onClick={() => smooth('main')}
            >
               {isScreenSmall ? 'Joshua' : 'Joshua Candia'}
            </span>
         </div>
         <div className='cel:px-6 md:text-md'>
            <Button
               onClick={() => smooth('contact')}
               className={classNames(
                  style.buttonHover,
                  ' border border-white  px-4 py-2'
               )}
               variant='solid'
            >
               Hit me up
            </Button>
         </div>
      </header>
   );
}

export default LandingHeader;
