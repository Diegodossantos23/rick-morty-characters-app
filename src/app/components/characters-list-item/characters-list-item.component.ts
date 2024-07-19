import { Component, Input } from '@angular/core';
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
}
