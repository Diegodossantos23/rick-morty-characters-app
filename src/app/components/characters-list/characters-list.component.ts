import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { CharactersListItemComponent } from '../characters-list-item/characters-list-item.component';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { VortexLoadingComponent } from '../../shared/vortex-loading/vortex-loading.component';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  standalone: true,
  imports: [CommonModule, CharactersListItemComponent, VortexLoadingComponent]
})
export class CharactersListComponent implements OnInit {
  @Input() characters: Character[] = [];
  @Input() isLoading = true;
  placeholders: any[] = new Array(20);

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.rickMortyService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });    
  }

  toggleFavorite(character: Character): void {
    if (character.isFavorite) this.rickMortyService.removeFavorite(character);
    else this.rickMortyService.addFavorite(character);
  }
}
