import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company, Drive, JobDetail } from '../models/comany';
import { HttpDriveService } from '../service/htpp-drive.service';
import { HttpCompanyService } from '../service/http-company.service';

@Component({
  selector: 'app-add-drive-detail',
  templateUrl: './add-drive-detail.component.html',
  styleUrls: ['./add-drive-detail.component.css']
})
export class AddDriveDetailComponent implements OnInit {
drive=new Drive();
company=new Company();
id:string;
date:string;
time:string;
venus:string;
  constructor(private h:HttpDriveService,private router:Router,private c:HttpCompanyService) { }

  ngOnInit(): void {
    this.company.companyId=this.c.userValue.companyId;
  }
insert(){
console.count(""+this.company);
this.drive.company=this.company;
this.drive.driveDate=this.date;
this.drive.time=this.time;
this.drive.venue=this.venus;
this.h.registerDrive(this.drive).subscribe(Response=>{
  console.count("Response rev");
  this.router.navigate(["companyDrive"]);
});
}
register(){

}
Logout(){

}
}
