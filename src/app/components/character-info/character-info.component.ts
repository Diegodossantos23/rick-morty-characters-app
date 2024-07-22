import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetails } from '../../core/models/character.model';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CharacterInfoComponent {
  @Input() character!: CharacterDetails;
}
