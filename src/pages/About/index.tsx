import React from "react";
import AboutPicture from "../../assets/img/About.svg";

import "./About.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="about__image">
        <img src={AboutPicture} alt="AboutPicture" />
      </div>
      <div className="about__information">
        <h1>Сайт был создан чтобы ты мог подтянуть устный счет!</h1>
        <p>
          Автор сайта и дизайна
          <a
            href="https://career.habr.com/danber"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Danber
          </a>
        </p>
      </div>
    </div>
  );
};
