import LandingBackground from './LandingBackground/LandingBackground'

function SliderPortfolio({ myRef3 }) {
    return (
        <section className=' text-center h-screen w-screen relative overflow-hidden bg-violet-500 flex justify-center items-center'>
            <h2 ref={myRef3}>Portfolio</h2>
            <LandingBackground />
        </section>
    )
}

export default SliderPortfolio
