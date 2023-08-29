import LandingBackground from './LandingBackground/LandingBackground';

function SliderMain({ myRef }) {
   return (
      <section
         id='main'
         className=' text-center h-screen w-screen relative overflow-hidden bg-black flex justify-start items-center'
      >
         <div className='w-full'>
            <h2
               ref={myRef}
               className='text-white text-3xl'
            >
               Soy Joshua (Insertar texto motivacional)
            </h2>
         </div>

         <LandingBackground />
      </section>
   );
}

export default SliderMain;
