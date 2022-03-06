export const setNewTask = (task: string[]) => ({
  type: "SET_NEW_TASK",
  payload: task,
});

export const countNewTask = (task: string[]) => ({
  type: "COUNT_NEW_TASK",
  payload: task,
});

export const setClearTask = () => ({
  type: "SET_CLEAR_TASK",
});

export const setResultTrue = () => ({
  type: "SET_RESULT_TRUE",
});

export const setResultFalse = () => ({
  type: "SET_RESULT_FALSE",
});
