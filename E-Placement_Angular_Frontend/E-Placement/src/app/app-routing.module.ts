import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { StudentdashboardComponent } from './register-user/studentdashboard/studentdashboard.component';
import { AboutusComponent } from './standard/aboutus/aboutus.component';
import { ContactusComponent } from './standard/contactus/contactus.component';
import { HomeComponent } from './standard/home/home.component';
import{TpodashboardComponent} from './register-user/tpodashboard/tpodashboard.component';
import{HoddashboardComponent}from './register-user/hoddashboard/hoddashboard.component';
import{CompanydashboardComponent} from './register-user/companydashboard/companydashboard.component';
import{StudentDetailsComponent}from './student-details/student-details.component';
import{SchoolDetailsComponent}from './school-details/school-details.component';
import{GraduationDetailComponent}from './graduation-detail/graduation-detail.component';
import{HscschoolDetailComponent} from './hscschool-detail/hscschool-detail.component';
import{ProjectDetailComponent} from './project-detail/project-detail.component';
import{TpoDetailComponent} from './tpo-detail/tpo-detail.component';
import{HodDetailComponent} from './hod-detail/hod-detail.component';
import{CompanyDetailComponent} from './company-detail/company-detail.component';
import{DriveCompanyComponent} from './drive-company/drive-company.component';
import{ViewDriveDetailComponent} from './view-drive-detail/view-drive-detail.component';
import{UpdateDriveComponent} from './update-drive/update-drive.component';
import{AddDriveDetailComponent} from './add-drive-detail/add-drive-detail.component';
import{AddJobDetailComponent} from './add-job-detail/add-job-detail.component';
import{CompanyFeedbackComponent} from './company-feedback/company-feedback.component';
import{GetStudentListComponent} from './get-student-list/get-student-list.component';
import{StudentDriveComponent} from './student-drive/student-drive.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:RegisterUserComponent},
  {path:'studentdashboard',component:StudentdashboardComponent},
  {path:'tpodashboard',component:TpodashboardComponent},
  {path:'hoddashboard',component:HoddashboardComponent},
  {path:'companydashboard',component:CompanydashboardComponent},
  {path:'studentDetails',component:StudentDetailsComponent},
  {path:'schoolDetails',component:SchoolDetailsComponent},
  {path:'hscschoolDetails',component:HscschoolDetailComponent},
  {path:'graduationDetail',component:GraduationDetailComponent},
  {path:'projectDetail',component:ProjectDetailComponent},
  {path:'tpoDetail',component:TpoDetailComponent},
  {path:'hodDetail',component:HodDetailComponent},
  {path:'companyDetail',component:CompanyDetailComponent},
  {path:'companyDrive',component:DriveCompanyComponent},
  {path:'viewDriveDetail',component:ViewDriveDetailComponent},
  {path:'updateDriveDetail',component:UpdateDriveComponent},
  {path:'addDriveDetail',component:AddDriveDetailComponent},
  {path:'addJobDetail',component:AddJobDetailComponent},
  {path:'companyFeedback',component:CompanyFeedbackComponent},
  {path:'getStudentList',component:GetStudentListComponent},
  {path:'studentdrive',component:StudentDriveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
