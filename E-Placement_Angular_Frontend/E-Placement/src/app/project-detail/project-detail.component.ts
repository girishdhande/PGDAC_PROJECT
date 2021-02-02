import { Component, OnInit } from '@angular/core';
import { ProjectDetail, ProjectType, Student } from '../models/user';
import { Router } from '@angular/router';
import { HttpProjectDetailService } from '../service/project-detail.service';

interface D{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  
project= new ProjectDetail();
msg:string;
student:Student;
title:string;
type:ProjectType;
d:string;
  constructor( private  router:  Router,private s:HttpProjectDetailService) { }
  types: D[]=[{value:'MINOR',viewValue:'MINOR'},{value:'major',viewValue:'MAJOR'}];
  ngOnInit(): void {
  }

  add(){
    this.project.description=this.d;
    this.project.title=this.title;
    this.project.type=this.type;
    this.student=JSON.parse(sessionStorage.getItem('student'));
    this.project.student=this.student;
    this.s.register(this.project).subscribe(ResponseData=> {
      console.log("response recived");
      this.router.navigate(["/projectDetail"]);
    },error => {
      console.log("error occure");
      this.msg="Invalid Passsword or EmailId";
  })

  }
  next(){
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

}
