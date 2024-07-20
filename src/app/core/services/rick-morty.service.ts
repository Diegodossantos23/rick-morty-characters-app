import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  private favoriteCharactersSubject = new BehaviorSubject<Character[]>([]);
  favoriteCharacters$ = this.favoriteCharactersSubject.asObservable();

  constructor(private http: HttpClient) {
    console.log('RickMortyService initialized');
  }

  getAllCharacters(): void {
    this.http.get<{ results: Character[] }>(this.apiUrl).pipe(
      tap(response => console.log('API response:', response)),
      map(response => response.results),
      tap(characters => this.charactersSubject.next(characters))
    ).subscribe();
  }

  searchCharacters(queryParams: any): void {
    let params = new HttpParams();
    for (const key in queryParams) {
      if (queryParams[key]) params = params.append(key, queryParams[key]); 
    }

    this.http.get<{ results: Character[] }>(this.apiUrl, { params }).pipe(
      tap(response => console.log('API response:', response)),
      map(response => response.results),
      tap(characters => this.charactersSubject.next(characters))
    ).subscribe();
  }

  addFavorite(character: Character): void {
    const favorites = this.favoriteCharactersSubject.value;
    if (!favorites.find(c => c.id === character.id)) {
      character.isFavorite = true;
      this.favoriteCharactersSubject.next([...favorites, character]);
      console.log("Added to favorites:", character);
    }
  }

  removeFavorite(character: Character): void {
    const favorites = this.favoriteCharactersSubject.value.filter(c => c.id !== character.id);
    character.isFavorite = false;
    this.favoriteCharactersSubject.next(favorites);
    console.log("Removed from favorites:", character);
  }
}
