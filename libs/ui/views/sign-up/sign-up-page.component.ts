import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent, StepperComponent } from '@coink-app/ui/components';
import { PhoneComponent } from './steps/phone/phone.component';
import { StepLayoutComponent } from './step-layout';
import { steps } from './sign-up.const';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    CommonModule,
    StepperComponent,
    HeaderComponent,
    PhoneComponent,
    NgTemplateOutlet,
    StepLayoutComponent,
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {
  protected currentStep = 1;
  protected steps = steps;
}
