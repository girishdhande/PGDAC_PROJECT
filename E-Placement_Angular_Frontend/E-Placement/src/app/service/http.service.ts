import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SchoolDetail, Student } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SchoolDetailsComponent } from '../school-details/school-details.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private userSubject: BehaviorSubject<SchoolDetail>;
  public school: Observable<SchoolDetail>;
  private server: string = 'http://localhost:8080/';

  constructor(private http: HttpClient,private router:Router) { 
}

public get userValue(): SchoolDetail {
  return this.userSubject.value;
}
  public sscschool(ssc:SchoolDetail)
{
  return this.http.post<SchoolDetail>(this.server+"school/register",ssc);;
}




}
