import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../data.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    const url = `${environment.baseUrl}accounts/users`;
    return this.http.get<any>(url);
  }

  public getTeachers(): Observable<any> {
    const url = `${environment.baseUrl}accounts/users?role=teacher`;
    return this.http.get<any>(url);
  }

  public getStudents(): Observable<any> {
    const url = `${environment.baseUrl}accounts/users?role=student`;
    return this.http.get<any>(url);
  }

  public createUser(user): Observable<any> {
    const formData = new FormData();
    for (const key in user) {
      if (user.hasOwnProperty(key) && user[key]) {
        formData.append(key, user[key]);
      }
    }
    const url = `${environment.baseUrl}accounts/users/create/`;
    return this.http.post<User>(url, formData);
  }

}
