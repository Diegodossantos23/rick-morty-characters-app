import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'app-characters-list-item',
  templateUrl: './characters-list-item.component.html',
  styleUrls: ['./characters-list-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CharactersListItemComponent {
  @Input() character!: Character;
  @Output() toggleFavorite = new EventEmitter<Character>();

  onToggleFavorite(): void {
    
    this.toggleFavorite.emit(this.character);
    console.log("toggleFavorite", this.toggleFavorite);
  }
}
