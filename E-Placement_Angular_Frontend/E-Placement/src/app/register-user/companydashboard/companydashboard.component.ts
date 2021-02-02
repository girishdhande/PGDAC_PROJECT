import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company, Drive } from 'src/app/models/comany';
import { HttpCompanyService } from 'src/app/service/http-company.service';
import { HttpJobDetailService } from 'src/app/service/http-job-detail.service';

import { Observable } from 'rxjs';
import { HttpDriveService } from 'src/app/service/htpp-drive.service';


@Component({
  selector: 'app-companydashboard',
  templateUrl: './companydashboard.component.html',
  styleUrls: ['./companydashboard.component.css']
})
export class CompanydashboardComponent implements OnInit {
   company:Company;
   msg:string;
   drives:Observable<Drive[]>
  constructor(private c:HttpCompanyService,private router:Router,private j:HttpJobDetailService,private d:HttpDriveService) {
    this.company=this.c.userValue;
    console.count("this.company.companyId");
  }

  ngOnInit(): void {
  }
  Logout(){
    sessionStorage.clear();
    this.c.companylogout();
  }
  drive(){
    this.drives=this.d.getalldrive(this.company.companyId);
    sessionStorage.setItem('drives', JSON.stringify(this.drives));
    this.router.navigate(["companyDrive"])
  }

  feedback(){
    this.router.navigate(["companyFeedback"])
  }
}
