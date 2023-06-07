import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iuser } from '../model/iuser';

@Injectable({ providedIn: 'root' })
export class UserService {
  isAuth:BehaviorSubject<boolean>
  constructor(private http: HttpClient) {
    this.isAuth = new BehaviorSubject(this.getLocalStorageCheck)
  }


  signUp(user: Iuser) {
    return this.http.post<Iuser>(
      `${environment.baseUrl}/users`,
      JSON.stringify(user),
      {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );
  }

 get getLocalStorageCheck() : boolean{
    const auth = localStorage.getItem('isAuth')
    return auth ? true : false
  }


  login(){
    localStorage.setItem('isAuth','loggedIn')
    this.isAuth.next(true)
  }

  loggedOut(){
    localStorage.removeItem('isAuth')
    this.isAuth.next(false)

  }

  isAuthStatus():Observable<boolean>{
    return this.isAuth.asObservable()
  }
}
