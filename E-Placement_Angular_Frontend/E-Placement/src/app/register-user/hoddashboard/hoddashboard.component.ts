import { Component, OnInit } from '@angular/core';
import { Hod } from 'src/app/models/hod';
import { HttpHodService } from 'src/app/service/http-hod.service';

@Component({
  selector: 'app-hoddashboard',
  templateUrl: './hoddashboard.component.html',
  styleUrls: ['./hoddashboard.component.css']
})
export class HoddashboardComponent implements OnInit {
   hod:Hod;
  constructor(private h:HttpHodService) {
    this.hod=h.userValue;
   }
  
  ngOnInit(): void {
  }
  Logout(){
    this.h.hodlogout();
  }
}
