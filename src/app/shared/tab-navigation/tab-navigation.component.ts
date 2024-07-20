import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent {
  favoriteCount$: Observable<number>;

  constructor(private router: Router, private rickMortyService: RickMortyService) {
    this.favoriteCount$ = this.rickMortyService.getFavoriteCount()
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
