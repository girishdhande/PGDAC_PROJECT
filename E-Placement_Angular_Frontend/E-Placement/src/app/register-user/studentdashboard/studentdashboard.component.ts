import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/user';
import { HttpStudentService } from 'src/app/service/http-student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

 student=new Student();
msg:string;
  constructor(private s:HttpStudentService,private  router:  Router) { 
    this.student=this.s.userValue;
  }

  ngOnInit(): void {
  }
drive(){
  this.router.navigate(["studentdrive"])
}
Logout(){
  this.s.studentlogout();
  sessionStorage.clear();
}


}
