import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentType, DocumentTypeService, Gender } from '@coink-app/data';
import {
  IAbstractControl,
  IFormGroup,
  RxFormBuilder,
  RxReactiveFormsModule,
} from '@rxweb/reactive-form-validators';
import { FormModel } from './form.model';

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
  private formBuilder = inject(RxFormBuilder);
  private documentTypeService = inject(DocumentTypeService);

  protected form = this.formBuilder.formGroup(
    new FormModel()
  ) as IFormGroup<FormModel>;

  protected documentTypes = signal<DocumentType[]>([]);
  protected genders = signal<Gender[]>([]);

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => console.log(value));
    this.updateLists();
  }

  private async updateLists(): Promise<void> {
    this.documentTypes.set(await this.documentTypeService.list());
  }

  protected expeditionDateChange(value?: string | null) {
    this.form.controls.documentDate?.setValue(value);
  }

  protected birthDateChange(value?: string | null) {
    this.form.controls.birthDate?.setValue(value);
  }
}
