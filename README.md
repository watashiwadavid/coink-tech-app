# CoinkApp

# App Prueba Técnica para Coink por David López

## Requisitos de Sistema

- **Node.js**: 20.13.1
- **npm**: 10.2.5
- **Angular**: 18.0.0
- **Nx**: 19.1.0
- **CapacitorJS**: 6.0.0
- **Android Studio**: Jellyfish | 2023.3.1 Patch 1
  - Runtime version: 17.0.10+0--11572160 amd64
 
## Cómo Ejecutar

### Descargar el Repositorio

Clona el repositorio en tu máquina local.

### Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### Ejecutar Web

Ejecuta el siguiente comando para ejecutar la aplicación en un browser:

```bash
npx nx serve
```

abrir navegador en [http://localhost:4200/](http://localhost:4200/)

### Ejecutar Android

Ejecuta el siguiente comando para ejecutar la aplicación en Android studio:

```bash
npx nx build  // compilar app angular
npx nx sync   // copiar compilado a app android
npx nx open-android  // abrir android studio
```

## Descripción del Proyecto

Esta aplicación está construida utilizando **Angular** y **CapacitorJS**.

- **Angular**: Es un framework de desarrollo de aplicaciones web que permite crear aplicaciones robustas y escalables. Angular ofrece herramientas poderosas para la construcción de interfaces de usuario dinámicas y de alto rendimiento.

- **CapacitorJS**: Es una plataforma para construir aplicaciones móviles nativas utilizando tecnologías web. Con Capacitor, la aplicación puede aprovechar las capacidades nativas de los dispositivos móviles, facilitando el acceso a APIs nativas.

Para asegurar la consistencia en el diseño y la presentación de la aplicación, se ha utilizado **Tailwind CSS**.

- **Tailwind CSS**: Es un framework de CSS utilitario que permite aplicar estilos directamente en los componentes HTML. Esto facilita el desarrollo de una interfaz de usuario coherente y altamente personalizable, asegurando que todos los elementos de la aplicación sigan un diseño uniforme.

El proyecto está estructurado y desarrollado utilizando **Nx**.

- **Nx**: Es una herramienta para la construcción y gestión de monorepositorios. Nx permite organizar el código de manera eficiente, facilitando la escalabilidad y el mantenimiento del proyecto. Con Nx, se pueden crear y gestionar múltiples aplicaciones y bibliotecas dentro de un mismo repositorio, promoviendo la reutilización de código y la colaboración entre equipos.

### Estructura del Proyecto

#### ui: Capa de Presentación

Contiene las siguientes carpetas:

- **components**: Componentes transversales.
- **views**: Páginas del aplicativo.
- **src**: Archivos base y de configuración.

#### data: Capa de Datos

Contiene las siguientes carpetas:

- **config**: Configuración de la capa.
- **document-type**: Servicio y modelos de API para tipos de documento.
- **gender**: Servicio y modelos de API para géneros.


