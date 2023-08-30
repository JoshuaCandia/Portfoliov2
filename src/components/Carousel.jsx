//hooks
import { useState, useEffect } from 'react';
import { Carousel, IconButton } from '@material-tailwind/react';
import { Button, Link } from '@nextui-org/react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
const CarouselArrows = () => {
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
      <Carousel
         className='rounded-xl'
         prevArrow={({ handlePrev }) => (
            <IconButton
               variant='text'
               color='white'
               size={isScreenSmall ? 'sm' : 'lg'}
               onClick={handlePrev}
               className='!absolute top-2/4 left-4 -translate-y-2/4'
               navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
                     {new Array(length).fill('').map((_, i) => (
                        <span
                           key={i}
                           className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                              activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                           }`}
                           onClick={() => setActiveIndex(i)}
                        />
                     ))}
                  </div>
               )}
            >
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='h-6 w-6'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                  />
               </svg>
            </IconButton>
         )}
         nextArrow={({ handleNext }) => (
            <IconButton
               variant='text'
               color='white'
               size={isScreenSmall ? 'sm' : 'lg'}
               onClick={handleNext}
               className='!absolute top-2/4 !right-4 -translate-y-2/4'
            >
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='h-6 w-6'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                  />
               </svg>
            </IconButton>
         )}
      >
         {/* Rick And Morty 1 slider */}
         <div className='relative h-full w-full'>
            <img
               src='https://user-images.githubusercontent.com/99448044/264221494-5399ba50-4795-4842-b8c1-c30b27bebb78.png'
               alt='image 1'
               className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full place-items-start transition-colors bg-black/25'>
               <div className='w-full h-full flex justify-end items-end'>
                  <Link
                     target='_blank'
                     href='https://github.com/JoshuaCandia/RickMorty-app'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsGithub
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
                  <Link
                     target='_blank'
                     href='https://www.linkedin.com/in/candiajoshua'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsLinkedin
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         {/* 2 slider */}
         <div className='relative h-full w-full'>
            <img
               src='https://user-images.githubusercontent.com/99448044/264221420-905dc33b-91fb-43ba-83c7-9c23b1f1d009.png'
               alt='image 1'
               className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full place-items-start transition-colors bg-black/25'>
               <div className='w-full h-full flex justify-end items-end'>
                  <Link
                     target='_blank'
                     href='https://github.com/JoshuaCandia/RickMorty-app'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsGithub
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
                  <Link
                     target='_blank'
                     href='https://www.linkedin.com/in/candiajoshua'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsLinkedin
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         {/* Countries API */}
         {/* 3 slider */}
         <div className='relative h-full w-full'>
            <img
               src='https://user-images.githubusercontent.com/99448044/264223129-9fab97ce-c5e6-4a76-96c8-2c02ff9190f0.png'
               alt='image 1'
               className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full place-items-start transition-colors bg-black/25'>
               <div className='w-full h-full flex justify-end items-end'>
                  <Link
                     target='_blank'
                     href='https://github.com/JoshuaCandia/APICountries'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsGithub
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
                  <Link
                     target='_blank'
                     href='https://www.linkedin.com/in/candiajoshua'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsLinkedin
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         {/* 4 slider */}
         <div className='relative h-full w-full'>
            <img
               src='https://user-images.githubusercontent.com/99448044/264223325-e9532f2c-5435-4941-9cac-d88812ef6e6f.png'
               alt='image 1'
               className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full place-items-start transition-colors bg-black/25'>
               <div className='w-full h-full flex justify-end items-end'>
                  <Link
                     target='_blank'
                     href='https://github.com/JoshuaCandia/APICountries'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsGithub
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
                  <Link
                     target='_blank'
                     href='https://www.linkedin.com/in/candiajoshua'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsLinkedin
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         {/* Auxie APP */}
         {/* 5 slider */}
         <div className='relative h-full w-full'>
            <img
               src='https://user-images.githubusercontent.com/99448044/264437021-30dfdb11-f2d5-4f40-837d-cb5fb8f508ed.png'
               alt='image 1'
               className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full place-items-start transition-colors bg-black/50'>
               <div className='w-full h-full flex justify-end items-end'>
                  <Link
                     target='_blank'
                     href=' https://github.com/JoshuaCandia/AUXIE-App'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsGithub
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
                  <Link
                     target='_blank'
                     href='https://www.linkedin.com/in/candiajoshua'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsLinkedin
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         {/* 6 slider */}
         <div className='relative h-full w-full'>
            <img
               src='https://user-images.githubusercontent.com/99448044/264437659-c0a7df81-82b5-4a28-932f-036d6f3de38e.png'
               alt='image 1'
               className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full place-items-start transition-colors bg-black/50'>
               <div className='w-full h-full flex justify-end items-end'>
                  <Link
                     target='_blank'
                     href='https://github.com/JoshuaCandia/AUXIE-App'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsGithub
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
                  <Link
                     target='_blank'
                     href='https://www.linkedin.com/in/candiajoshua'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsLinkedin
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         {/* 7 slider */}
         <div className='relative h-full w-full'>
            <img
               src='https://user-images.githubusercontent.com/99448044/264437274-ace763df-e6af-4570-847e-62710dc9f317.png'
               alt='image 1'
               className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full place-items-start transition-colors bg-black/50'>
               <div className='w-full h-full flex justify-end items-end'>
                  <Link
                     target='_blank'
                     href='https://github.com/JoshuaCandia/AUXIE-App'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsGithub
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
                  <Link
                     target='_blank'
                     href='https://www.linkedin.com/in/candiajoshua'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsLinkedin
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         {/* 8 slider */}
         <div className='relative h-full w-full'>
            <img
               src='https://user-images.githubusercontent.com/99448044/264437475-12ba8a13-d0a0-4eed-a7d9-556d664f22d3.png'
               alt='image 1'
               className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 grid h-full w-full place-items-start transition-colors bg-black/50'>
               <div className='w-full h-full flex justify-center lg:justify-end items-end pb-12 lg:pb-0'>
                  <Link
                     target='_blank'
                     href='https://github.com/JoshuaCandia/AUXIE-App'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsGithub
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
                  <Link
                     target='_blank'
                     href='https://www.linkedin.com/in/candiajoshua'
                  >
                     <Button className='px-4 py-2 rounded-md'>
                        <BsLinkedin
                           size={20}
                           color='white'
                        />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </Carousel>
   );
};

export default CarouselArrows;
