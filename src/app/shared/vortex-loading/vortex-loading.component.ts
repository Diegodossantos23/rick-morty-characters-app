import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vortex-loading',
  template: `
    <div class="gif-container">
        <img class="vortex-gif" [ngStyle]="{'width.px': width, 'height.px': height}" src="assets/gif/green-vortex.gif" />
    </div>
  `,
  standalone: true,
  imports: [CommonModule], 
  styles: [`
    .gif-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      opacity: 1;
    }

    .vortex-gif {
      border-radius: 100%;
    }
  `]
})
export class VortexLoadingComponent {
  @Input() width: number = 160;
  @Input() height: number = 160;
}
