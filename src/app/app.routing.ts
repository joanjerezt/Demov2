/**
 * Created by juan on 27/02/17.
 */

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import {UserFormComponent} from "./user-form/user-form.component";

const usersRoutes: Routes = [
  { path: 'users', component: AppComponent, pathMatch: 'full' },
  //{ path: 'users/new', component: UserFormComponent},
  //{ path: 'users/:id', component: UserFormComponent}
];

export const usersRouting = RouterModule.forChild(usersRoutes);
