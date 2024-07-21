import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-generic-feedback',
  templateUrl: './generic-feedback.component.html',
  styleUrls: ['./generic-feedback.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class GenericFeedbackComponent {
  @Input() title!: string;
  @Input() message!: string;
  @Input() showButton = false;
  @Input() buttonRoute = '';
  @Input() buttonText = 'Voltar';
}
