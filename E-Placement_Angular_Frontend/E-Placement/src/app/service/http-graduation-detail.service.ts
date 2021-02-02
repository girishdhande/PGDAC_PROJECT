import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraduationDetail, SchoolDetail, Student } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SchoolDetailsComponent } from '../school-details/school-details.component';

@Injectable({
  providedIn: 'root'
})
export class HttpGraduationDetailService {
  private userSubject: BehaviorSubject<GraduationDetail>;
  public graduationdetail: Observable<GraduationDetail>;
  private server: string = 'http://localhost:8080/';

  constructor(private http: HttpClient,private router:Router) {
    this.userSubject = new BehaviorSubject<GraduationDetail>(JSON.parse(sessionStorage.getItem('graduationdetail')));
  this.graduationdetail = this.userSubject.asObservable(); 
}

public get userValue(): GraduationDetail {
  return this.userSubject.value;
}
  public graduation(s:GraduationDetail)
{
  return this.http.post<GraduationDetail>(this.server+"graduation/register",s).pipe(map(graduationdetail => {
    sessionStorage.setItem('graduationdetail', JSON.stringify(graduationdetail));
    this.userSubject.next(graduationdetail);
    return graduationdetail;
}));;
}




}
