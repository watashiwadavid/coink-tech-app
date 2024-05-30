import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StepperComponent,
  HeaderComponent,
  NumericKeyboardComponent,
} from '@coink-app/ui/components';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    CommonModule,
    StepperComponent,
    HeaderComponent,
    NumericKeyboardComponent,
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {
  currentStep = 1;
}
