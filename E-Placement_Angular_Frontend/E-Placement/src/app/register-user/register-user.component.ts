import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/comany';
import { Hod } from '../models/hod';
import { Tpo } from '../models/tpo';
import { Student, User } from '../models/user';
import { HttpCompanyService } from '../service/http-company.service';
import { HttpHodService } from '../service/http-hod.service';
import { HttpStudentService } from '../service/http-student.service';
import { HttpTpoService } from '../service/http-tpo.service';
import {  AlertService} from '../service/alert.service';
interface Role{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  selected: string;
 user=new User();
 student=new Student();
 tpo=new Tpo();
 hod=new Hod();
 company=new Company();
 
  loading = false;
  msg:string;
  rpassword:string;

  constructor( private  router:  Router,
    private c:HttpCompanyService ,
    private ss:HttpStudentService,
    private t:HttpTpoService,
    private h:HttpHodService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }
    roles: Role[]=[{value:'student',viewValue:'Student'},{value:'tpo',viewValue:'TPO'},
    {value:'company',viewValue:'Company'},{value:'hod',viewValue:'HOD'}];
    authentication(){
      if(this.selected=='student'){
      this.alertService.clear();
      this.loading = true;
      console.count("in login"+this.user.emailId);
      this.student.emailId=this.user.emailId;
      this.student.password=this.user.password;

      this.ss.studentlogin(this.student).subscribe(ResponseData=> {
        console.log("response recived");
        this.router.navigate(["/studentdashboard"]);
      },error => {
        console.log("error occure");
        this.alertService.error(error);
        this.loading = false;
        this.msg="Invalid Passsword or EmailId";
    })
    }if(this.selected=='tpo'){
      console.count("in login"+this.user.emailId);
      this.tpo.emailId=this.user.emailId;
      this.tpo.password=this.user.password;

      this.t.tpologin(this.tpo).subscribe(ResponseData=> {
        console.log("response recived");
        this.router.navigate(["/tpodashboard"]);
      })

    }
    if(this.selected=='company'){
      console.count("in login"+this.user.emailId);
      this.company.emailId=this.user.emailId;
      this.company.password=this.user.password;

      this.c.companylogin(this.company).subscribe(ResponseData=> {
        console.log("response recived");
        this.router.navigate(["/companydashboard"]);
      })

    }if(this.selected=='hod'){
      console.count("in login"+this.user.emailId);
      this.hod.emailId=this.user.emailId;
      this.hod.password=this.user.password;

      this.h.hodlogin(this.hod).subscribe(ResponseData=> {
        console.log("response recived");
        this.router.navigate(["/hoddashboard"]);
      })
      
    }
      
  }
  register(){
    if(this.selected=='student'){
    this.student.emailId=this.user.emailId;
    this.student.password=this.user.password;
    this.student.name=this.user.name;
    sessionStorage.setItem('student',JSON.stringify(this.student));
    this.router.navigate(["/studentDetails"]);
    }
    if(this.selected=='tpo'){
      this.tpo.emailId=this.user.emailId;
    this.tpo.password=this.user.password;
    this.tpo.name=this.user.name;
    sessionStorage.setItem('tpo',JSON.stringify(this.tpo));
    this.router.navigate(["/tpoDetail"]);
    }
    if(this.selected=='hod'){
      this.hod.emailId=this.user.emailId;
      this.hod.password=this.user.password;
      this.hod.name=this.user.name;
      sessionStorage.setItem('hod',JSON.stringify(this.hod));
      this.router.navigate(["/hodDetail"]);
    }
    if(this.selected=='company'){
      this.company.emailId=this.user.emailId;
      this.company.password=this.user.password;
      this.company.name=this.user.name;
      sessionStorage.setItem('company',JSON.stringify(this.company));
      this.router.navigate(["/companyDetail"]);
    }

  }
}
   
  

