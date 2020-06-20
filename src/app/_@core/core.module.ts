import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreStoreModule } from './core.store';

@NgModule({
    imports: [
        CoreStoreModule.forRoot()
    ],
    declarations: [],
    exports: [],
    providers: []
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
