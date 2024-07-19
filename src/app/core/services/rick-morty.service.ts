import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private apiUrl = `${environment.apiUrl}/character`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<{ results: Character[] }>(this.apiUrl).pipe(
      map(response => response.results)
    );
  }
}
