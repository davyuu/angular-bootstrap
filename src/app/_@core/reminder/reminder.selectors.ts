import { createSelector } from '@ngrx/store';

import { MODULE_NAME } from './reminder.action.types';
import { State } from './reminder.state';

interface AppState {
  [moduleName: string]: State;
}

const selectModule = (state: AppState): State => state[MODULE_NAME];

export const REMINDER_SELECTORS = {
  items: createSelector(
    selectModule,
    (state: State) => state.items || []
  ),

  item: createSelector(
    selectModule,
    (state: State, id: number) => (state.items || []).find(item => item.id === id)
  ),

  status: createSelector(
    selectModule,
    (state: State) => state.status
  ),
};
