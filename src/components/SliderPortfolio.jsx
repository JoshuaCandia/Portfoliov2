import CarouselArrows from './Carousel';

import Tech from './Tech';

function SliderPortfolio() {
   return (
      <section className=' flex flex-col justify-start pt-16 h-screen w-screen relative overflow-hidden bg-[#060918] '>
         <div className='flex w-full flex-col items-center pt-8 '>
            <h3 className='font-bold text-white text-xl md:text-3xl lg:text-5xl'>
               Discover my work
            </h3>
         </div>
         <div className=' h-[60%] flex flex-col-reverse justify-start gap-8 items-around px-4 lg:flex lg:h-full lg:flex-row lg:items-center lg:justify-center '>
            <div className='flex-col justify-center items-center lg:w-1/3 lg:h-[65%]'>
               <Tech />
            </div>
            <div className=' h-[60%] py-4 lg:mt-0 lg:h-[80%] lg:w-1/2'>
               <CarouselArrows />
            </div>
         </div>
      </section>
   );
}

export default SliderPortfolio;
