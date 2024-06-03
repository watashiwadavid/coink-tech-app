import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DocumentType,
  DocumentTypeService,
  Gender,
  GenderService,
} from '@coink-app/data';
import { AlertService } from '@coink-app/ui/components';
import {
  IAbstractControl,
  IFormGroup,
  RxFormBuilder,
  RxReactiveFormsModule,
} from '@rxweb/reactive-form-validators';
import { FormModel } from './form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (control()?.touched || control()?.dirty) {
    <span class="text-red-500 text-xs font-bold">{{
      control()?.errorMessage
    }}</span>
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class FormErrorComponent {
  public control = input<IAbstractControl>();
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RxReactiveFormsModule,
    ReactiveFormsModule,
    FormErrorComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  private alertService = inject(AlertService);
  private formBuilder = inject(RxFormBuilder);
  private documentTypeService = inject(DocumentTypeService);
  private genderService = inject(GenderService);
  private router = inject(Router);

  public next = output<FormModel>();

  protected form = this.formBuilder.formGroup(
    new FormModel()
  ) as IFormGroup<FormModel>;

  protected documentTypes = signal<DocumentType[]>([]);
  protected genders = signal<Gender[]>([]);

  ngOnInit(): void {
    this.updateLists();
  }

  private async updateLists(): Promise<void> {
    try {
      this.documentTypes.set(await this.documentTypeService.list());
      this.genders.set(await this.genderService.list());
    } catch {
      this.alertService.error({
        title: 'Oppppsss!',
        message:
          'Ha ocurrido un error inesperado, intentalo de nuevo más tarde.',
        button: 'Volver',
      });

      this.router.navigate(['/']);
    }
  }

  protected expeditionDateChange(value?: string | null) {
    this.form.controls.documentDate?.setValue(value);
  }

  protected birthDateChange(value?: string | null) {
    this.form.controls.birthDate?.setValue(value);
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.updateValueAndValidity();
      this.form.markAllAsTouched();
      return;
    }

    this.next.emit(this.form.value);
  }
}
