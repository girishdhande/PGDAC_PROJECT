import { Component, OnInit } from '@angular/core';
import { Degree, GraduationDetail, Stream, Student } from '../models/user';
import { Router } from '@angular/router';
import { HttpGraduationDetailService } from '../service/http-graduation-detail.service';
interface D{
  value:string;
  viewValue:string;
}


@Component({
  selector: 'app-graduation-detail',
  templateUrl: './graduation-detail.component.html',
  styleUrls: ['./graduation-detail.component.css']
})
export class GraduationDetailComponent implements OnInit {
 selected:Degree;
 collegeName:string;
 stream:Stream;
 per:number;
 pass:number;
 msg:string;
 uname:string;
 student=new Student();
 g=new GraduationDetail();
  constructor(private  router:  Router,private s:HttpGraduationDetailService) { }

  ngOnInit(): void {
  }
  degrees: D[]=[{value:'BE',viewValue:'BE'},{value:'BTECH',viewValue:'BTECH'},
  {value:'MTECH',viewValue:'MTECH'},{value:'ME',viewValue:'ME'}];
  streams: D[]=[{value:'MECHANICAL',viewValue:'MECHANICAL'},{value:'COMPUTER',viewValue:'COMPUTER'},
  {value:'ELECTRICAL',viewValue:'ELECTRICAL'},{value:'IT',viewValue:'IT'}];

  add(){
   
    this.student=JSON.parse(sessionStorage.getItem('student'));
    
    console.count("this.student"+this.student.name);
    this.g.university=this.uname;
    this.g.collegeName=this.collegeName;
    this.g.degree=this.selected;
    this.g.passingYear=this.pass;
    this.g.percentage=this.per;
    this.g.stream=this.stream;
    this.g.student=this.student;
    this.s.graduation(this.g).subscribe(ResponseData=> {
      console.log("response recived");
      this.router.navigate(["/graduationDetail"]);
    },error => {
      console.log("error occure");
      this.msg="Invalid Passsword or EmailId";
  })

  }

  next(){
    this.router.navigate(["/projectDetail"]);
  }

}
