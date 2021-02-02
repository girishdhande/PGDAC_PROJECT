import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Company, Drive } from '../models/comany';
import { Student } from '../models/user';
import { HttpDriveService } from '../service/htpp-drive.service';
import { HttpCompanyService } from '../service/http-company.service';
import { HttpStudentService } from '../service/http-student.service';


@Component({
  selector: 'app-get-student-list',
  templateUrl: './get-student-list.component.html',
  styleUrls: ['./get-student-list.component.css']
})
export class GetStudentListComponent implements OnInit {
 
  drive=new Drive();
  id:number;
  students:Observable<Student[]>
  company:Company;
  constructor(private d:HttpDriveService,private c:HttpCompanyService,private router:Router,private s:HttpStudentService) { }

  ngOnInit(): void {
    this.id=parseInt(sessionStorage.getItem('driveId'));
    this.d.getDriveDetail(this.id).subscribe(val=>this.drive=val);
    this.students=this.s.getList(this.id)
  }
  Logout(){
  this.router.navigate(["companyFeedback"]);
  }
}
