import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '_@shared/shared.module';
import { PrivateContainer } from './private.container';
import { PRIVATE_ROUTES } from './private.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(PRIVATE_ROUTES),
  ],
  declarations: [
    PrivateContainer,
  ],
  providers: [],
})
export class PrivateModule { }
