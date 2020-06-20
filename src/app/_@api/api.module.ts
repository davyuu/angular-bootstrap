import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { environment } from '_@environment';
import { Configuration } from './app';



/** API: Generate Configuration Instance */
export function CONFIG() {
  return new Configuration({
    apiKeys: {},
    basePath: environment.API_URL,
    withCredentials: false,
  });
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: []
})
export class APIModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: APIModule,
      providers: [{
        provide: Configuration,
        useFactory: CONFIG,
        multi: false
      }]
    };
  }

  constructor(
    @Optional() @SkipSelf() parent: APIModule,
    @Optional() http: HttpClient
  ) {

    if (parent) {
      throw new Error('APIModule is already loaded. Import in your base APIModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }

  }

}
