function LandingHeader({ inViews }) {
    return (
        <header className=' py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white'>
            <div className='flex  px-4 py-2 '>
                <h1>Joshua Candia</h1>
            </div>
            <ul className='flex [&>li]:inline-block [&>li]:px-4 [&>li]:py-2'>
                <li>
                    <a href=''>Sobre Mi</a>
                </li>
                <li>
                    <a href=''>Tecnologías</a>
                </li>
                <li>
                    <a href=''>Portfolio</a>
                </li>
            </ul>
            <div className=''>
                <button className='px-4 py-2'>Contactáme</button>
            </div>
        </header>
    )
}

export default LandingHeader
