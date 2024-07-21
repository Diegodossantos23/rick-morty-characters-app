// src/app/core/services/rick-morty.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, catchError, finalize } from 'rxjs/operators';
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

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    console.log('RickMortyService initialized');
  }

  getAllCharacters(): Observable<Character[]> {
    this.isLoading$.next(true);
    return this.http.get<{ results: Character[] }>(this.apiUrl).pipe(
      tap(response => console.log('API response:', response)),
      map(response => response.results),
      tap(characters => {
        this.syncFavorites(characters);
        this.charactersSubject.next(characters);
      }),
      catchError(error => {
        console.error(error);
        return [];
      }),
      finalize(() => this.isLoading$.next(false))
    );
  }

  searchCharacters(queryParams: any): Observable<Character[]> {
    let params = new HttpParams();
    for (const key in queryParams) {
      if (queryParams[key]) params = params.append(key, queryParams[key]);
    }

    this.isLoading$.next(true);
    return this.http.get<{ results: Character[] }>(this.apiUrl, { params }).pipe(
      tap(response => console.log('API response:', response)),
      map(response => response.results),
      tap(characters => {
        this.syncFavorites(characters);
        this.charactersSubject.next(characters);
      }),
      catchError(error => {
        console.error(error);
        return [];
      }),
      finalize(() => this.isLoading$.next(false))
    );
  }

  addFavorite(character: Character): void {
    const favorites = this.favoriteCharactersSubject.value;
    if (!favorites.find(c => c.id === character.id)) {
      character.isFavorite = true;
      this.favoriteCharactersSubject.next([...favorites, character]);
      this.syncFavorites(this.charactersSubject.value);
    }
  }

  removeFavorite(character: Character): void {
    const favorites = this.favoriteCharactersSubject.value.filter(c => c.id !== character.id);
    character.isFavorite = false;
    this.favoriteCharactersSubject.next(favorites);
    this.syncFavorites(this.charactersSubject.value);
  }

  getFavoriteCount(): Observable<number> {
    return this.favoriteCharacters$.pipe(
      map(favorites => favorites.length)
    );
  }

  private syncFavorites(characters: Character[]): void {
    const favoriteIds = this.favoriteCharactersSubject.value.map(c => c.id);
    characters.forEach(character => {
      character.isFavorite = favoriteIds.includes(character.id);
    });
  }
}
