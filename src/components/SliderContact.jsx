//components
import LandingBackground from './LandingBackground/LandingBackground';

function SliderContact({ myRef4 }) {
   return (
      <section className=' text-center h-screen w-screen relative overflow-hidden bg-orange-500 flex justify-start items-center'>
         <div className='flex justify-center w-full '>
            <h2 ref={myRef4}>Contact</h2>
         </div>
         <LandingBackground />
      </section>
   );
}

export default SliderContact;
