import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PersonaService} from "./persona.service";
import {MaterializeModule} from "angular2-materialize";
import { UserFormComponent } from './user-form/user-form.component';
import {RouterModule, Routes} from "@angular/router";

const usersRoutes: Routes = [
  { path: 'users', component: AppComponent, pathMatch: 'full' },
  { path: 'users/new', component: UserFormComponent},
  { path: 'users/:id', component: UserFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(usersRoutes)
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
