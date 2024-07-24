import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character, Episode } from '../../core/models/character.model';
import { VortexLoadingComponent } from '../../shared/vortex-loading/vortex-loading.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
  standalone: true,
  imports: [CommonModule, VortexLoadingComponent, RouterModule]
})
export class CharacterInfoComponent implements OnInit {
  @Input() character!: Character;
  @Input() episodes: Episode[] = [];
  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); 
  }
}
