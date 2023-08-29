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
   const { ref: myRef1, inView: firstObserver } = useInView();
   const { ref: myRef2, inView: secondObserver } = useInView();
   const { ref: myRef3, inView: thirdObserver } = useInView();
   const { ref: myRef4, inView: fourthObserver } = useInView();
   const inViews = {
      observer,
      firstObserver,
      secondObserver,
      thirdObserver,
      fourthObserver
   };

   return (
      <div className='absolute'>
         <main className='snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth'>
            <LandingHeader inViews={inViews} />

            <div className='snap-center'>
               <SliderMain myRef={myRef} />
            </div>

            <div className='snap-center'>
               <SliderAbout myRef1={myRef1} />
            </div>

            <div className='snap-center'>
               <SliderTech myRef2={myRef2} />
            </div>

            <div className='snap-center'>
               <SliderPortfolio myRef3={myRef3} />
            </div>

            <div className='snap-center'>
               <SliderContact myRef4={myRef4} />
            </div>
         </main>
      </div>
   );
}

export default App;
