import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Injectable, inject } from '@angular/core';
import { AlertComponent } from '../component/alert.component';
import { AlertConfig } from '../common';

@Injectable({
  providedIn: 'root',
  deps: [Dialog],
})
export class AlertService {
  public dialog = inject(Dialog);

  private dialogRef: DialogRef<unknown, AlertComponent> | undefined = undefined;

  success(config?: Omit<Partial<AlertConfig>, 'img'>): void {
    this.dialogRef = this.dialog.open(AlertComponent, {
      minWidth: '300px',
      maxWidth: '80vw',
      closeOnNavigation: true,
      disableClose: true,
      data: {
        img: 'success.svg',
        title: config?.title,
        message: config?.message,
        button: config?.button,
      } as AlertConfig,
    });
  }

  error(config: Partial<AlertConfig>): void {
    this.dialogRef = this.dialog.open(AlertComponent, {
      minWidth: '300px',
      maxWidth: '80vw',
      closeOnNavigation: true,
      disableClose: true,
      data: {
        img: 'error.svg',
        title: config?.title,
        message: config?.message,
        button: config?.button,
      } as AlertConfig,
    });
  }

  pendingImplementation(): void {
    this.error({
      title: '¡Alerta!',
      message:
        'Aún estamos implementando esta funcionalidad. Pronto podrás hacer uso de ella',
      button: 'Volver',
    });
  }

  close(): void {
    this.dialogRef?.close();
  }
}
