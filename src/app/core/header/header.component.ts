import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <a [routerLink]="['']">
        <img src="assets/images/logo_haibu.png" alt="logo_haibu" />
      </a>
    </header>
  `,
  styles: [`
    header {
      background-color: #232223;
      margin: 0;
      padding: 0;
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      width: 180px;
    }
  `]
})
export class HeaderComponent {

}
