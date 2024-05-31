import { CommonModule, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from '@coink-app/ui/components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, RouterModule],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {
  router = inject(Router);
  alertService = inject(AlertService);

  goToSignIn(): void {
    this.alertService.pendingImplementation();
  }

  goToSignUp(): void {
    this.router.navigate(['sign-up']);
  }
}
