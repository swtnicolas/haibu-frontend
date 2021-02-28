# HaibuFrontend

Enlace del demo aquí --> [https://haibunicolas.web.app/](https://haibunicolas.web.app/) <--

La prueba técnica fue diseñada en [Angular](https://github.com/angular/angular-cli) versión 11.2.1. Se utilizaron algunos componentes de Angular Material versión 11.2.2 para el diseño de la aplicación junto a SCSS. El diseño está pensado para teléfonos por lo que no fue necesario aplicar Media Queries.

Los datos se pueden filtrar en base al nombre de cada persona, adicionalmente se puede ordenar la tabla haciendo clic en una columna de su encabezado (id, nombre, apellido o activo).

En los detalles de cada persona se verifica si el Rut y la fecha son válidos. Para validar la fecha se utilizó la librería [moment.js](https://momentjs.com/) versión 2.29.1 y esta alojada en la carpeta: `src/assets/js/moment.js`

La estructura de carpetas apunta a una aplicación que pueda escalar en el tiempo, basado en el estilo oficial de [angular](https://angular.io/guide/styleguide#overall-structural-guidelines).

La carpeta `core` contiene servicios y componentes únicos, que se cargan una sola vez en el `app.module.ts`.

La carpeta `material` contiene el módulo con todos los componentes de Angular Material utilizados.

En la carpeta `modules` se designan las páginas y componentes de cada una (en esta aplicación no fue necesario modular los componentes de cada página). Cada página tiene su módulo con carga diferida definida en su archivo de rutas.

Por esta vez, no se utilizó la carpeta `shared`. No hay directivas, pipes o componentes compartidos, de momento.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
