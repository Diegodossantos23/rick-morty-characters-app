import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character, Episode } from '../../core/models/character.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CharacterInfoComponent {
  @Input() character!: Character;
  @Input() episodes: Episode[] = [];
}
