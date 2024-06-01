import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericKeyboardComponent } from '@coink-app/ui/components';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [CommonModule, NumericKeyboardComponent],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneComponent {}
