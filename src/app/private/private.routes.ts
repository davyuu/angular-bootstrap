// import {
//     AuthenticatedGuard
// } from '_@shared/guards';
import { PrivateContainer } from './private.container';

export const PRIVATE_ROUTES = [

  {
    path: '', component: PrivateContainer,
    // canActivate: [ AuthenticatedGuard ],
    children: [

      { path: 'reminders', loadChildren: () => import('./reminders/reminders.module').then((m) => m.RemindersModule) },

      { path: '', redirectTo: 'reminders', pathMatch: 'full' },

    ]
  }

];
