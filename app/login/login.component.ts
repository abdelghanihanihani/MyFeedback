import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
//import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { UserService } from "./../services/user/user.service";
import { User } from "./../services/user/user.model";
import { EmployeeService } from "./../services/employee/employee.service";
import { Employee} from "./../services/employee/employee.model";
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    providers:[EmployeeService]
   
})
export class LoginComponent implements OnInit {
    employee:Employee={id:0,firstname:'',lastname:'', login:'',password:'',role:''};
    login:any={login:'hani',password:'aaa'};
    CantConnect:boolean;
     isBusy:boolean=false;
     Authent:boolean;
    constructor(private router: Router,private page: Page,private EmployeeService:EmployeeService) {
    
    }

    ngOnInit(): void {
       
        this.page.actionBarHidden = true;
        if(this.EmployeeService.getAuthent())
        { this.router.navigate(["/allf"]);}
        else
        {this.EmployeeService.removeEmployee();}
    }

   
//    Signin()
//      {
//       if((this.input.login==this.login.login)&&(this.input.password==this.login.password))
//    {
//          this.router.navigate(["/home"]);
//     }
//    else
//    {
//          this.CantConnect=true;
//      }
      
//      }
 Signin(){
    this.isBusy=true;
   this.EmployeeService.Signin(this.employee).subscribe(
             next=>{
               
               this.Authent=true;
               this.EmployeeService.setAuthent(this.Authent);
                 this.EmployeeService.setEmployee(next.id,next.firstname);
                 this.EmployeeService.setEmpRole(next.role);
                  this.router.navigate(["/allf"]);
                  this.isBusy=false;
             },
              error=>{this.CantConnect=true;
                this.isBusy=false;})
         }
}

