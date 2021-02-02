import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpStudentService {
  private userSubject: BehaviorSubject<Student>;
  public student: Observable<Student>;
  private server: string = 'http://localhost:8080/';

  constructor(private http: HttpClient,private router:Router) {
    this.userSubject = new BehaviorSubject<Student>(JSON.parse(sessionStorage.getItem('student')));
  this.student = this.userSubject.asObservable(); 
}

public get userValue(): Student {
  return this.userSubject.value;
}
  public studentlogin(student:Student)
{
  return this.http.post<Student>(this.server+"student/login",student).pipe(map(student => {
    sessionStorage.setItem('student', JSON.stringify(student));
    this.userSubject.next(student);
    return student;
}));
}
 public studentlogout() {
  sessionStorage.removeItem('student');
  this.userSubject.next(null);
  this.router.navigate(['login'])
}

public studentregister(student:Student)
{
  return this.http.post<Student>(this.server+"student/register",student).pipe(map(student => {
    sessionStorage.setItem('student', JSON.stringify(student));
    this.userSubject.next(student);
    return student;
}));
}

public getList(id:number):Observable<any>
{
  return this.http.get(this.server+"student/getstudentlist/"+id);
}
}
