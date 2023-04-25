import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {!menuOpened && mobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt=""
            onClick={() => setMenuOpened(true)}
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
              activeClass="active"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="programs"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
              activeClass="active"
            >
              Programs
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="reasons"
              smooth={true}
              onClick={() => setMenuOpened(false)}
              spy={true}
              activeClass="active"
            >
              Why us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="plans"
              activeClass="active"
              smooth={true}
              onClick={() => setMenuOpened(false)}
              spy={true}
            >
              Plans
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              activeClass="active"
              smooth={true}
              onClick={() => setMenuOpened(false)}
              spy={true}
            >
              Testimonials
            </ScrollLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
