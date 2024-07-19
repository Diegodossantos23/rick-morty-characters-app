import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyService } from '../../core/services/rick-morty.service';
import { Character } from '../../core/models/character.model';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, CharactersListComponent]
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit(): void {
    this.rickMortyService.getAllCharacters().subscribe((characters) => {
      this.characters = characters;
      console.log("characters listed", this.characters);
    });
  }
}
