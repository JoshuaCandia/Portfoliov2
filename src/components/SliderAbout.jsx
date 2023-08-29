//components
import LandingBackground from './LandingBackground/LandingBackground';
//hooks
import { useTypewriter, Cursor } from 'react-simple-typewriter';
//assets
import me from '../assets/me.jpg';

function SliderAbout({ myRef1 }) {
   const [text] = useTypewriter({
      words: ['Frontend Dev', 'Backend Dev', 'Diseñador', 'Freelancer'],
      loop: true,
      typeSpeed: 40,
      deleteSpeed: 50
   });
   return (
      <section className='  h-screen w-screen relative overflow-hidden bg-indigo-700 flex justify-start items-center'>
         <div className='w-[50%]'>
            <img
               className=''
               src={me}
               alt=''
            />
         </div>
         <div className='text-white pl-32  flex flex-col items-start w-[50%] gap-4'>
            <h2 className='text-yellow-500'>About</h2>
            <h3 className='text-4xl width-full text-start '>
               <span>{text}</span>
               <span>
                  <Cursor cursorStyle='|' />
               </span>
            </h3>
            <h4 className='text-indigo-300 text-md flex flex-col'>
               <span
                  ref={myRef1}
                  style={{ display: 'inline-block', width: '100%' }}
               >
                  Soy Joshua, un desarrollador apasionado de Buenos Aires,
               </span>
               <span style={{ display: 'inline-block', width: '100%' }}>
                  Argentina, en esta pagina te traigo mis
                  <span className='text-yellow-200'> Proyectos</span>,
               </span>
               <span style={{ display: 'inline-block', width: '100%' }}>
                  las <span className='text-yellow-200'>tecnologías</span> que
                  manejo, y links a mis{' '}
                  <span className='text-yellow-200'>redes</span>.
               </span>
            </h4>
         </div>

         <LandingBackground />
      </section>
   );
}

export default SliderAbout;
