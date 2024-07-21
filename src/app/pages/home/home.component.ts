// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { SearchComponent } from '../../shared/search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, CharactersListComponent, SearchComponent]
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  isLoading = true;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.rickMortyService.characters$.subscribe((characters: Character[]) => {
      this.characters = characters;
    });
    this.rickMortyService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.rickMortyService.getAllCharacters();
  }

  onSearch(filters: { [key: string]: string }): void {
    if (Object.keys(filters).length > 0) this.rickMortyService.searchCharacters(filters);
    else this.loadAllCharacters();
  }
}
