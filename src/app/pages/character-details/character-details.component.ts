import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { Character, Episode } from '../../core/models/character.model';

import { VortexLoadingComponent } from '../../shared/vortex-loading/vortex-loading.component';
import { GenericFeedbackComponent } from '../../shared/generic-feedback/generic-feedback.component';
import { CharacterInfoComponent } from '../../components/character-info/character-info.component';
import { Observable } from 'rxjs';

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
  episodes: Episode[] = [];
  isLoading$: Observable<boolean> | undefined;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private rickMortyService: RickMortyService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.rickMortyService.isLoading$;

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
        if (character.episode.length > 0) {
          this.loadEpisodesDetails(character.episode);
        }
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }

  loadEpisodesDetails(episodeUrls: string[]): void {
    this.rickMortyService.getEpisodesDetails(episodeUrls).subscribe(
      episodes => {
        this.episodes = episodes;
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }
}
