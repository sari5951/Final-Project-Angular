import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  getUser(username:string,password:string):Observable<User>{
    return this.http.get<User>('https://localhost:44337/api/costume/GetById/')
  }
}
