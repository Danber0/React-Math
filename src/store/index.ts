import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TaskReducer } from "./reducers/tasks";

const rootReducers = combineReducers({
  task: TaskReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
