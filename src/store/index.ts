import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TaskReducer } from "./reducers/tasks";
import { ActionReducer } from "./reducers/actionInfo";

const rootReducers = combineReducers({
  tasks: TaskReducer,
  actionInfo: ActionReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
