import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/haibu.interface';

@Injectable({
  providedIn: 'root'
})
export class HaibuService {

  private dataUrl: string = environment.dataUrl

  constructor(
    private http: HttpClient
  ) { }

  getTeam(): Observable<User[]> {
    return this.http.get<User[]>(this.dataUrl)
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.dataUrl}/${id}`)
  }
}
