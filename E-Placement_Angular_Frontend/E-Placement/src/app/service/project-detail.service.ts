
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { GraduationDetail, ProjectDetail } from '../models/user';
  import { BehaviorSubject } from 'rxjs';
  import { Router } from '@angular/router';
  
  @Injectable({
    providedIn: 'root'
  })
  export class HttpProjectDetailService {
    private userSubject: BehaviorSubject<ProjectDetail>;
    public projectdetail: Observable<ProjectDetail>;
    private server: string = 'http://localhost:8080/';
  
    constructor(private http: HttpClient,private router:Router) {
      this.userSubject = new BehaviorSubject<ProjectDetail>(JSON.parse(sessionStorage.getItem('projectdetail')));
    this.projectdetail = this.userSubject.asObservable(); 
  }
  
  public get userValue(): ProjectDetail {
    return this.userSubject.value;
  }
    public register(s:ProjectDetail)
  {
    return this.http.post<ProjectDetail>(this.server+"project/register",s).pipe(map(projectdetail => {
      sessionStorage.setItem('college', JSON.stringify(projectdetail));
      this.userSubject.next(projectdetail);
      return projectdetail;
  }));;
  }
  
  
  
  
  }
  

