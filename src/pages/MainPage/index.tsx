import React from "react";
import { Link } from "react-router-dom";

import MainPagePicture from "../../assets/img/main-page-picture.svg";

import "./MainPage.scss";

export const MainPage = () => {
  return (
    <div className="main-content">
      <div className="main-content__description">
        <h1>Online brain training exercise</h1>
        <p>
          On this site you can boost your brain with an online simulator. Press the button below to start
        </p>
        <button>
          <Link to="/choice">Start training</Link>
        </button>
      </div>
      <div className="main-content__image">
        <img src={MainPagePicture} alt="MainPage" />
      </div>
    </div>
  );
};
