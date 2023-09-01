import CarouselArrows from './Carousel';
import Tech from './Tech';

function SliderPortfolio() {
   return (
      <section className='  h-screen w-screen relative overflow-hidden bg-[#060918] gap-16 flex flex-col justify-start pt-16 items-center'>
         <div className='flex w-full flex-col items-center p-8 '>
            <h2 className='text-yellow-500 '>Portfolio</h2>
            <h3 className='font-bold text-white text-xl md:text-3xl lg:text-5xl'>
               Discover my work
            </h3>
         </div>
         <div className='h-[70%] flex flex-col justify-center items-around  gap-8 px-4 lg:flex lg:h-full lg:flex-row lg:items-center lg:justify-center '>
            <div className=' flex-col justify-center items-center lg:w-1/3'>
               <h3 className='flex  justify-center w-full mb-6 text-yellow-500 '>
                  Technologies
               </h3>
               <Tech />
            </div>
            <div className='mt-8 lg:mt-0 h-full lg:h-[80%] lg:w-1/2'>
               <CarouselArrows />
            </div>
         </div>
      </section>
   );
}

export default SliderPortfolio;
