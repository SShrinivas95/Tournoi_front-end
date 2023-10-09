import { Component, OnInit } from '@angular/core';
import { TournoiService } from '../services/tournoi.service';
import { partie1 } from '../partie1/app';
import { HttpErrorResponse } from '@angular/common/http';
import { APIService } from '../services/api.service';
@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {

  tab: Array<partie1> = [];
  tabImageAnime : Array<any> = [] ;
  
  constructor(private TournoiService: TournoiService,private APIService : APIService) {
  }

  ngOnInit(): void {
    this.TournoiService.getAllCharacter().subscribe((response: partie1[]) => {
      this.tab = response;
      console.log(response);
    }, (error: HttpErrorResponse) => {
      alert(error.message);
    });

    
  }

}
