import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Tpo } from '../models/tpo';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpTpoService {
  private userSubject: BehaviorSubject<Tpo>;
  public tpo: Observable<Tpo>;
  private server: string = 'http://localhost:8080/';

  constructor(private http: HttpClient,private router:Router) {
    this.userSubject = new BehaviorSubject<Tpo>(JSON.parse(sessionStorage.getItem('t')));
  this.tpo = this.userSubject.asObservable(); 
}

public get userValue(): Tpo {
  return this.userSubject.value;
}
  public tpologin(tpo:Tpo) 
{
  return this.http.post<Tpo>(this.server+"tpo/login",tpo).pipe(map(tpo => {
    sessionStorage.setItem('t', JSON.stringify(tpo));
    this.userSubject.next(tpo);
    return tpo;
}));;
}
public tpologout() {
  sessionStorage.clear();
  this.userSubject.next(null);
  this.router.navigate(['login'])
}
public register(tpo:Tpo)
{
  return this.http.post<Tpo>(this.server+"tpo/register",tpo).pipe(map(tpo => {
    sessionStorage.setItem('tpo', JSON.stringify(tpo));
    this.userSubject.next(tpo);
    return tpo;

}));
}


}
