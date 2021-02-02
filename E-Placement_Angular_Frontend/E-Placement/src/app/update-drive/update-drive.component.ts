import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drive, JobDetail } from '../models/comany';
import { HttpDriveService } from 'src/app/service/htpp-drive.service';
import { Router } from '@angular/router';
import { HttpJobDetailService } from '../service/http-job-detail.service';

@Component({
  selector: 'app-update-drive',
  templateUrl: './update-drive.component.html',
  styleUrls: ['./update-drive.component.css']
})
export class UpdateDriveComponent implements OnInit {
  drive=new Drive();
  id:number;
  jobs:Observable<JobDetail[]>;

 
  constructor(private d:HttpDriveService,private router:Router,private j:HttpJobDetailService) { }

  ngOnInit(): void {
    this.fetchDriveDetail()
  }
fetchDriveDetail(){
    this.id=parseInt(sessionStorage.getItem('driveId'));
        this.d.getDriveDetail(this.id).subscribe(val=>this.drive=val);
        this.jobs=this.j.getalljob(this.id);
 }
Logout(){
        this.router.navigate(['companyDrive']);
        sessionStorage.removeItem("driveId");
      }
updateDrive(){
this.d.updateDriveDetail(this.drive).subscribe(ResponseData=> {
this.router.navigate(['updateDriveDetail'])
})
}
updateJob(job:JobDetail){
  this.j.updateJobDetail(job);
}
deleteJob(id:number){
  this.j.deleteJobDetail(id);
}
addJob(){
  
  this.router.navigate(['addJobDetail'])
  
}
}
