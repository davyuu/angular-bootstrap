import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of as ObservableOf } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { AuthService, User } from '_@api/app';
import { ACTION_TYPES } from './session.action.types';
import * as SESSION_ACTIONS from './session.actions';

@Injectable()
export class SessionEffects {

  constructor(
      private actions$: Actions,
      private authService: AuthService,
      private router: Router,
      private store: Store<any>,
  ) {}

  @Effect() initialize$ = this.actions$.pipe(
    ofType(ACTION_TYPES.INITIALIZE),
    map((action: SESSION_ACTIONS.Initialize) => action),
    switchMap(() => this.authService.getCurrentUser().pipe(
      switchMap((user: User) => ObservableOf(new SESSION_ACTIONS.Authenticated(user))),
      tap(() => this.store.dispatch(new SESSION_ACTIONS.Restored())),
    ))
  );

  @Effect() logout$ = this.actions$.pipe(
    ofType(ACTION_TYPES.LOGOUT),
    map((action: SESSION_ACTIONS.Logout) => action),
    switchMap(() => this.authService.logout().pipe(
      switchMap((res) => ObservableOf(new SESSION_ACTIONS.Destroy())),
    ))
  );

  @Effect() destroy$ = this.actions$.pipe(
    ofType(ACTION_TYPES.DESTROY),
    map((action: SESSION_ACTIONS.Destroy) => action),
    map(() => this.router.navigate(['/error'], { skipLocationChange: true }))
  );
}
