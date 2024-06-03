import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  AlertService,
  HeaderComponent,
  ProgressStepperComponent,
} from '@coink-app/ui/components';
import { PhoneComponent } from './steps/phone/phone.component';
import { StepLayoutComponent } from './step-layout';
import { steps } from './sign-up.const';
import { TosComponent } from './steps/tos/tos.component';
import { FormComponent } from './steps/form/form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  template: `<div
    [ngTemplateOutlet]="selected ? selected.content : null"
  ></div>`,
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
  standalone: true,
  imports: [NgTemplateOutlet, CdkStepperModule],
})
export class StepperComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    CommonModule,
    ProgressStepperComponent,
    HeaderComponent,
    TosComponent,
    FormComponent,
    PhoneComponent,
    NgTemplateOutlet,
    StepLayoutComponent,
    CdkStepperModule,
    StepperComponent,
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {
  private alertService = inject(AlertService);
  private router = inject(Router);

  protected currentStep = signal<number>(0);
  protected steps = steps;

  public nextStep(): void {
    const nextStep = this.currentStep() + 1;

    if (nextStep === this.steps.length) {
      this.alertService.success({
        title: '¡Bienvenido a Coink!',
        message:
          '¡Cuenta creada exitosamente, tu marrano ya está listo para que empieces a ahorrar!',
        button: 'CONTINUAR',
      });

      this.router.navigate(['/']);
      return;
    }

    this.currentStep.set(nextStep);
  }

  public previousStep(): void {
    const prevStep = this.currentStep() - 1;

    if (prevStep === -1) {
      this.router.navigate(['/']);
      return;
    }

    this.currentStep.set(prevStep);
  }
}
