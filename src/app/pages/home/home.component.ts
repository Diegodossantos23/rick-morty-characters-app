import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { SearchComponent } from '../../shared/search/search.component';
import { GenericFeedbackComponent } from '../../shared/generic-feedback/generic-feedback.component';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { VortexLoadingComponent } from '../../shared/vortex-loading/vortex-loading.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    CharactersListComponent, 
    SearchComponent, 
    GenericFeedbackComponent, 
    PaginationComponent, 
    VortexLoadingComponent
  ]
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  showFeedback: boolean = false;
  errorMessage: string | null = null;
  currentPage: number = 1;
  totalPages: number = 1;
  isLoading$: Observable<boolean>;
  placeholders: any[] = new Array(20);

  feedbackConfig = {
    title: "Nothing was found",
    message: "Try performing a new search.",
    showButton: false,
    image: 'assets/img/not-found.jpeg'
  };

  constructor(private rickMortyService: RickMortyService) {
    this.isLoading$ = this.rickMortyService.isLoading$;
  }

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
    this.rickMortyService.searchCharacters(filters, this.currentPage).subscribe((characters: Character[]) => {
      this.characters = characters;
      this.showFeedback = characters.length === 0;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadAllCharacters();
  }
}
