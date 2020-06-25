import { createSelector } from '@ngrx/store';

import { MODULE_NAME } from './session.action.types';
import { State } from './session.state';

interface AppState {
  [moduleName: string]: State;
}

export const selectModule = (state: AppState): State => state[MODULE_NAME];

export const SESSION_SELECTORS = {
  user: createSelector(
    selectModule,
    (state: State) => state.model.user
  ),
  status: createSelector(
    selectModule,
    (state: State) => state.status
  ),
  authenticated: createSelector(
    selectModule,
    (state: State) => state.status.authenticated
  ),
};
