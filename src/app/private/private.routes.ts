// import {
//     AuthenticatedGuard
// } from '_@shared/guards';
import { PrivateContainer } from './private.container';

export const PRIVATE_ROUTES = [

  {
    path: '', component: PrivateContainer,
    // canActivate: [ AuthenticatedGuard ],
    // children: [

    //   // { path: 'reminder', loadChildren: () => import('./reminder/reminder.module').then((m) => m.ReminderModule) },

    //   { path: '', redirectTo: 'reminder', pathMatch: 'full' },

    // ]
  }

];
