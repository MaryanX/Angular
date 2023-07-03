import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iuser } from '../_interfaces/i_users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000/users';

  private currentUserSubject: BehaviorSubject<Iuser>;
  public currentUser: Observable<Iuser>;

  constructor(private http: HttpClient)
  {
    this.currentUserSubject = new BehaviorSubject<Iuser>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Iuser
  {
    return this.currentUserSubject.value;
  }
  login(username, password) {
    var headers: {'Content-Type' : 'application/json'};
        return this.http.post<Iuser>(this.url, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }
  logout()
  {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null!);
  }




}
