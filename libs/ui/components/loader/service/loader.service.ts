import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoaderComponent } from '../component/loader.component';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

  show(): void {
    if (!this.overlayRef?.hasAttached()) {
      const loaderPortal = new ComponentPortal(LoaderComponent);
      this.overlayRef?.attach(loaderPortal);
    }
  }

  hide(): void {
    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
