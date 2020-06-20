import { Action } from '@ngrx/store';

import { ACTION_TYPES } from './reminder.action.types';
import { ErrorResponse, Reminder } from '_@api/app';

export class FetchMany implements Action {
  readonly type = ACTION_TYPES.FETCH_MANY;
}

export class SaveMany implements Action {
  readonly type = ACTION_TYPES.SAVE_MANY;
  constructor(
    public items: Reminder[]
  ) { }
}

export class FetchOne implements Action {
  readonly type = ACTION_TYPES.FETCH_ONE;
  constructor(
    public id: number
  ) { }
}

export class SaveOne implements Action {
  readonly type = ACTION_TYPES.SAVE_ONE;
  constructor(
    public item: Reminder
  ) { }
}

export class FetchFailed implements Action {
  readonly type = ACTION_TYPES.FETCH_FAILED;
  constructor(
    public error: ErrorResponse
  ) { }
}