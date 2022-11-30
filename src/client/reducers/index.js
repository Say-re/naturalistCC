// @flow

import { combineReducers } from 'redux';

import type { State } from '../lib/types/reducer-states';
import type { Action } from '../lib/types/actions';

type Reducer<S, A> = { State: S, Action: A };

const reducer: Reducer<State, Action> = combineReducers({

});

export default reducer;

export const defaultState: State = {
};
