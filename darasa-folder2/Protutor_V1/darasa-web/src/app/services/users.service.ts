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

  getUsers(): Observable<User[]> {
    const url = `${environment.baseUrl}accounts/users`;
    return this.http.get<User[]>(url);
  }

  getUser(userId): Observable<User> {
    const url = environment.baseUrl + `accounts/users/${userId}/`;
    return this.http.get<User>(url);
  }

  createUser(user): Observable<User> {
    const url = `${environment.baseUrl}accounts/users/create/`;
    const formData = new FormData();
    for (const key in user) {
      if (user.hasOwnProperty(key) && user[key]) {
        formData.append(key, user[key]);
      }
    }
    return this.http.post<User>(url, formData);
  }

  updateUser(userId, user): Observable<User> {
    const url = `${environment.baseUrl}accounts/users/${userId}/`;
    const formData = new FormData();
    for (const key in user) {
      if (user.hasOwnProperty(key) && user[key]) {
        formData.append(key, user[key]);
      }
    }
    return this.http.patch<User>(url, formData);
  }

  getTeachers(): Observable<any> {
    const url = `${environment.baseUrl}accounts/users?role=teacher`;
    return this.http.get<any>(url);
  }

  getStudents(): Observable<any> {
    const url = `${environment.baseUrl}accounts/users?role=student`;
    return this.http.get<any>(url);
  }

}
