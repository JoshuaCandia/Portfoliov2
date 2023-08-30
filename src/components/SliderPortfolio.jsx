import CarouselArrows from './Carousel';
import Tech from './Tech';

function SliderPortfolio({ myRef3 }) {
   return (
      <section className='  h-screen w-screen relative overflow-hidden bg-[#060918] gap-16 flex flex-col justify-center items-center'>
         <div className=''>
            <h2
               ref={myRef3}
               className='text-yellow-500'
            >
               Portfolio
            </h2>
            <h4 className='font-bold text-white text-5xl'>Discover my work</h4>
         </div>
         <div className=' h-1/2 flex justify-around gap-4 px-4'>
            <Tech />
            <div className='w-1/2'>
               <CarouselArrows />
            </div>
         </div>
      </section>
   );
}

export default SliderPortfolio;
