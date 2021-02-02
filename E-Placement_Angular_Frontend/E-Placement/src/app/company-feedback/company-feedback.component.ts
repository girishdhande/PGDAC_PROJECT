import { Component, OnInit } from '@angular/core';
import { Company, Drive, JobDetail } from '../models/comany';
import { Observable } from 'rxjs';
import { HttpDriveService } from '../service/htpp-drive.service';
import { HttpCompanyService } from '../service/http-company.service';
import { Router } from '@angular/router';
import { HttpJobDetailService } from '../service/http-job-detail.service';
@Component({
  selector: 'app-company-feedback',
  templateUrl: './company-feedback.component.html',
  styleUrls: ['./company-feedback.component.css']
})
export class CompanyFeedbackComponent implements OnInit {
drives:Observable<Drive[]>;
Id:number;
dr=new Drive();
jobId:number;
company:Company;
jobs:Observable<JobDetail[]>;
  constructor(private d:HttpDriveService,private c:HttpCompanyService,private router:Router,private j:HttpJobDetailService) { 

    this.company=this.c.userValue;
  }

  ngOnInit(): void {
    this.jobs=this.j.getalljob(this.company.companyId);
  }

  Logout(){
    this.router.navigate(['companydashboard']);
  }
  getStudentList(id:string){
    sessionStorage.setItem('driveId',id);
    this.router.navigate(['getStudentList']);
  }

}
