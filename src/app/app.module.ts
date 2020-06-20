import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { APIModule } from '_@api/api.module';
import { CoreModule } from '_@core/core.module';
import { SharedModule } from '_@shared/shared.module';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    APIModule.forRoot(),
    CoreModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
