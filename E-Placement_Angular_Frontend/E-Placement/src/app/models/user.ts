import { Identifiers } from "@angular/compiler";
import { Drive } from "./comany";

export class User {
 emailId:string;
 password:string;
 name:string;
 constructor(){}
}
export class Student {
    studentId:number;
    emailId:string;
    password:string;
    name:string;
    dateOfBirth:string;
    mobileNo:string;
    address:string;
    hobbies:string;
    knownLanguages:string;
    status:string;
    schoolDetails:Array<SchoolDetail>;
	projectDetails:Array<ProjectDetail>;
    graduationDetail:Array<GraduationDetail>;
    drive:Array<Drive>;
    constructor(){}
   }
export class SchoolDetail{
    schoolId:Number;
	schoolName:string;
    board:string;
    percentage:Number;
    passingYear:Number;
    student:Student;
    constructor(){}
}
export class ProjectDetail{
    projectId:Number;
	 type:ProjectType;
    title:string;
    description:string;
    student:Student;
    constructor(){}
}
export class GraduationDetail{
    collegedId:Number;
	collegeName:string;
	 university:string;
	 degree:Degree;
	  stream:Stream;
	percentage:Number;
    passingYear:Number;
    student:Student;
    constructor(){}    
}
export enum ProjectType{
    MINOR,MAJOR,minor,major
}
export enum Degree{
    BE,BTECH,MTECH,ME
}
export enum Stream{
    MECHANICAL,COMPUTER,ELECTRICAL,IT
}



