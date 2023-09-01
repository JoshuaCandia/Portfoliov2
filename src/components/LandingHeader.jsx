import { useState } from 'react';
import style from '../sass/styles/buttonHover.module.scss';
import classNames from 'classnames';
import {
   Navbar,
   NavbarBrand,
   NavbarMenuToggle,
   NavbarMenuItem,
   NavbarMenu,
   NavbarContent,
   NavbarItem,
   Link,
   Button
} from '@nextui-org/react';
const LandingNavbar = ({ observer }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen(!isOpen);
   };
   const menuItems = [
      { name: 'About', ref: '#about' },
      { name: 'Portfolio', ref: '#portfolio' },
      { name: 'Hit me up!', ref: '#contact' }
   ];

   function smooth(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }

      toggleMenu();
   }
   return (
      <Navbar
         className={
            observer
               ? 'bg-[#6919FF] text-white transition-colors duration-500 ease-in-out'
               : 'bg-black bg-opacity-40 text-white transition-colors duration-500 ease-in-out'
         }
         onMenuOpenChange={setIsMenuOpen}
      >
         <NavbarContent>
            <NavbarMenuToggle
               onChange={toggleMenu}
               aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
               className='sm:hidden'
            />
            <NavbarBrand>
               <a
                  href='#main'
                  className='font-bold text-inherit'
               >
                  Joshua Candia
               </a>
            </NavbarBrand>
         </NavbarContent>
         <NavbarContent
            justify='center'
            className='hidden sm:flex gap-4'
         >
            <NavbarItem>
               <Link href='#about'>About</Link>
            </NavbarItem>

            <NavbarItem>
               <Link href='#portfolio'>Portfolio</Link>
            </NavbarItem>
         </NavbarContent>

         <NavbarContent justify='end'>
            <NavbarItem className='hidden lg:flex'>
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
            </NavbarItem>
         </NavbarContent>
         <NavbarMenu>
            {menuItems.map((item, index) => (
               <NavbarMenuItem
                  className='text-white flex h-16'
                  key={`${item}-${index}`}
               >
                  <Link
                     onClick={() => {
                        toggleMenu();
                     }}
                     color={
                        index === 2
                           ? 'primary'
                           : index === menuItems.length - 1
                           ? 'danger'
                           : 'foreground'
                     }
                     className='w-full'
                     href={item.ref}
                     size='lg'
                  >
                     {item.name}
                  </Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
      </Navbar>
   );
};

export default LandingNavbar;
