﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TermComponent} from './term/term.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  {path:'term', component:TermComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }