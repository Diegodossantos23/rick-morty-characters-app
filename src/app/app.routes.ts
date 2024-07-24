import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const appConfig = [
  provideRouter(routes),
  provideHttpClient()
];
