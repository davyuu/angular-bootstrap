import { ACTION_TYPES } from './reminder.action.types';
import { initialState, initialStatus, State } from './reminder.state';

export function ReminderReducers(state: State = initialState, action): State {
  switch (action.type) {
    case ACTION_TYPES.FETCH_MANY:
    case ACTION_TYPES.FETCH_ONE:
      return {
        ...state,
        status: {
          ...initialStatus,
          fetching: true
        }
      };

    case ACTION_TYPES.SAVE_MANY:
      return {
        ...state,
        items: action.items,
        status: {
          ...initialStatus,
          fetching: false,
          fetched: true,
        }
      };

    case ACTION_TYPES.SAVE_ONE:
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ],
        status: {
          ...initialStatus,
          fetching: false,
          fetched: false
        }
      };

    case ACTION_TYPES.FETCH_FAILED:
      const { error } = action;
      return {
        ...state,
        status: {
          fetching: false,
          fetched: true,
          failed: true,
          statusCode: error.status,
          errors: error.body && error.body.errors || []
        }
      };

    default:
      return state;
  }
};