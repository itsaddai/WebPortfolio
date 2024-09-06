import "./styles/Navbar.css"

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="nav-logo">
            <a href="/">Isaac Addai</a>
        </div>
        <div className="nav-links">
            <a href="#projects-section">About</a>
            <a href="#about-section">Projects</a>
            <a href="#contact-section">Technologies</a>
        </div>
    </nav>
);
};

export default Navbar;