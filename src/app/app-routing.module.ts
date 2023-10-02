import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Partie1Component } from './partie1/partie1.component';

const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
