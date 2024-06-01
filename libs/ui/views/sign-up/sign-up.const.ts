import { SignUpStep } from './step-layout';

export const steps: Array<SignUpStep> = [
  {
    imgSrc: 'isotype.svg',
    title: 'NÚMERO CELULAR',
    text: 'Para comenzar, por favor ingresa <strong>tu número celular.</strong>',
  },
  {
    imgSrc: 'Oink-M.svg',
    title: 'DATOS DE CUENTA',
    subTitle: '¿CUÁLES SON TUS DATOS?',
    text: 'Ahora necesitamos saber algunos datos tuyos',
  },

  {
    imgSrc: 'OinkPolicia.svg',
    title: 'FINALIZAR',
    subTitle: 'ESTAS MUY CERCA DE SER PARTE DE COINK.',
    text: 'Solo es necesario que leas detenidamente el contrato que se encuentra al final de esta pantalla y lo aceptes.',
  },
];
