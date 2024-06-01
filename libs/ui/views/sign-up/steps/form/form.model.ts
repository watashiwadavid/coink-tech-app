import { compare, email, required } from '@rxweb/reactive-form-validators';

export class FormModel {
  @required({ message: 'Campo requerido' })
  documentTypeId?: number;

  @required({ message: 'Campo requerido' })
  document: string = '';

  @required({ message: 'Campo requerido' })
  documentDate?: Date;

  @required({ message: 'Campo requerido' })
  birthDate?: Date;

  @required({ message: 'Campo requerido' })
  genderId?: number;

  @required({ message: 'Campo requerido' })
  @email({ message: 'Ingresa un email válido' })
  email: string = '';

  @required({ message: 'Campo requerido' })
  @compare({
    fieldName: 'email',
    message: 'Este campo no coincide con el Correo electrónico',
  })
  emailConfirm: string = '';

  @required({ message: 'Campo requerido' })
  pin: string = '';

  @required({ message: 'Campo requerido' })
  @compare({ fieldName: 'pin', message: 'Este campo no coincide con el PIN' })
  pinConfirm: string = '';
}
