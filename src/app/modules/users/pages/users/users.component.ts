import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/haibu.interface';
import { HaibuService } from 'src/app/core/services/haibu.service';
import { switchMap } from "rxjs/operators";
declare var moment: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user!: User;
  rutIsValid = false;
  dateIsValid = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private haibuSvc: HaibuService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.activatedRoute.params
      // Se desestructura directamente la propiedad id y se invoca al
      // servicio con su valor para obtener los datos del usuario
      .pipe(
        switchMap(({ id }) => this.haibuSvc.getUser(id))
      )
      .subscribe(user => {
        this.user = user
        this.rutValidator(user.rut)
        this.birthdayValidator(user.fechaNacimiento)
      });
  }

  private birthdayValidator(fechaNacimiento: string) {
    return moment(fechaNacimiento, "DD/MM/YYYY", true)
      .isValid() ? this.dateIsValid = true : this.dateIsValid = false;
  }

  private rutValidator(rut: string): boolean {
    // Verifica la longitud
    if (!rut || rut.trim().length < 3) { return this.rutIsValid = false; }
    const sanitizedRut = rut.replace(/[^0-9kK-]/g, '');
    // Verifica la longitud despues de eliminar los puntos
    if (sanitizedRut.length < 3) { return this.rutIsValid = false; }
    const split = sanitizedRut.split('-');
    // Verifica la longitud de la matriz despues de dividir el rut con el digito verificador
    if (split.length !== 2) { return this.rutIsValid = false; }
    const num = parseInt(split[0], 10);
    const dgv = split[1];
    // Invoca al método para calcular el digitor verificador
    const dvCalc = this.calculateDV(num);
    // Si el digito veriticador calculado es igual al original, el rut es valido
    return dvCalc === dgv ? this.rutIsValid = true : this.rutIsValid = false;
  }
  private calculateDV(rut: number): string {
    const body = `${rut}`;
    let sum = 0;
    let multiple = 2;
    for (let i = 1; i <= body.length; i++) {
      const index = multiple * parseInt(body.charAt(body.length - i), 10);
      sum += index;
      if (multiple < 7) {
        multiple += 1;
      } else {
        multiple = 2;
      }
    }
    const dvExpected = 11 - (sum % 11);
    if (dvExpected === 10) { return 'k'; }
    if (dvExpected === 11) { return '0'; }
    return `${dvExpected}`;
  }

  back() {
    this.router.navigate([''])
  }

}
