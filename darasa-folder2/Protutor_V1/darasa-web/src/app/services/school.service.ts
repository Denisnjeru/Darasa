import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  getSchools(): Observable<any> {
    const url = `${environment.baseUrl}schools/`;
    return this.http.get<any>(url);
  }

  getLevels(): Observable<any> {
    const url = `${environment.baseUrl}levels/`;
    return this.http.get<any>(url);
  }

}
