import { Action } from '@ngrx/store';

import { User } from '_@api/app';
import { ACTION_TYPES } from './session.action.types';

export class Initialize implements Action {
  readonly type = ACTION_TYPES.INITIALIZE;
}

export class Restored implements Action {
  readonly type = ACTION_TYPES.RESTORED;
}

export class Authenticated implements Action {
  readonly type = ACTION_TYPES.AUTHENTICATED;
  constructor(
    public user: User
  ) { }
}

export class Logout implements Action {
  readonly type = ACTION_TYPES.LOGOUT;
}

export class Destroy implements Action {
  readonly type = ACTION_TYPES.DESTROY;
}
