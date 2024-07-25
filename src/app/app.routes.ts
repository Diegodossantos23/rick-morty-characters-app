import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent)
  },
  {
    path: 'character/:id',
    loadComponent: () => import('./pages/character-details/character-details.component').then(m => m.CharacterDetailsComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const appConfig = [
  provideRouter(routes),
  provideHttpClient()
];
