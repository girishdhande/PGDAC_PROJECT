import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drive } from '../models/comany';
import { HttpDriveService } from 'src/app/service/htpp-drive.service';
import { Router } from '@angular/router';
import { HttpStudentService } from '../service/http-student.service';
import { Student } from '../models/user';
@Component({
  selector: 'app-student-drive',
  templateUrl: './student-drive.component.html',
  styleUrls: ['./student-drive.component.css']
})
export class StudentDriveComponent implements OnInit {
  drives:Observable<Drive[]>;
  id:number;
  dr=new Drive();
  jobId:number;
student:Student;
  constructor(private router:Router,private ds:HttpDriveService,private s:HttpStudentService) { 
    this.student=this.s.userValue;
    this.drives=this.ds.getalldriveByStudentId(this.student.studentId);
  }

  ngOnInit(): void {
  }
  Logout(){
    this.router.navigate(['studentdashboard'])
  
  }
  viewJob(i:string){
sessionStorage.setItem('driveId',i);
this.router.navigate(["viewDriveDetail"])
  }
 
}

