import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drive, JobDetail } from '../models/comany';
import { HttpDriveService } from '../service/htpp-drive.service';
import { HttpJobDetailService } from '../service/http-job-detail.service';

@Component({
  selector: 'app-add-job-detail',
  templateUrl: './add-job-detail.component.html',
  styleUrls: ['./add-job-detail.component.css']
})
export class AddJobDetailComponent implements OnInit {
job=new JobDetail();
drive=new Drive();
id:number;
designation:string;
responsibility:string;
skill:string;
experience:string;
technology:string;
salary:Number;
location:string;
  constructor(private j:HttpJobDetailService,private router:Router,private d:HttpDriveService) { 
    this.id=parseInt(sessionStorage.getItem('driveId'));
    this.d.getDriveDetail(this.id).subscribe(val=>this.drive=val);
  }

  ngOnInit(): void {
  }
  insert(){
  this.job.drive=this.drive;
  this.job.designation=this.designation;
  this.job.experience=this.experience;
  this.job.location=this.location;
  this.job.responsibility=this.responsibility;
  this.job.salary=this.salary;
  this.job.skill=this.skill;
  this.job.technology=this.technology;
  this.j.registerJobDetail(this.job).subscribe(Response=>{
    console.count("Response rev");
    this.router.navigate(["updateDriveDetail"]);
  });
  }
  Logout(){
    
  }
}
