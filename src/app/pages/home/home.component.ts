import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { SearchComponent } from '../../shared/search/search.component';
import { GenericFeedbackComponent } from '../../shared/generic-feedback/generic-feedback.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, CharactersListComponent, SearchComponent, GenericFeedbackComponent]
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  showFeedback: Boolean = false;
  isLoading: Boolean = true;
  errorMessage: string | null = null;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.rickMortyService.characters$.subscribe((characters: Character[]) => {
      this.characters = characters;
      this.showFeedback = characters.length === 0;
    });

    this.rickMortyService.error$.subscribe(error => {
      this.errorMessage = error;
      this.showFeedback = !!error;
    });

    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.rickMortyService.getAllCharacters().subscribe((characters: Character[]) => {
      this.characters = characters;
      this.showFeedback = characters.length === 0;
    });
  }

  onSearch(filters: { [key: string]: string }): void {
    if (Object.keys(filters).length > 0) {
      this.rickMortyService.searchCharacters(filters).subscribe((characters: Character[]) => {
        this.characters = characters;
        this.showFeedback = characters.length === 0;
      });
    } else {
      this.loadAllCharacters();
    }
  }
}
