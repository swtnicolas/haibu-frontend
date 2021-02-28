import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/interfaces/haibu.interface';
import { HaibuService } from 'src/app/core/services/haibu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public spinner = true;
  public displayedColumns: string[] = ['id', 'nombre', 'apellido', 'activo'];
  public team: MatTableDataSource<User> = new MatTableDataSource;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private haibuSvc: HaibuService
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    this.haibuSvc.getTeam()
      .subscribe(team => {
        this.team = new MatTableDataSource<User>(team)
        this.team.sort = this.sort;
        this.spinner = false;
      })
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.team.filter = filterValue.trim().toLowerCase();
    this.team.filterPredicate = function (data, filter: string): boolean {
      return data.nombre.toLowerCase().includes(filter);
    };
  }

}
