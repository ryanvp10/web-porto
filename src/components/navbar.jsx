function Navbar () {
    return (
        <div className="navbar">
            <div className="container px-5 py-3 mx-auto">
                <div className="navbar-box flex justify-between items-center">
                <a href="#" className="navbar-logo">MyPortfolio</a>
                <ul className="navbar-menu flex gap-8 text-[#F0F0F7]">
                    <li>
                        <a href="#about" className="font-mono hover:text-[#FC764A]">About</a>
                    </li>
                    <li>
                        <a href="#home" className="font-mono hover:text-[#FC764A]">Experience</a>
                    </li>
                    <li>
                        <a href="#projects" className="font-mono hover:text-[#FC764A]">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="font-mono hover:text-[#FC764A]">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;