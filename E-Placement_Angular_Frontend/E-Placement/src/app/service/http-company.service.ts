import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Company } from '../models/comany';
@Injectable({
  providedIn: 'root'
})
export class HttpCompanyService {
  private userSubject: BehaviorSubject<Company>;
  public company: Observable<Company>;
  private server: string = 'http://localhost:8080/';

  constructor(private http: HttpClient,private router:Router) {
    this.userSubject = new BehaviorSubject<Company>(JSON.parse(sessionStorage.getItem('company')));
  this.company = this.userSubject.asObservable(); 
}

public get userValue(): Company{
  return this.userSubject.value;
}
  public companylogin(company:Company)
{
  return this.http.post<Company>(this.server+"company/login",company).pipe(map(company => {
    sessionStorage.setItem('company', JSON.stringify(company));
    this.userSubject.next(company);
    return company;
}));;
}

public register(company:Company)
{
  return this.http.post<Company>(this.server+"company/register",company);
}



public companylogout() {
  sessionStorage.removeItem('company');
  this.userSubject.next(null);
  this.router.navigate(['login'])
}



}
