import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  model,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progres-stepper.component.html',
  styleUrl: './progres-stepper.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressStepperComponent {
  public totalSteps = input(0);
  public currentStep = model(0);

  protected steps = computed(() =>
    new Array<null>(this.totalSteps()).fill(null)
  );

  nextStep(): void {
    this.currentStep.update((prev) => prev + 1);
  }

  previousStep(): void {
    this.currentStep.update((prev) => prev - 1);
  }
}
