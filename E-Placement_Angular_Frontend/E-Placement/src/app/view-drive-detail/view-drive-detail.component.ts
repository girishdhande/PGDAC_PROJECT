import { Component, OnInit } from '@angular/core';
import { Company, Drive, JobDetail } from '../models/comany';
import { HttpDriveService } from 'src/app/service/htpp-drive.service';
import { HttpCompanyService } from 'src/app/service/http-company.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpJobDetailService } from '../service/http-job-detail.service';
@Component({
  selector: 'app-view-drive-detail',
  templateUrl: './view-drive-detail.component.html',
  styleUrls: ['./view-drive-detail.component.css']
})
export class ViewDriveDetailComponent implements OnInit {
  drive=new Drive();
  id:number;
  jobs:Observable<JobDetail[]>;
  company:Company;
  constructor(private d:HttpDriveService,private router:Router,private c:HttpCompanyService,private j:HttpJobDetailService) { }

  ngOnInit(): void {
this.fetchDriveDetail()
  }

  fetchDriveDetail(){
    this.id=parseInt(sessionStorage.getItem('driveId'));
    this.d.getDriveDetail(this.id).subscribe(val=>this.drive=val);
    this.jobs=this.j.getalljobForDrive(this.id);
  }
  Logout(){
    this.router.navigate(['companyDrive']);
    sessionStorage.removeItem("driveId");
  }

}
