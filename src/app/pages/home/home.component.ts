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
  showFeedback: boolean = false;
  isLoading: boolean = true;
  errorMessage: string | null = null;
  currentPage: number = 1;
  totalPages: number = 1;
  feedbackConfig = {
    title: "Nothing was found",
    message: "Try performing a new search.",
    showButton: false
  };
  

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadAllCharacters();

    this.rickMortyService.characters$.subscribe((characters: Character[]) => {
      this.characters = characters;
      this.showFeedback = characters.length === 0;
    });

    this.rickMortyService.totalPages$.subscribe(totalPages => {
      this.totalPages = totalPages;
    });

    this.rickMortyService.error$.subscribe(error => {
      this.errorMessage = error;
      this.showFeedback = !!error;
    });
  }

  loadAllCharacters(): void {
    this.rickMortyService.getAllCharacters(this.currentPage).subscribe((characters: Character[]) => {
      this.characters = characters;
      this.showFeedback = characters.length === 0;
    });
  }

  onSearch(filters: { [key: string]: string }): void {
    if (Object.keys(filters).length > 0) {
      this.rickMortyService.searchCharacters(filters, this.currentPage).subscribe((characters: Character[]) => {
        this.characters = characters;
        this.showFeedback = characters.length === 0;
      });
    } else {
      this.loadAllCharacters();
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadAllCharacters();
  }
}
