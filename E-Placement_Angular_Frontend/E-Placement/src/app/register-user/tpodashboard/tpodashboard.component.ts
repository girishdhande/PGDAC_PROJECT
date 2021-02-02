import { Component, OnInit } from '@angular/core';
import { Tpo } from 'src/app/models/tpo';
import { HttpTpoService } from 'src/app/service/http-tpo.service';

@Component({
  selector: 'app-tpodashboard',
  templateUrl: './tpodashboard.component.html',
  styleUrls: ['./tpodashboard.component.css']
})
export class TpodashboardComponent implements OnInit {
 tpo:Tpo;
 msg:string;
  constructor(private t:HttpTpoService) {
    this.tpo=t.userValue;
   }

  ngOnInit(): void {
  }
  Logout(){
    this.t.tpologout();
  }

}
