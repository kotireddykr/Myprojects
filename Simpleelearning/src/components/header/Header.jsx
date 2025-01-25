import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="golden-studio-navbar">
      <div className="digital-studio-container">
        <img src="/assets/learn2.png" alt="DS-logo" className="ds-logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`header-buttons ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className="header-text"
            onClick={() => handleNavigation("/")}
          >
            Home
          </Link>
          <Link
            to="/contactus"
            className="header-text"
            onClick={() => handleNavigation("/contactus")}
          >
            Contact Us
          </Link>
          <>
            <p className="header-text">Support</p>
            <Link
              to="/signin"
              className="header-text"
              onClick={() => handleNavigation("/signin")}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="create-btn"
              onClick={() => handleNavigation("/signup")}
            >
              Create Account
            </Link>
          </>
        </div>
      </div>
    </div>
  );
}

export default Header;