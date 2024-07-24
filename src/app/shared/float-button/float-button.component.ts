import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-float-button',
  standalone: true,
  imports: [],
  templateUrl: './float-button.component.html',
  styleUrl: './float-button.component.scss'
})
export class FloatButtonComponent {
  isScrolled: Boolean = false;

  onWindowScroll(): void {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = verticalOffset > window.innerHeight / 2;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  removeFocus(event: Event): void {
    (event.target as HTMLElement).blur();
  }
}
