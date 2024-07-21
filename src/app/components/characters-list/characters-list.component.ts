import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { CharactersListItemComponent } from '../characters-list-item/characters-list-item.component';
import { RickMortyService } from '../../core/services/rick-morty.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  standalone: true,
  imports: [CommonModule, CharactersListItemComponent]
})
export class CharactersListComponent {
  @Input() characters: Character[] = [];

  constructor(private rickMortyService: RickMortyService) {}

  toggleFavorite(character: Character): void {
    if (character.isFavorite) this.rickMortyService.removeFavorite(character);
    else this.rickMortyService.addFavorite(character);
    console.log("characters", this.characters);
    
  }
}
