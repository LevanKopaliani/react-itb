import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.scss";
import { IconContext } from "react-icons";
import MainButton from "../components/UI/MainButton";
import Logo from "../assets/img/logowhite.png";
import MenuOverlay from "./UI/MenuOverlay";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  const [VisibleOverlay, setVisibleOverlay] = useState(false);

  function handleCloseMenu() {
    setVisibleOverlay(!VisibleOverlay);
  }

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      {VisibleOverlay ? <MenuOverlay /> : ""}
      <div className="navbar">
        <div className="navbar-container wrapper">
          <div className="nav-logo">
            <span>
              <img src={Logo} alt="logo" />
            </span>
          </div>
          <div className="menu-icon" onClick={toogleMenu}>
            {mobileMenu ? "" : <FaBars />}
          </div>
          <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
            {mobileMenu && (
              <div className="mobile-header">
                <div className="mobile-header__logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="mobile-header__closebutton">
                  <FaTimes onClick={() => closeMobileMenu()} />
                </div>
              </div>
            )}

            <li className="nav-item before">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Our Purpose
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Our Offering
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Capabilities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Manifesto Video
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Our Founder
              </NavLink>
            </li>
            {mobileMenu && (
              <div className="mobile-menu-button">
                <MainButton text={"Get In Touch"} />
              </div>
            )}
          </ul>
          <div
            className="menu-button"
            onClick={() => {
              setVisibleOverlay(true);
              console.log("clicked");
            }}
          >
            <MainButton text={"Get In Touch"} />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
