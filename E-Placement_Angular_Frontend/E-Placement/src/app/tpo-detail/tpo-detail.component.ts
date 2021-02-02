import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tpo } from '../models/tpo';
import { HttpTpoService } from '../service/http-tpo.service';

@Component({
  selector: 'app-tpo-detail',
  templateUrl: './tpo-detail.component.html',
  styleUrls: ['./tpo-detail.component.css']
})
export class TpoDetailComponent implements OnInit {
 
  tpo=new Tpo();
cname:string;
mob:string;
msg:string;
  constructor(private router:Router,private ss:HttpTpoService) { }

  ngOnInit(): void {
  }
  next(){
    console.log("in next");
    this.tpo=JSON.parse(sessionStorage.getItem('tpo'));
    this.tpo.collegeName=this.cname;
    this.tpo.mobileNo=this.mob;
    this.ss.register(this.tpo).subscribe(ResponseData=> {
      console.log("response recived");
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    },error => {
      console.log("error occure");
      this.msg="Invalid input";
  })
    

  }
}
