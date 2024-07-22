import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { Character } from '../../core/models/character.model';

import { VortexLoadingComponent } from '../../shared/vortex-loading/vortex-loading.component';
import { GenericFeedbackComponent } from '../../shared/generic-feedback/generic-feedback.component';
import { CharacterInfoComponent } from '../../components/character-info/character-info.component';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,

    VortexLoadingComponent,
    GenericFeedbackComponent,
    CharacterInfoComponent,
    RouterLink
  ]
})
export class CharacterDetailsComponent implements OnInit {
  character: Character | null = null;
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private rickMortyService: RickMortyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadCharacterDetails(id);
      }
    });
  }

  loadCharacterDetails(id: string): void {
    this.rickMortyService.getCharacterDetails(id).subscribe(
      character => {
        this.character = character;
        this.isLoading = false;
      },
      error => {
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    );
  }
}
