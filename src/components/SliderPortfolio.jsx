import CarouselArrows from './Carousel';
import Tech from './Tech';

function SliderPortfolio() {
   return (
      <section className='  h-screen w-screen relative overflow-hidden bg-[#060918] gap-16 flex flex-col justify-center items-center'>
         <div className='flex justify-start w-full flex-col pl-28'>
            <h2 className='text-yellow-500 mb-4'>Portfolio</h2>
            <h3 className='font-bold text-white text-5xl'>Discover my work</h3>
         </div>
         <div className=' h-1/2 flex justify-around  gap-4 px-4'>
            <div className='w-1/3'>
               <Tech />
            </div>
            <div className='w-1/3'>
               <CarouselArrows />
            </div>
         </div>
      </section>
   );
}

export default SliderPortfolio;
