import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { partie1 } from '../partie1/app';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';


 @Injectable({
   providedIn: 'root'
 })
 export class TournoiService {
    private apiServerUrl = environment.apiBaseUrl;

   constructor(private http : HttpClient) { }

  public getAllCharacter() : Observable<partie1[]> {
    return this.http.get<partie1[]>(`${this.apiServerUrl}/character/get`)
  }

  public addCharacter(character : partie1) : Observable<partie1> {
    return this.http.post<partie1>(`${this.apiServerUrl}/character/put`,character)
  }

  public addCharacterList(Liste_Manga: partie1[]): Observable<partie1[]> {
    return this.http.post<partie1[]>(`${this.apiServerUrl}/character/putAll`, Liste_Manga, { responseType: 'json' });
  }

  public deleteCharacter(id: number): Observable<string> {
    return this.http.delete(`${this.apiServerUrl}/character/delete/${id}`, { responseType: 'text' });
  }
      

}
