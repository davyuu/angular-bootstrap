import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '_@shared/shared.module';
import { PublicContainer } from './public.container';
import { PUBLIC_ROUTES } from './public.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(PUBLIC_ROUTES),
  ],
  declarations: [
    PublicContainer,
  ],
  providers: [],
})
export class PublicModule { }
