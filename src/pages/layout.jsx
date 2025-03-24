import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../style/layout.css";
import { FiMenu, FiX } from "react-icons/fi";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Hamburger Menu (Inside Navbar) */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
          </button>

          {/* Navigation Links */}
           <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <li>
              <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Download Button (Always Visible) */}
        <button className="download-btn">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download CV
            <i class="fa-solid fa-download"></i>
          </a>
        </button>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
