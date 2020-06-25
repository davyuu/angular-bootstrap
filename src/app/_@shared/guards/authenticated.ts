import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of as ObservableOf } from 'rxjs';
import { distinctUntilChanged, filter, first, map, switchMap, tap } from 'rxjs/operators';

import { SESSION_ACTIONS, SESSION_SELECTORS } from '_@core/session';



@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(
      private router: Router,
      private store: Store<any>
  ) { }

  canActivate(): Observable<boolean> | boolean {
    return this.store.select(SESSION_SELECTORS.status).pipe(
      distinctUntilChanged(),
      tap(({ restored }) => {
        if (!restored) {
          this.store.dispatch(new SESSION_ACTIONS.Initialize());
        }
      }),
      filter(({ restored }) => restored),
      first(),
      map(({ authenticated }) => authenticated),
      tap((authenticated: boolean) => {
        if (!authenticated) {
          this.store.dispatch(new SESSION_ACTIONS.Destroy());
        }
      }),
      switchMap((authenticated: boolean) => ObservableOf(authenticated))
    );
  }
}
