import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '@coink-app/ui/components';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-tos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  templateUrl: './tos.component.html',
  styleUrl: './tos.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TosComponent {
  private alertService = inject(AlertService);

  public next = output<void>();

  protected tosAccepted = signal<boolean>(false);
  protected showError = signal<boolean>(false);

  tosModal(): void {
    this.alertService.pendingImplementation();
  }

  onSubmit(): void {
    if (!this.tosAccepted()) {
      this.showError.set(true);
      return;
    }

    this.next.emit();
  }
}
