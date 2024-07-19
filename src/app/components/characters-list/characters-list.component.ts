import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { CharactersListItemComponent } from '../characters-list-item/characters-list-item.component';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  standalone: true,
  imports: [CommonModule, CharactersListItemComponent]
})
export class CharactersListComponent {
  @Input() characters: Character[] = [];
}
