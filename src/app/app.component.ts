import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
    <main role="main" id="main">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    // this.store.dispatch(new SYSTEM_ACTIONS.Prefetch());
  }
}
