import React from "react";
import Logo from "../../assets/img/Logo.svg";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header__menu">
        <div className="menu__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="menu__task">
          2 + 2 = <span>?</span>
        </div>
        <div className="menu__navigation">
          <nav>
            <ul>
              <li className={`${location.pathname === "/" ? "active" : ""} `}>
                <Link to="/">Information</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/choice" ? "active" : ""
                } `}
              >
                <Link to="/choice">Problems</Link>
              </li>
              <li
                className={`${location.pathname === "/about" ? "active" : ""} `}
              >
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
