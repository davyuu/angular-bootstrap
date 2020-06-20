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
        (state: State) => {
            console.log('state:', state)
            return state.items
        }
    ),

    item: createSelector(
        selectModule,
        (state: State, id: string) => state.items.find[id]
    ),

    status: createSelector(
        selectModule,
        (state: State) => state.status
    ),
};
