import reactDom from 'react-dom';
function NavbarContent () {
    return (
        <div className="navbar items-center">
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

function Navbar() {
    const navbarRoot = document.getElementById('header');

    if (!navbarRoot) {
      return null;
    }

    return reactDom.createPortal(<NavbarContent />, navbarRoot);

}

export default Navbar;