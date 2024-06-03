import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericKeyboardComponent } from '@coink-app/ui/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [CommonModule, NumericKeyboardComponent, FormsModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneComponent {
  protected _phone = signal<string>('');
  public next = output<string>();

  protected phone = computed<string>(() => {
    const maskPhone = this._phone().padEnd(10, 'x');
    return maskPhone.slice(0, 3) + ' - ' + maskPhone.slice(3);
  });

  protected submitDisabled = computed(
    () => !this._phone() || this._phone().length < 10
  );

  onKeyPressed(value: string): void {
    const phone: string =
      value === '#' ? this._phone().slice(0, -1) : this._phone() + value;

    this._phone.set(phone);
  }
}
