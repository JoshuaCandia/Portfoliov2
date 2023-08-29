import './App.scss'

//components
import LandingBackground from './components/LandingBackground/LandingBackground'
import LandingHeader from './components/LandingHeader'

//sliders
import SliderAbout from './components/SliderAbout'
import SliderContact from './components/SliderContact'
import SliderPortfolio from './components/SliderPortfolio'
import SliderTech from './components/SliderTech'

function App() {
    return (
        <main className=''>
            <SliderAbout />
            <SliderTech />
            <SliderPortfolio />
            <SliderContact />
        </main>
    )
}

export default App
