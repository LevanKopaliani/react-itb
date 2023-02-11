import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.scss";
import { IconContext } from "react-icons";
import MainButton from "../components/UI/MainButton";
import Logo from "../assets/img/logowhite.png";
import MenuOverlay from "./UI/MenuOverlay";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

const NavBar = () => {
  //
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [scrollTop]);
  //////    Scroll          ////////////
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  const [VisibleOverlay, setVisibleOverlay] = useState(false);

  const handleToogleOverlay = () => {
    setVisibleOverlay(!VisibleOverlay);
    setMobileMenu(false);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar").parentNode;
    VisibleOverlay
      ? (navbar.classList.value = `${navbar.classList.value} menuoverlay-open`)
      : navbar.classList.remove("menuoverlay-open");
  }, [VisibleOverlay]);
  useEffect(() => {
    const navbar = document.getElementById("navbar").parentNode;
    mobileMenu
      ? (navbar.classList.value = `${navbar.classList.value} menu-open`)
      : navbar.classList.remove("menu-open");
  }, [mobileMenu]);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      {VisibleOverlay ? <MenuOverlay onPress={handleToogleOverlay} /> : ""}
      <div
        className={scrollTop > 38 ? "navbar sticky-nav" : "navbar"}
        id="navbar"
      >
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
                to="/purpose"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
              >
                <Link
                  activeClass="activated"
                  to="purpose"
                  spy={true}
                  smooth={true}
                  onClick={closeMobileMenu}
                >
                  Our Purpose
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/offering"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
              >
                <Link
                  activeClass="activated"
                  to="offering"
                  spy={true}
                  smooth={true}
                  onClick={closeMobileMenu}
                >
                  Our Offering
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/capabilities"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
              >
                <Link
                  activeClass="activated"
                  to="capabilities"
                  spy={true}
                  smooth={true}
                  onClick={closeMobileMenu}
                >
                  Capabilities
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/video"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
              >
                <Link
                  activeClass="activated"
                  to="video"
                  spy={true}
                  smooth={true}
                  onClick={closeMobileMenu}
                >
                  Manifesto Video
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/founder"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
              >
                <Link
                  activeClass="activated"
                  to="founder"
                  spy={true}
                  smooth={true}
                  onClick={closeMobileMenu}
                >
                  Our Founder
                </Link>
              </NavLink>
            </li>
            {mobileMenu && (
              <div className="mobile-menu-button">
                <MainButton
                  text={"Get In Touch"}
                  onPress={handleToogleOverlay}
                />
              </div>
            )}
          </ul>
          <div className="menu-button">
            <MainButton text={"Get In Touch"} onPress={handleToogleOverlay} />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
