import { actionCreatorFactory } from "typescript-fsa";
import { ActionType } from "typesafe-actions";
import { ADD } from "./types";
import { counterState } from "./model";

const actionCreator = actionCreatorFactory();

export const Actions = {
  Add: actionCreator(ADD),
};

export type ActionsType = ActionType<typeof Actions>;
