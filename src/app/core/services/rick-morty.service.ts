import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Character } from '../models/character.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private apiUrl = `${environment.apiUrl}/character`;
  private charactersSubject = new BehaviorSubject<Character[]>([]);
  characters$ = this.charactersSubject.asObservable();

  constructor(private http: HttpClient) {
    console.log('RickMortyService initialized');
  }

  getAllCharacters(): void {
    this.http.get<{ results: Character[] }>(this.apiUrl).pipe(
      tap(response => console.log('API response:', response)),
      map(response => response.results),
      tap(characters => console.log('Characters found:', characters))
    ).subscribe(characters => this.charactersSubject.next(characters));
  }
}
