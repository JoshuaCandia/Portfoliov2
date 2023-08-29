function LandingHeader() {
    return (
        <header className='flex justify-between py-3 px-9 font-medium'>
            <div className='flex px-2 '>
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
                <li>
                    <a href=''>Contacto</a>
                </li>
            </ul>
            <nav className='flex  '>
                <ul className='flex [&>li]:inline-block [&>li]:px-4 [&>li]:py-2'>
                    <li>
                        <a href=''>Linkedin</a>
                    </li>
                    <li>
                        <a href=''>Github</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default LandingHeader
