import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numeric-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numeric-keyboard.component.html',
  styleUrl: './numeric-keyboard.component.scss',
})
export class NumericKeyboardComponent {
  public onKeyPressed = output<void>();
}
