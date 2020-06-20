import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of as ObservableOf } from 'rxjs';
import { distinctUntilChanged, filter, first, map, pluck, switchMap, tap } from 'rxjs/operators';

// import { SESSION_ACTIONS } from '_@core/session';



@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private store: Store<any>
  ) { }

  canActivate(): Observable<boolean> | boolean {
    return true;
    // return this.store.select('session').pipe(
    //   pluck('status')
    // ).pipe(
    //   distinctUntilChanged(),
    //   tap(({ restored }) => {
    //     if (!restored) {
    //       this.store.dispatch(new SESSION_ACTIONS.Restore());
    //     }
    //   }),
    //   filter(({ restored }) => restored),
    //   first(),
    //   map(({ authenticated }) => authenticated),
    //   tap((authenticated: boolean) => {
    //     if (!authenticated) {
    //       this.store.dispatch(new SESSION_ACTIONS.Destroy(null, window.location.href));
    //     }
    //   }),
    //   switchMap((authenticated: boolean) => ObservableOf(authenticated))
    // );
  }
}
