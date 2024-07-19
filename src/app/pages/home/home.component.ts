import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../core/models/character.model';
import { RickMortyService } from '../../core/services/rick-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule]
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
