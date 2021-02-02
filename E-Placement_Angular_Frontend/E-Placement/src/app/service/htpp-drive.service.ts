import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import {Drive } from '../models/comany';
@Injectable({
  providedIn: 'root'
})
export class HttpDriveService {
  private userSubject: BehaviorSubject<Drive>;
  public drive: Observable<Drive>;
  private server: string = 'http://localhost:8080/';

  constructor(private http: HttpClient,private router:Router) {
    this.userSubject = new BehaviorSubject<Drive>(JSON.parse(sessionStorage.getItem('drive')));
  this.drive = this.userSubject.asObservable(); 
}

public get userValue():Drive{
  return this.userSubject.value;
}
  public getalldrive(id:number):Observable<any>
{
  return this.http.get(this.server+"drive/"+id);
}
public getalldriveByStudentId(id:number):Observable<any>
{
  return this.http.get(this.server+"drive/student/"+id);
}


public getDriveDetail(id:number){
 return this.http.get<Drive>(this.server+"drive/get/"+id);
}

public updateDriveDetail(drive:Drive){
  return this.http.put<Drive>(this.server+"drive/update",drive);
}

public deleteDriveDetail(id:number){
  return this.http.delete<boolean>(this.server+"drive/delete/"+id);
}
public registerDrive(drive:Drive)
{
  return this.http.post<Drive>(this.server+"drive/register",drive)
}

}
