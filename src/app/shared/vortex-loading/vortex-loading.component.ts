import { Component } from '@angular/core';

@Component({
  selector: 'app-vortex-loading',
  template: `
    <div class="gif-container">
        <img class="vortex-gif" src="assets/gif/green-vortex.gif" />
    </div>
  `,
  standalone: true,
  styles: [`
    .gif-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr); 
      gap: 5rem;
      width: 100%; 
      height: auto;
      opacity: 1;
    }

    .vortex-gif {
      width: 160px;
    }
  `]
})
export class VortexLoadingComponent {}
