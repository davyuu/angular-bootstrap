import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { REMINDER_ACTIONS, REMINDER_SELECTORS } from '_@core/reminder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public state: any = {
    model: {
      reminders: []
    }
  };
  private subscription: Subscription = new Subscription();
  public title = 'angular-bootstrap';

  constructor(
    private store: Store<any>
  ) {
    this.subscription.add(
      this.store.select(REMINDER_SELECTORS.items)
        .subscribe(reminders => this.state.model.reminders = reminders)
    )
  }

  ngOnInit() {
    this.store.dispatch(new REMINDER_ACTIONS.FetchMany());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
