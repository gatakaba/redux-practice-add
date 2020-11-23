import { actionCreatorFactory } from "typescript-fsa";
import { ActionType } from "typesafe-actions";
import { ADD, SUBTRACT } from "./types";
import { counterState } from "./model";

const actionCreator = actionCreatorFactory();

export const Actions = {
  Add: actionCreator<number>(ADD),
  Subtract: actionCreator<number>(SUBTRACT),
};

export type ActionsType = ActionType<typeof Actions>;
