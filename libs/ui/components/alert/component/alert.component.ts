import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertConfig } from '../common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  dialogRef: DialogRef<AlertComponent> = inject(DialogRef);
  public data: AlertConfig = inject(DIALOG_DATA);

  buttonClicked(): void {
    this.dialogRef.close();
  }
}
