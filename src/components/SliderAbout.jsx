import LandingBackground from './LandingBackground/LandingBackground'
function SliderAbout({ myRef1 }) {
    return (
        <section className=' text-center h-screen w-screen relative overflow-hidden bg-teal-400 flex justify-center items-center'>
            <h2 ref={myRef1}>About Me</h2>
            <LandingBackground />
        </section>
    )
}

export default SliderAbout
