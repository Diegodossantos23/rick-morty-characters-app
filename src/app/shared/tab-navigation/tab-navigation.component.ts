import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RickMortyService } from '../../core/services/rick-morty.service';

@Component({
  selector: 'app-tab-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent {
  favoriteCount: number = 0;

  constructor(private router: Router, private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
   this.loadAllFavoriteCharacters()
  }

  loadAllFavoriteCharacters() {
    this.rickMortyService.favoriteCharacters$.subscribe(favorites => {
      this.favoriteCount = favorites.length;
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.router.url === `/${route}`;
  }
}
