import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '_@shared/shared.module';
import { RemindersContainer } from './reminders.container';
import { REMINDERS_ROUTES } from './reminders.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(REMINDERS_ROUTES),
  ],
  declarations: [
    RemindersContainer,
  ],
  providers: [],
})
export class RemindersModule { }
