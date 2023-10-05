import { Component, OnInit, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { partie1 } from './app';
import { TournoiService } from '../services/tournoi.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-partie1',
  templateUrl: './partie1.component.html',
  styleUrls: ['./partie1.component.css']
})
export class Partie1Component implements OnInit {

  private currentId = 1;

  perso: partie1 = {
    nom: '',
    id: undefined,
  };
  constructor(private TournoiService: TournoiService) { }

  ngOnInit(): void {
  }

  Liste_Manga: Array<partie1 | undefined> = new Array<partie1 | undefined>(8);

  Possible: boolean = false;

  onSubmit(): void {
    let personnage: partie1 = {
      nom: this.perso.nom,
      id: undefined,
    };

    if (this.Liste_Manga.length >= 8) {
      this.Possible = true;
    } else {
      const existe: boolean = this.isCharacterExist(personnage, this.Liste_Manga);
      if (!existe) {
        this.Liste_Manga.push(personnage);
      }
      else {
        alert("Le personnage existe déjà");
      }

    }
    this.perso.nom = '';
  }

  public remove(perso: any): void {
    this.Liste_Manga = this.Liste_Manga.filter(t => t?.nom != perso.nom);
    if (this.Liste_Manga.length <= 7) {
      this.Possible = false;
    }
  }

  public ajouteListe(): void {
    const List : partie1[] = [] ;
    for(const charactere of this.Liste_Manga){
      if(charactere !== undefined){
        List.push(charactere);
      }
    }
    this.TournoiService.addCharacterList(List).subscribe(
      (response: partie1[]) => { 
        console.log("List was send : ",response); 
      }
      , (error: HttpErrorResponse) => 
      { 
        alert(error.message); }
    );
  }



  public isCharacterExist(character: partie1, list: Array<partie1 | undefined>): boolean {
    let existe: boolean = false;
    for (let aCharacter of list) {
      existe = aCharacter?.nom.toLocaleUpperCase().localeCompare(character?.nom.toUpperCase()) === 0 ? true : false;
      if (existe) break;
    }
    return existe;
  }

}
