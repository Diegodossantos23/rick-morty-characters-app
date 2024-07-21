import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface GenericFeedbackConfig {
  title: string;
  message: string;
  showButton?: boolean;
  buttonRoute?: string;
  buttonText?: string;
}
@Component({
  selector: 'app-generic-feedback',
  templateUrl: './generic-feedback.component.html',
  styleUrls: ['./generic-feedback.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class GenericFeedbackComponent {
  @Input() config!: GenericFeedbackConfig;
}
