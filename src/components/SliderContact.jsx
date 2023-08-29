import LandingBackground from './LandingBackground/LandingBackground'
function SliderContact({ myRef4 }) {
    return (
        <section className=' text-center h-screen w-screen relative overflow-hidden bg-orange-500 flex justify-center items-center'>
            <LandingBackground />
            <h2 ref={myRef4}>Contact</h2>
        </section>
    )
}

export default SliderContact
