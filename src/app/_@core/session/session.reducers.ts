import { ACTION_TYPES } from './session.action.types';
import { initialState, State } from './session.state';

export function SessionReducers(state: State = initialState, action): State {
  switch(action.type) {
    case ACTION_TYPES.AUTHENTICATED:
      return {
        model: {
          user: action.user
        },
        status: {
          ...state.status,
          authenticated: true
        }
      };

    case ACTION_TYPES.RESTORED:
      return {
        ...state,
        status: {
          ...state.status,
          restored: true
        }
      };

    case ACTION_TYPES.LOGOUT:
      return initialState;

    default:
      return state;
  }
}
