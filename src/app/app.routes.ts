export const APP_ROUTES = [

    { path: '', redirectTo: 'private', pathMatch: 'full' },

    { path: 'private', loadChildren: () => import('./private/private.module').then((m) => m.PrivateModule) },

    { path: 'public', loadChildren: () => import('./public/public.module').then((m) => m.PublicModule) },

    // { path: '**', loadChildren: () => import('./error/error.module').then((m) => m.ErrorModule) },

];
