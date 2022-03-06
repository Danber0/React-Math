import React from "react";
import success from "../../assets/img/Succes.svg";
import "./Result.scss";
import { Link } from "react-router-dom";

interface ResultProps {
  time: number;
}

export const Result: React.FC<ResultProps> = ({ time }) => {
  return (
    <div className="result">
      <div className="result__content">
        <div className="result__content-image">
          <img src={success} alt="Success" />
        </div>
        <div className="result__content-title">
          Поздравляю 🔥 <br /> Ты ответил на все вопросы 😲
        </div>
        <div className="result__content-description">
          Твое время составило <span className="color">{time}</span> сек!
        </div>
        <button className="result__content-button">
          <Link to="/choice">Ещё раз</Link>
        </button>
      </div>
    </div>
  );
};
