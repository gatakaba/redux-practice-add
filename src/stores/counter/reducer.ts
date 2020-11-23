import { counterState } from "./model";
import { Actions } from "./actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export const initialState: counterState = {
  num: 0,
};

export const CounterReducers = reducerWithInitialState<counterState>(
  initialState
)
  .case(Actions.Add, (state, value) => {
    return { num: state.num + value };
  })
  .case(Actions.Subtract, (state, value) => {
    return { num: state.num - value };
  });
