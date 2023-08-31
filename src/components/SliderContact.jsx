//components
import LandingBackground from './LandingBackground/LandingBackground';
import ContactForm from './ContactForm';
function SliderContact() {
   return (
      <section className='bg-[#060918] text-center h-screen w-screen relative overflow-hidden flex justify-start items-center'>
         <div className='w-full flex flex-col items-center justify-center'>
            <h2>Contact</h2>
            <ContactForm />
         </div>

         <LandingBackground />
      </section>
   );
}

export default SliderContact;
