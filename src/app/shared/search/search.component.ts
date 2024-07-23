import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

enum Status {
  Alive = 'alive',
  Dead = 'dead',
  Unknown = 'unknown'
}

enum Gender {
  Female = 'female',
  Male = 'male',
  Genderless = 'genderless',
  Unknown = 'unknown'
}

enum Species {
  Alien = 'Alien',
  Animal = 'Animal',
  Cronenberg = 'Cronenberg',
  Disease = 'Disease',
  MythologicalCreature = 'Mythological Creature',
  Human = 'Human',
  Humanoid = 'Humanoid',
  Poopybutthole = 'Poopybutthole',
  Robot = 'Robot',
  Unknown = 'unknown'
}

interface SearchFilters {
  [key: string]: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  filters: SearchFilters = {};

  statuses = Object.values(Status);
  speciesList = Object.values(Species);
  genders = Object.values(Gender);

  @Output() searchEvent = new EventEmitter<SearchFilters>();

  onSearch(event: Event, filterType: string): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const query = target.value;

    if (query) {
      this.filters[filterType] = query;
    } else {
      delete this.filters[filterType];
    }

    this.searchEvent.emit(this.filters);
  }
}
