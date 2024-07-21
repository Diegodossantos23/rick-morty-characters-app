import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { SearchComponent } from '../../shared/search/search.component';
import { GenericFeedbackComponent } from '../../shared/generic-feedback/generic-feedback.component';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, CharactersListComponent, SearchComponent, GenericFeedbackComponent, PaginationComponent]
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  showFeedback: Boolean = false;
  isLoading: Boolean = true;
  errorMessage: string | null = null;
  currentPage: number = 1;
  totalPages: number = 1;

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

    this.rickMortyService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });

    this.loadAllCharacters();
  }

  loadAllCharacters(page: number = 1): void {
    this.rickMortyService.getAllCharacters(page).subscribe((characters: Character[]) => {
      this.characters = characters;
      this.showFeedback = characters.length === 0;
      this.totalPages = this.rickMortyService.totalPages;
    });
  }

  onSearch(filters: { [key: string]: string }, page: number = 1): void {
    if (Object.keys(filters).length > 0) {
      this.rickMortyService.searchCharacters(filters, page).subscribe((characters: Character[]) => {
        this.characters = characters;
        this.showFeedback = characters.length === 0;
        this.totalPages = this.rickMortyService.totalPages;
      });
    } else {
      this.loadAllCharacters(page);
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadAllCharacters(page);
  }
}
