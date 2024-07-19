import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, CharactersListComponent] 
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  filters: { [key: string]: string } = {};

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.rickMortyService.characters$.subscribe((characters: Character[]) => {
      this.characters = characters;
      console.log("characters listed", this.characters);
    });
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.rickMortyService.getAllCharacters();
  }

  onSearch(event: Event, filterType: string): void {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;

    if (query) {
      this.filters[filterType] = query;
    } else {
      delete this.filters[filterType];
    }

    if (Object.keys(this.filters).length > 0) {
      this.rickMortyService.searchCharacters(this.filters);
    } else {
      this.loadAllCharacters();
    }
  }
}
