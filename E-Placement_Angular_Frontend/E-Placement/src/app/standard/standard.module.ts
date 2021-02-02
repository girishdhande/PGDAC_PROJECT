import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';




@NgModule({
  declarations: [HomeComponent, AboutusComponent, ContactusComponent],
  imports: [
    CommonModule
  ],exports:[
    HomeComponent, AboutusComponent, ContactusComponent
  ]
})
export class StandardModule { }
