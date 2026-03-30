import {Routes} from '@angular/router';

import {Home} from './task14-2';
import {User} from './task14-3';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
];
