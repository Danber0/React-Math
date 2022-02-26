import React, { useState } from "react";
import Calculator from "../../assets/img/Calculator.svg";
import { arrayActions } from "../../config/data";

import "./ActionChoice.scss";

interface ActionState {
  actionMark: string;
  difficulty: string;
  count: string;
}

export const ActionChoice: React.FC = () => {
  const [action, setAction] = useState<ActionState>({
    actionMark: "+",
    difficulty: "",
    count: "",
  });

  const onClickChangeAction = (event: any): void => {
    if (event.target.className.includes("difficult")) {
      setAction({ ...action, difficulty: event.target.textContent });
    } else if (event.target.className.includes("count")) {
      setAction({ ...action, count: event.target.textContent });
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAction({ ...action, count: event.target.value });
  };

  const handleChangeCheckBox = (event: any) => {};

  console.log(action);

  return (
    <div className="choice-main">
      <div className="choice-main__img">
        <img src={Calculator} alt="Calculator" />
      </div>
      <div className="choice-main__settings">
        <div className="settings__action">
          <div className="action__choose__mark">
            <h3>Арифметическое действие</h3>
            <div className="action__mark">
              {arrayActions.actionMark.map((mark) => (
                <div className="settings__action__mark circle checkbox">
                  <input type="checkbox" id={String(Object.keys(mark))} />
                  <label htmlFor={String(Object.keys(mark))}>
                    {Object.values(mark)}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="action__choose__difficult">
            <h3>Сложность примеров</h3>
            <div className="action__difficult">
              {arrayActions.difficulty.map((numberDifficult, index) => (
                <div
                  key={index}
                  onClick={onClickChangeAction}
                  className="action__difficult__block block-check"
                >
                  {numberDifficult}
                </div>
              ))}
            </div>
          </div>
          <div className="action__choose__count">
            <h3>Количество примеров</h3>
            <div className="action__count">
              {arrayActions.count.map((numberCount, index) => (
                <div
                  key={index}
                  onClick={onClickChangeAction}
                  className="action__count__block block-check"
                >
                  {numberCount}
                </div>
              ))}
              <div className="action__count__block block-check">
                <input
                  value={action.count}
                  onChange={handleChangeInput}
                  type="text"
                  id="count-five"
                  placeholder="?"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
