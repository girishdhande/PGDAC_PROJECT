import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hod } from '../models/hod';
import{HttpHodService} from '../service/http-hod.service'

@Component({
  selector: 'app-hod-detail',
  templateUrl: './hod-detail.component.html',
  styleUrls: ['./hod-detail.component.css']
})
export class HodDetailComponent implements OnInit {
 
  hod=new Hod();
  cname:string;
mob:string;
msg:string;
  constructor(private router:Router,private ss:HttpHodService) { }

  ngOnInit(): void {
  }
  next(){
    console.log("in next");
    this.hod=JSON.parse(sessionStorage.getItem('hod'));
    this.hod.collegeName=this.cname;
    this.hod.mobileNo=this.mob;
    this.ss.register(this.hod).subscribe(ResponseData=> {
      console.log("response recived");
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    },error => {
      console.log("error occure");
      this.msg="Invalid input";
  })
    

  }
}
