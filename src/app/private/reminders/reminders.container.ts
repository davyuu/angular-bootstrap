import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { REMINDER_ACTIONS, REMINDER_SELECTORS } from '_@core/reminder';

@Component({
  templateUrl: './reminders.container.html',
  styleUrls: ['./reminders.container.css']
})
export class RemindersContainer implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public state: any = {
    reminders: []
  };

  constructor(
    private store: Store<any>
  ) {
    this.subscription.add(
      this.store.select(REMINDER_SELECTORS.items)
        .subscribe(reminders => this.state.reminders = reminders)
    );
  }

  ngOnInit() {
    this.store.dispatch(new REMINDER_ACTIONS.FetchMany());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
