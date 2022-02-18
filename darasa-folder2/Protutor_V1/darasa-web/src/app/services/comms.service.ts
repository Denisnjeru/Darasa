import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../data.models';

@Injectable({
  providedIn: 'root'
})
export class CommsService {

  constructor(private http: HttpClient) { }

  createMessage(message: Message): Observable<Message> {
    const url = `${environment.baseUrl}comms/messages/`;
    return this.http.post<Message>(url, message);
  }

}
