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
               <SliderAbout myRef1={myRef1} />
            </div>

            <div
               id='tech'
               className='snap-center'
            >
               <SliderTech myRef2={myRef2} />
            </div>

            <div
               id='portfolio'
               className='snap-center'
            >
               <SliderPortfolio myRef3={myRef3} />
            </div>

            <div
               id='contact'
               className='snap-center'
            >
               <SliderContact myRef4={myRef4} />
            </div>
         </main>
      </>
   );
}

export default App;
