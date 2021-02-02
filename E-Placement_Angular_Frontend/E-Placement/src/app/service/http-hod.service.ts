import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Hod } from '../models/hod';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpHodService {
  private userSubject: BehaviorSubject<Hod>;
  public hod: Observable<Hod>;
  private server: string = 'http://localhost:8080/';

  constructor(private http: HttpClient,private router:Router) {
    this.userSubject = new BehaviorSubject<Hod>(JSON.parse(sessionStorage.getItem('hpo')));
  this.hod = this.userSubject.asObservable(); 
}

public get userValue(): Hod {
  return this.userSubject.value;
}
  public hodlogin(hod:Hod)
{
  return this.http.post<Hod>(this.server+"hod/login",hod).pipe(map(hod => {
    sessionStorage.setItem('hod', JSON.stringify(hod));
    this.userSubject.next(hod);
    return hod;
}));;
}

public register(hod:Hod)
{
  return this.http.post<Hod>(this.server+"hod/register",hod).pipe(map(hod => {
    sessionStorage.setItem('hod', JSON.stringify(hod));
    this.userSubject.next(hod);
    return hod;

}));
}
public hodlogout() {
  sessionStorage.removeItem('hod');
  this.userSubject.next(null);
  this.router.navigate(['login'])
}



}
