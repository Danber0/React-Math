import React from "react";
import Logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <div className="menu__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu__task">
          2 + 2 = <span>?</span>
        </div>
        <div className="menu__navigation">
          <nav>
            <ul>
              <li className="active">
                <Link to="/">Информация</Link>
              </li>
              <li>
                <Link to="/choice">Примеры</Link>
              </li>
              <li>
                <Link to="/about">О сайте</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
