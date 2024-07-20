import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavigationComponent } from '../tab-navigation/tab-navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TabNavigationComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logo: string = "assets/logo/rick-&-morty-logo.svg"
 }
