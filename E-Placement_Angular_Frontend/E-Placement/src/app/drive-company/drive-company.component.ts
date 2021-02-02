import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drive } from '../models/comany';
import { HttpDriveService } from 'src/app/service/htpp-drive.service';
import { Router } from '@angular/router';
import { HttpJobDetailService } from '../service/http-job-detail.service';
import { Company } from '../models/comany';
import { HttpCompanyService } from 'src/app/service/http-company.service';
@Component({
  selector: 'app-drive-company',
  templateUrl: './drive-company.component.html',
  styleUrls: ['./drive-company.component.css']
})
export class DriveCompanyComponent implements OnInit {
 drives:Observable<Drive[]>;
 id:number;
 dr=new Drive();
 jobId:number;
 company:Company;
  constructor(private d:HttpDriveService,private router:Router,private j:HttpJobDetailService,private c:HttpCompanyService) { 
    this.company=this.c.userValue;
  }

  ngOnInit(): void {
    this.fetchAllDrive();
  }

fetchAllDrive(){
  this.drives=this.d.getalldrive(this.company.companyId);
}
Logout(){
  this.router.navigate(['companydashboard'])

}
viewJob(id:string){
sessionStorage.setItem('driveId',id);
this.router.navigate(["viewDriveDetail"])
}
updateJob(id:string){
  sessionStorage.setItem('driveId',id);
  this.router.navigate(["updateDriveDetail"])
}
deleteDrive(drive:Drive){
  this.id=drive.driveId;
  this.j.deleteJobDetailByDriveId(this.id).subscribe(ResponseData=> {
    console.log("response recived");
    this.d.deleteDriveDetail(this.id).subscribe(ResponseData=>{this.router.navigate(["companyDrive"]);})
  })
}
addDrive(){
  this.router.navigate(["addDriveDetail"])
}
}
