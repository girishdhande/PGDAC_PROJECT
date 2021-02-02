import { Component, OnInit } from '@angular/core';
import { Student } from '../models/user';
import { Router } from '@angular/router';

import { HttpStudentService } from '../service/http-student.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  DOB:string;
  hob:string;
  mob:string;
  kL:string;
  msg:string;
  add:string;
  student:Student;

  constructor(private  router:  Router,private ss:HttpStudentService) { }
 
  
  ngOnInit(): void {
  }


  next(){
    console.log("in next");
    this.student=JSON.parse(sessionStorage.getItem('student'));
    this.student.dateOfBirth=this.DOB;
    this.student.address=this.add;
    this.student.mobileNo=this.mob;
    this.student.knownLanguages=this.kL;
    this.student.hobbies=this.hob;
    this.ss.studentregister(this.student).subscribe(ResponseData=> {
      console.log("response recived");
      this.router.navigate(["/schoolDetails"]);
    },error => {
      console.log("error occure");
      this.msg="Invalid input";
  })
    

  }
  Logout(){
  
  }
}
