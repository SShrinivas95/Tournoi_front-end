import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Partie1Component } from './partie1/partie1.component';
import { AfficheComponent } from './affiche/affiche.component';

const routes: Routes = [{
  path:'',
  component:Partie1Component},{
  path:"affiche",
  component:AfficheComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
