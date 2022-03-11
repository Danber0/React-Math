const initialState = {
  tasks: [],
  answerTask: [],
  showResultTask: false,
};

export const TaskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_NEW_TASK":
      return { ...state, tasks: action.payload };
    case "COUNT_NEW_TASK":
      const answersTask = [...action.payload];
      const newAnswerTask = answersTask.map((task) => {
        return task.includes("x")
          ? // eslint-disable-next-line no-eval
            eval(task.replaceAll("x", "*"))
          : task.includes("÷")
          ? // eslint-disable-next-line no-eval
            eval(task.replaceAll("÷", "/"))
          : // eslint-disable-next-line no-eval
            eval(task);
      });

      return { ...state, answerTask: newAnswerTask };
    case "SET_CLEAR_TASK":
      return {
        ...state,
        tasks: [],
      };
    case "SET_RESULT_TRUE":
      return {
        ...state,
        showResultTask: true,
      };
    case "SET_RESULT_FALSE":
      return {
        ...state,
        showResultTask: false,
      };
  }
  return state;
};
