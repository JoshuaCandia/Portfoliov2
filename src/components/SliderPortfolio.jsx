import { CarouselArrows } from './Carousel';

function SliderPortfolio({ myRef3 }) {
   return (
      <section className=' text-center h-screen w-screen relative overflow-hidden bg-[#060918] flex flex-col justify-center items-center'>
         <div>
            <h2
               ref={myRef3}
               className='text-yellow-500'
            >
               Portfolio
            </h2>
         </div>
         <div className='w-1/2'>
            <CarouselArrows />
         </div>
      </section>
   );
}

export default SliderPortfolio;
