import { Injectable } from '@angular/core';
import { Job } from '../models/job';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class jobService {

  constructor(private http: HttpClient) { }

  
  getAllJobs(username:string,password:string):Observable<Job>{
    return this.http.get<Job>('https://localhost:44337/api/job/GetById/')
  }
}
