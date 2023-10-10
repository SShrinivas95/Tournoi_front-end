import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})
export class AppComponent {
  title = 'Projet Tournoi';
  ParentData :string []=["test","bof","Ah"];

  recevoirData(recu : string[]) :void
 {
  console.log(recu);
 }
}
