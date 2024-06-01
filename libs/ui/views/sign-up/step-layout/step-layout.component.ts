import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpStep } from './step.model';

@Component({
  selector: 'app-step-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-layout.component.html',
  styleUrl: './step-layout.component.scss',
})
export class StepLayoutComponent {
  config = input.required<SignUpStep>();
}
