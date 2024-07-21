import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  @Output() searchEvent = new EventEmitter<SearchFilters>();

  onSearch(event: Event, filterType: string): void {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;

    if (query) {
      this.filters[filterType] = query;
    } else {
      delete this.filters[filterType];
    }

    this.searchEvent.emit(this.filters);
  }
}
