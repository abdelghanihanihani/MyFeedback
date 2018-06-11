import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { EmployeeService } from "./../services/employee/employee.service";
import { Employee} from "./../services/employee/employee.model";
import * as ApplicationSettings from "application-settings";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers:[EmployeeService]
})
export class HomeComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
id:string="hi";
employee:Employee;
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    constructor(private EmployeeService:EmployeeService) {
        
        
    
        //  this.login=this.employee.login;
       // this.login="jj";
       }
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    ok(){
        alert('hello'+this.EmployeeService.getEmployee());
    }
    cl(){
        this.EmployeeService.removeEmployee();
    }
}
