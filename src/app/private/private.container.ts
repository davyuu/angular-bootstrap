import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { REMINDER_ACTIONS, REMINDER_SELECTORS } from '_@core/reminder';

@Component({
  templateUrl: './private.container.html',
  styleUrls: ['./private.container.css']
})
export class PrivateContainer implements OnInit, OnDestroy {
  public state: any = {
    model: {
      reminders: []
    }
  };
  private subscription: Subscription = new Subscription();

  constructor(
    private store: Store<any>
  ) {
    this.subscription.add(
      this.store.select(REMINDER_SELECTORS.items)
        .subscribe(reminders => this.state.model.reminders = reminders)
    );
  }

  ngOnInit() {
    this.store.dispatch(new REMINDER_ACTIONS.FetchMany());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
