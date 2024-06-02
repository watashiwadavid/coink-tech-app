import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numeric-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numeric-keyboard.component.html',
  styleUrl: './numeric-keyboard.component.scss',
})
export class NumericKeyboardComponent {
  public submitDisabled = input<boolean>(false);

  public onKeyPressed = output<string>();
  public onSubmitPressed = output<void>();

  protected keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '0'];
}
