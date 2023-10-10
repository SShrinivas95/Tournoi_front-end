import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  
  providedIn: 'root'

})
export class APIService {

  constructor(private http: HttpClient) { }

  private URL = `https://api.jikan.moe/v4/characters`;

  public getChracterAnime(name : string): Observable<any> {
    const url = `${this.URL}?q=${name}`;
    return this.http.get(url);
  }

}


