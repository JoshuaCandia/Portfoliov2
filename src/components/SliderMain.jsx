import LandingBackground from './LandingBackground/LandingBackground'
function SliderMain({ myRef }) {
    return (
        <section className=' text-center h-screen w-screen relative overflow-hidden bg-black flex justify-center items-center'>
            <h2 ref={myRef}>About Me</h2>
            <LandingBackground />
        </section>
    )
}

export default SliderMain
