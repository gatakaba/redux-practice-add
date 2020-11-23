import { combineReducers } from "redux";
import { counterState } from "./counter/model";
import { CounterReducers } from "./counter/reducer";

export type RootState = {
  counter: counterState;
};

export const reducers = combineReducers({ counter: CounterReducers });
