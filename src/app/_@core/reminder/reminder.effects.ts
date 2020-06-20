import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ErrorResponse, Reminder, ReminderService } from '_@api/app';
import * as ACTIONS from './reminder.actions';
import { ACTION_TYPES } from './reminder.action.types';

@Injectable()
export class ReminderEffects {

    constructor(
        private actions$: Actions,
        private reminderService: ReminderService,
    ) {}

    @Effect() fetchMany$ = this.actions$.pipe(
        ofType(ACTION_TYPES.FETCH_MANY),
        map((action: ACTIONS.FetchMany) => action),
        switchMap((action) => this.reminderService.getReminders().pipe(
            map((res: Reminder[]) => new ACTIONS.SaveMany(res)),
            catchError((err: ErrorResponse) => of(new ACTIONS.FetchFailed(err)))
        ))
    );

    @Effect() fetchOne$ = this.actions$.pipe(
        ofType(ACTION_TYPES.FETCH_ONE),
        map((action: ACTIONS.FetchOne) => action),
        switchMap((action) => this.reminderService.getReminder(action.id).pipe(
            map((res: Reminder) => new ACTIONS.SaveOne(res)),
            catchError((err: ErrorResponse) => of(new ACTIONS.FetchFailed(err)))
        ))
    );
}
