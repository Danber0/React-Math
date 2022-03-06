const initialState = {
  actionMark: ["+"],
  difficulty: 1,
  count: 5,
};

export const ActionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_ACTION_INFO":
      return { ...action.payload };
  }
  return state;
};
