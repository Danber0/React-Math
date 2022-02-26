import React from "react";
import Calculator from "../../assets/img/Calculator.svg";

import { OperationChoose } from "../../components/OperationChoose";

import "./ActionChoice.scss";

export const ActionChoice: React.FC = () => {
  return (
    <div className="choice-main">
      <div className="choice-main__img">
        <img src={Calculator} alt="Calculator" />
      </div>
      <OperationChoose />
    </div>
  );
};
