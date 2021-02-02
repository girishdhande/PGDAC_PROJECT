import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Company, JobDetail } from '../models/comany';
@Injectable({
  providedIn: 'root'
})
export class HttpJobDetailService {
  private userSubject: BehaviorSubject<JobDetail>;
  public jobDetail: Observable<JobDetail>;
  private server: string = 'http://localhost:8080/';

  constructor(private http: HttpClient,private router:Router) {
    this.userSubject = new BehaviorSubject<JobDetail>(JSON.parse(sessionStorage.getItem('jobDetail')));
  this.jobDetail = this.userSubject.asObservable(); 
}

public get userValue():JobDetail{
  return this.userSubject.value;
}
  public getalljobForDrive(id:number):Observable<any>
{
  return this.http.get(this.server+"job/getallbydrive/"+id);
}
public updateJobDetail(job:JobDetail){
  return this.http.put<JobDetail>(this.server+"job/update",job);
}

public deleteJobDetail(id:number){
  return this.http.delete<boolean>(this.server+"job/delete/"+id);
}
public deleteJobDetailByDriveId(id:number){
  return this.http.delete<boolean>(this.server+"job/delete/"+id);
}
public registerJobDetail(job:JobDetail)
{
  return this.http.post<JobDetail>(this.server+"job/register",job)
}
public getalljob(id:number):Observable<any>
{
  return this.http.get(this.server+"job/getall/"+id);
}
}
