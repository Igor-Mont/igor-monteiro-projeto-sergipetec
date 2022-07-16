import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() create_user_event: EventEmitter<any> = new EventEmitter()
  private apiUrl = 'http://localhost:3000/contribuintes' 
  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    this.create_user_event.emit()
    return this.http.post<User>(this.apiUrl, user)
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  delete(id: number) {
    return this.http.delete<User>(`${this.apiUrl}/${id}`)
  }
}
