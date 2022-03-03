import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { arrayActions } from "../../config/data";

import "./OperationChoose.scss";

import { generateTasks } from "../../config/generateTask";
import { setNewTask } from "../../store/actions/tasks";

interface InitialStateAction {
  actionMark: string[];
  difficulty: string;
  count: string;
}

export const OperationChoose: React.FC = () => {
  const dispatch = useDispatch();
  // const { task } = useAppSelector((state) => state);
  const [action, setAction] = useState<InitialStateAction>({
    actionMark: ["+"],
    difficulty: "1",
    count: "5",
  });

  // Хз какой тут тип писать
  const onClickChangeAction = (event: any) => {
    if (event.target.className.includes("mark")) {
      if (
        !action.actionMark.includes(event.target.textContent) &&
        action.count.length
      ) {
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
      const task = generateTasks(Number(action.count), action.actionMark);
      dispatch(setNewTask(task));
    }
  };

  const handleClickStartTask = () => {
    const regExp = new RegExp(/^\d+$/g);
    if (regExp.test(action.count)) {
      generateRandomTask();
    } else {
      setAction({ ...action, count: "" });
      alert("Введите целое число!");
    }
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
                  action.actionMark.includes(mark) ? "active" : ""
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
                  action.difficulty.includes(numberDifficult) ? "active" : ""
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
                  action.count === numberCount ? "active" : ""
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
