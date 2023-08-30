import { Button } from '@nextui-org/react';
import style from '../sass/styles/buttonHover.module.scss';
import classNames from 'classnames';
//style line
const headerStyle =
   'z-40  py-3 px-10 flex items-center fixed top-0 w-full justify-around text-white';

function LandingHeader({ inViews }) {
   const { observer, firstObserver, secondObserver, thirdObserver, fourthObserver } =
      inViews;

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
      <header className=''>
         <div
            className={
               observer
                  ? `transition-colors ${headerStyle}`
                  : `bg-black bg-opacity-40 transition-colors  ${headerStyle}`
            }
         >
            <ul className='text-md flex [&>li]:inline-block [&>li]:px-4 [&>li]:py-2'>
               <li>
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
                     About me
                  </a>
               </li>
               <li>
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
            <div className='flex  px-4 py-2 '>
               <span
                  className={observer ? ' cursor-pointer' : ' cursor-pointer'}
                  onClick={() => smooth('main')}
               >
                  Joshua Candia
               </span>
            </div>
            <div>
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
         </div>
      </header>
   );
}

export default LandingHeader;
