import LandingBackground from './LandingBackground/LandingBackground'
function SliderTech({ myRef2 }) {
    return (
        <section className=' text-center h-screen w-screen relative overflow-hidden bg-yellow-500 flex justify-center items-center'>
            <LandingBackground />
            <h2 ref={myRef2}>Techs</h2>
        </section>
    )
}

export default SliderTech
