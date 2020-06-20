import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MODULE_NAME, ReminderEffects, ReminderReducers } from './reminder';



@NgModule({
  imports: [
    StoreModule.forRoot({
      [MODULE_NAME]: ReminderReducers
    }),
    EffectsModule.forRoot([
      ReminderEffects
    ]),
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class CoreStoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreStoreModule,
      providers: []
    };
  }

}
