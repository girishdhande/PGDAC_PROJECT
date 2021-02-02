import { Component, OnInit } from '@angular/core';
import { SchoolDetail, Student } from '../models/user';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {

  sname:string;
  bo:string;
  per:number;
  pass:number;
  school= new SchoolDetail();
  student=new Student();
  msg:string;
  constructor(private  router:  Router,private s:HttpService) { }

  ngOnInit(): void {


  }
next(){
  console.count(this.bo);
  this.student=JSON.parse(sessionStorage.getItem('student'));
  this.school.board=this.bo;
  this.school.passingYear=this.pass;
  this.school.percentage=this.per;
  this.school.schoolName=this.sname;
  this.school.student=this.student;
  this.s.sscschool(this.school).subscribe(ResponseData=> {
    console.log("response recived");
    this.router.navigate(["/hscschoolDetails"]);
  },error => {
    console.log("error occure");
    this.msg="Invalid Passsword or EmailId";
})
    
}

}
