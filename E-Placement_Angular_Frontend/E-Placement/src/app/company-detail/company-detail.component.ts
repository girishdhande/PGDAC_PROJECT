import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/comany';
import { HttpCompanyService } from '../service/http-company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

company=new Company();
  mob:string;
  msg:string;
  add:string;
  constructor(private router:Router,private ss:HttpCompanyService) { }

  ngOnInit(): void {
  }

  next(){
    console.log("in next");
    this.company=JSON.parse(sessionStorage.getItem('company'));
    this.company.mobileNo=this.mob;
    this.company.address=this.add;
    this.ss.register(this.company).subscribe(ResponseData=> {
      console.log("response recived");
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    },error => {
      console.log("error occure");
      this.msg="Invalid input";
  })
    

  }

}
