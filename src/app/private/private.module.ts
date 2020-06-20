import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PrivateContainer } from './private.container';
import { PRIVATE_ROUTES } from './private.routes';

@NgModule({
  imports: [
    RouterModule.forChild(PRIVATE_ROUTES),
  ],
  declarations: [
    PrivateContainer,
  ],
  providers: [],
})
export class PrivateModule { }
