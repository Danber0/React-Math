import React from "react";
import MainPagePicture from "../../assets/img/main-page-picture.svg";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <div className="main-content">
      <div className="main-content__description">
        <h1>Онлайн тренажер устного счета</h1>
        <p>
          На этом сайте ты сможешь прокачать свой мозг при помощи онлайн
          тренажера нажми кнопку ниже, чтобы начать
        </p>
        <button>Начать тренировку</button>
      </div>
      <div className="main-content__image">
        <img src={MainPagePicture} alt="MainPage" />
      </div>
    </div>
  );
};
