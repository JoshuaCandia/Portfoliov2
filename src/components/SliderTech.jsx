import LandingBackground from './LandingBackground/LandingBackground';
function SliderTech({ myRef2 }) {
   return (
      <section
         id='tech'
         className=' text-center h-screen w-screen relative overflow-hidden bg-yellow-600 flex justify-start items-center'
      >
         <div className='flex w-full justify-center'>
            <h2 ref={myRef2}>Techs</h2>
         </div>
         <LandingBackground />
      </section>
   );
}

export default SliderTech;
