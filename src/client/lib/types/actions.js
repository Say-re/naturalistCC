// @flow
import type { State } from './reducer-states';

// Register your created Action type to the Actions
// Once registered, make sure to go to lib/actions and set your type to your action
export type Action = {}

export type GetState = () => State;
// eslint-disable-next-line no-use-before-define
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void | Promise<void>;
export type Dispatchables = Action | ThunkAction | Promise<Action> | Array<Action> | Array<Promise<Action>>;
export type Dispatch = (action: Dispatchables) => void;
