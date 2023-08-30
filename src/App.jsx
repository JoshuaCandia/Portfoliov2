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

   const inViews = {
      observer
   };

   return (
      <>
         <LandingHeader inViews={inViews} />
         <main className='snap-y snap-mandatory relative h-screen overflow-y-auto overflow-x-hidden scroll-smooth'>
            <div
               id='main'
               className='snap-center'
            >
               <SliderMain myRef={myRef} />
            </div>
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
         </main>
      </>
   );
}

export default App;
