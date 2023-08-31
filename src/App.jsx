//styles
import './App.scss';
//hooks
import { useInView } from 'react-intersection-observer';
//components
import LandingBackground from './components/LandingBackground/LandingBackground';
import LandingHeader from './components/LandingHeader';
//sliders
import SliderAbout from './components/SliderAbout';
import SliderContact from './components/SliderContact';
import SliderPortfolio from './components/SliderPortfolio';
import SliderTech from './components/SliderTech';
import SliderMain from './components/SliderMain';

function App() {
   //intersection observer
   const { ref: myRef, inView: observer } = useInView();

   observer;

   return (
      <>
         <div className='snap-y snap-mandatory relative h-screen overflow-y-auto overflow-x-hidden scroll-smooth'>
            <LandingHeader observer={observer} />
            <main
               id='main'
               className='snap-center'
            >
               <SliderMain myRef={myRef} />
            </main>
            <div
               id='about'
               className='snap-center'
            >
               <SliderAbout />
            </div>

            <div
               id='portfolio'
               className='snap-center'
            >
               <SliderPortfolio />
            </div>
            <div
               id='contact'
               className='snap-center'
            >
               <SliderContact />
            </div>
         </div>
      </>
   );
}

export default App;
