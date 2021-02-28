import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p>Prueba técnica de Front-End por Nicolás Rodríguez Salazar</p>  
  `,
  styles: [`
    p {
    text-align: center;
    color: #bebebe;
    background-color: #232223;
    margin: 0;
    padding: 20px 0;
    }
  `]
})
export class FooterComponent {

}
