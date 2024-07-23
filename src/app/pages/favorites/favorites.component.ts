import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { SearchComponent } from '../../shared/search/search.component';
import { GenericFeedbackComponent } from '../../shared/generic-feedback/generic-feedback.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  imports: [CommonModule, CharactersListComponent, SearchComponent, GenericFeedbackComponent]
})
export class FavoritesComponent implements OnInit {
  favoriteCharacters: Character[] = [];
  allFavoriteCharacters: Character[] = [];
  showFeedback: Boolean = false;
  isLoading: Boolean = true;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadAllFavoriteCharacters();
  }

  loadAllFavoriteCharacters() {
    this.rickMortyService.favoriteCharacters$.subscribe((characters: Character[]) => {
      this.favoriteCharacters = characters;
      this.allFavoriteCharacters = characters;
      this.showFeedback = characters.length === 0;
    });
  }

  onSearch(filters: { [key: string]: string }): void {
    if (Object.keys(filters).length > 0) {
      this.favoriteCharacters = this.allFavoriteCharacters.filter(character =>
        Object.keys(filters).every(key => {
          const value = character[key as keyof Character];
          return typeof value === 'string' && value.toLowerCase().includes(filters[key].toLowerCase());
        })
      );
      this.showFeedback = this.favoriteCharacters.length === 0;
    } else {
      this.favoriteCharacters = [...this.allFavoriteCharacters];
      this.showFeedback = this.favoriteCharacters.length === 0;
    }
  }
}