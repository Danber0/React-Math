import React, { useRef, useState } from "react";
import "./SolveTask.scss";
import { useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setResultTrue } from "../../store/actions/tasks";

interface SolveTasksProps {
  timer: number;
}

export const SolveTasks: React.FC<SolveTasksProps> = ({ timer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let correctRef: { current: HTMLDivElement | null } = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [currentTask, setCurrentTask] = useState(0);
  const { actionInfo } = useAppSelector((state) => state);
  const { tasks, answerTask } = useAppSelector((state) => state.tasks);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let timeOut: NodeJS.Timeout;
    const { value } = event.target;
    if (value === String(answerTask[currentTask])) {
      correctRef.current?.classList.add("correct");
      timeOut = setTimeout(() => {
        correctRef.current?.classList.remove("correct");
      }, 450);
      setCurrentTask(currentTask + 1);
      setInputValue("");

      if (tasks.length - 1 === currentTask) {
        dispatch(setResultTrue());
        navigate("/result");
      }

      return;
    } else {
      if (String(answerTask[currentTask]).length === value.length) {
        correctRef.current?.classList.add("wrong");
        timeOut = setTimeout(() => {
          correctRef.current?.classList.remove("wrong");
        }, 450);
      }
    }
    setInputValue(event.target.value.trim());

    return () => clearTimeout(timeOut);
  };

  return (
    <div className="solve">
      <div className="solve__content">
        <div className="solve__content-top">
          <div>
            Пример: <span className="color">{currentTask + 1} </span>из
            <span className="color"> {actionInfo.count}</span>
          </div>
          <div>
            Сложность: <span className="color">{actionInfo.difficulty}</span>
          </div>
          <div>
            Знак(и): <span className="color">{actionInfo.actionMark}</span>
          </div>
          <div>
            Секунд: <span className="color">{timer}</span>
          </div>
        </div>
        <div ref={correctRef} className="solve__content-task">
          <span>{tasks[currentTask]} =</span>
          <input
            value={inputValue}
            onChange={handleChangeInput}
            type="text"
            placeholder="?"
          />
        </div>
      </div>
    </div>
  );
};
