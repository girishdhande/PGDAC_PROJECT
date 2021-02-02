import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {
  MatCardModule,MatSelectModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';
import { StandardModule } from './standard/standard.module';
import { StudentdashboardComponent } from './register-user/studentdashboard/studentdashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { TpodashboardComponent } from './register-user/tpodashboard/tpodashboard.component';
import { HoddashboardComponent } from './register-user/hoddashboard/hoddashboard.component';
import { CompanydashboardComponent } from './register-user/companydashboard/companydashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import { GraduationDetailComponent } from './graduation-detail/graduation-detail.component';
import { HscschoolDetailComponent } from './hscschool-detail/hscschool-detail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TpoDetailComponent } from './tpo-detail/tpo-detail.component';
import { HodDetailComponent } from './hod-detail/hod-detail.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { DriveCompanyComponent } from './drive-company/drive-company.component';
import { ViewDriveDetailComponent } from './view-drive-detail/view-drive-detail.component';
import { UpdateDriveComponent } from './update-drive/update-drive.component';
import { AddDriveDetailComponent } from './add-drive-detail/add-drive-detail.component';
import { AddJobDetailComponent } from './add-job-detail/add-job-detail.component';
import { CompanyFeedbackComponent } from './company-feedback/company-feedback.component';
import { GetStudentListComponent } from './get-student-list/get-student-list.component';
import { StudentDriveComponent } from './student-drive/student-drive.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,HeaderComponent,
    FooterComponent,
    StudentdashboardComponent,
    TpodashboardComponent,
    HoddashboardComponent,
    CompanydashboardComponent,
    StudentDetailsComponent,
    SchoolDetailsComponent,
    GraduationDetailComponent,
    HscschoolDetailComponent,
    ProjectDetailComponent,
    TpoDetailComponent,
    HodDetailComponent,
    CompanyDetailComponent,
    DriveCompanyComponent,
    ViewDriveDetailComponent,
    UpdateDriveComponent,
    AddDriveDetailComponent,
    AddJobDetailComponent,
    CompanyFeedbackComponent,
    GetStudentListComponent,
    StudentDriveComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    StandardModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
