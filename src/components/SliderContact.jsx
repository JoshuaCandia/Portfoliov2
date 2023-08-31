//components
import LandingBackground from './LandingBackground/LandingBackground';
import ContactForm from './ContactForm';
function SliderContact() {
   return (
      <section className='bg-[#060918] text-center h-screen w-screen relative overflow-hidden flex justify-center items-center'>
         <div className=' w-full flex flex-col items-center justify-center'>
            <ContactForm />
         </div>

         <LandingBackground />
      </section>
   );
}

export default SliderContact;
