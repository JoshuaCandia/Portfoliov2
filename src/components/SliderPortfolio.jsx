import CarouselArrows from './Carousel';
import Tech from './Tech';

function SliderPortfolio() {
   return (
      <section className='  h-screen w-screen relative overflow-hidden bg-[#060918] gap-16 flex flex-col justify-center items-center'>
         <div className='flex w-full flex-col items-center p-8 '>
            <h2 className='text-yellow-500 '>Portfolio</h2>
            <h3 className='font-bold text-white text-xl md:text-3xl lg:text-5xl'>
               Discover my work
            </h3>
         </div>
         <div className='w-full h-1/2 flex flex-col justify-around gap-16 px-4  lg:flex  lg:flex-row lg:items-center lg:justify-center'>
            <div className='flex justify-center items-center lg:w-1/3'>
               <Tech />
            </div>
            <div className=' h-1/2 lg:w-1/3  md:h-full  '>
               <CarouselArrows />
            </div>
         </div>
      </section>
   );
}

export default SliderPortfolio;
