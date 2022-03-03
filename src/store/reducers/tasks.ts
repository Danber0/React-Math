const initialState = {
  tasks: [],
};

export const TaskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_NEW_TASK":
      return { ...state, tasks: action.payload };
  }
  return state;
};
