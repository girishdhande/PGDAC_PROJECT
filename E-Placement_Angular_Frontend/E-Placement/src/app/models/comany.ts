import { Identifiers } from "@angular/compiler";
import { Student } from "./user";

export class Company {
    companyId:number;
     name:string;
	 mobileNo:string;
    emailId:string;
     password:string;
     address:string;
     drive:Array<Drive>
    constructor(){}
}


export class JobDetail {
     jobId:Number;
     companyId:Number;
	designation:string;
    responsibility:string;
	 skill:string;
	 experience:string;
    technology:string;
	 salary:Number;
    location:string;
    drive:Drive;
    constructor(){}
}

export class Drive{
    driveId:number;
   driveDate:string;
    time:string;
    venue:string;
    job: Array<JobDetail>;
    students:Array<Student>;
    company:Company;

}