import { Component, OnInit, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { partie1 } from './app';
import { TournoiService } from '../services/tournoi.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
@Component({
  selector: 'app-partie1',
  templateUrl: './partie1.component.html',
  styleUrls: ['./partie1.component.css']
})
export class Partie1Component implements OnInit {
  timeoutId:any;
  perso: partie1 = {
    nom: '',
    anime: '',
    id: undefined,
  };
  constructor(private TournoiService: TournoiService, private router: Router, private apiService: APIService) { }

  ngOnInit(): void {
  }


  Liste_Manga: Array<partie1 | undefined> = [];

  Possible: boolean = false;

  listCharacter: Array<any> = [];

  userInput: string = this.perso.nom  ;
  onSubmit(): void {
    let personnage: partie1 = {
      nom: this.perso.nom,
      id: undefined,
      anime: this.perso.anime,
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
    this.perso.anime = '';
  }

  public remove(perso: any): void {
    this.Liste_Manga = this.Liste_Manga.filter(t => t?.nom != perso.nom);
    if (this.Liste_Manga.length <= 7) {
      this.Possible = false;
    }
  }

  public ajouteListe(): void {
    const List: partie1[] = [];
    for (const charactere of this.Liste_Manga) {
      if (charactere !== undefined) {
        List.push(charactere);
      }
    }

    if (List.length != 0) {
      this.TournoiService.addCharacterList(List).subscribe(
        (response: partie1[]) => {
          console.log("List was sent: ", response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      this.router.navigate(['/affiche']);
    }

  }

  public isCharacterExist(character: partie1, list: Array<partie1 | undefined>): boolean {
    let existe: boolean = false;
    for (let aCharacter of list) {
      existe = aCharacter?.nom.toLocaleUpperCase().localeCompare(character?.nom.toUpperCase()) === 0 ? true : false;
      if (existe) break;
    }
    return existe;
  }

  public getApiCharacter(name: string): any {
    this.apiService.getChracterAnime(name).subscribe(
      (response: any) => {
        for (let i = 0; i < 5; i++) {
          console.log(response.data[i].images.jpg.image_url);
          this.listCharacter.push(response.data[i].images.jpg.image_url);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      });
  }
  

  onInput(name: any) {
    
    clearTimeout(this.timeoutId);
    this.listCharacter=[];
    this.timeoutId = setTimeout(() => {
      this.getApiCharacter(name);
    }, 800);
  }
  

  

}
