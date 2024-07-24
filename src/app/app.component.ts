import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { TabNavigationComponent } from './shared/tab-navigation/tab-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FloatButtonComponent } from './shared/float-button/float-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TabNavigationComponent, FooterComponent, FloatButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rick-&-morty';
}
