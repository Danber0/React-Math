import { InitialStateAction } from "../../types";

export const setActionInfo = (actionInfo: InitialStateAction) => ({
  type: "SET_ACTION_INFO",
  payload: actionInfo,
});
