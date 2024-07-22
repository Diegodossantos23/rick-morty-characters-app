import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters-list-item',
  templateUrl: './characters-list-item.component.html',
  styleUrls: ['./characters-list-item.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule] 
})
export class CharactersListItemComponent {
  @Input() character!: Character;
  @Output() toggleFavorite = new EventEmitter<Character>();

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.character);
  }
}
