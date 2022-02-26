import React from "react";
import { arrayActions } from "../../config/data";

import "./OperationChoose.scss";
import { ActionTaskContext } from "../../App";

export const OperationChoose: React.FC = () => {
  const { action, setAction } = React.useContext(ActionTaskContext);

  // Хз какой тут тип писать
  const onClickChangeAction = (event: any) => {
    if (event.target.className.includes("mark")) {
      if (!action.actionMark.includes(event.target.textContent)) {
        setAction({
          ...action,
          actionMark: [...action.actionMark, event.target.textContent],
        });
      } else {
        const newArray = action.actionMark.filter(
          (el) => el !== event.target.textContent
        );
        setAction({ ...action, actionMark: newArray });
      }
    }

    if (event.target.className.includes("difficult")) {
      setAction({ ...action, difficulty: event.target.textContent });
    }

    if (event.target.className.includes("count")) {
      setAction({ ...action, count: event.target.textContent });
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAction({ ...action, count: event.target.value });
  };

  const generateRandomTask = () => {
    if (action.difficulty === "1") {
      for (let i = 0; i <= Number(action.count); i++) {
        const firstNumber = Math.ceil(Math.random() * 30);
        const secondNumber = Math.ceil(Math.random() * 30);
        console.log(firstNumber, secondNumber);
      }
    }
  };

  const handleClickStartTask = () => {
    generateRandomTask();
  };

  return (
    <div className="choice-main__settings">
      <div className="settings__action">
        <div className="action__choose__mark">
          <h3>Арифметическое действие</h3>
          <div className="action__mark">
            {arrayActions.actionMark.map((mark, index) => (
              <div
                key={index}
                onClick={onClickChangeAction}
                className={`settings__action__mark circle checkbox ${
                  action.actionMark.includes(mark) && "active"
                }`}
              >
                {mark}
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
                className={`action__difficult__block block-check ${
                  action.difficulty.includes(numberDifficult) && "active"
                }`}
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
                className={`action__count__block block-check ${
                  action.count === numberCount && "active"
                }`}
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
        <button onClick={handleClickStartTask}>Начать</button>
      </div>
    </div>
  );
};
