import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "ui/dialogs";
import { alert } from "ui/dialogs";
import { EmployeeService } from "./../../services/employee/employee.service";
/* ***********************************************************
* Keep data that is displayed as drawer items in the MyDrawer component class.
*************************************************************/
@Component({
    selector: "MyDrawerItem",
    moduleId: module.id,
    templateUrl: "./my-drawer-item.component.html",
    styleUrls: ["./my-drawer-item.component.scss"]
})
export class MyDrawerItemComponent implements OnInit {
    Authent:boolean;
    @Input() title: string;
    @Input() route: string;
    @Input() icon: string;
    @Input() isSelected: boolean;

    constructor(private routerExtensions: RouterExtensions,private EmployeeService:EmployeeService) {

    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the MyDrawerItemComponent "onInit" event handler to initialize the properties data values.
        *************************************************************/
    }

    /* ***********************************************************
    * Use the "tap" event handler of the GridLayout component for handling navigation item taps.
    * The "tap" event handler of the app drawer item <GridLayout> is used to navigate the app
    * based on the tapped navigationItem's route.
    *************************************************************/
    onNavItemTap(navItemRoute: string): void {
        if(navItemRoute=='/login')
        {dialogs.confirm({
            title: "Confirm",
            message: "Are you sure ?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        }).then(result => {
            // result argument is boolean
            if(result)
            {this.Authent=false;
                this.EmployeeService.setAuthent(this.Authent);
                this.routerExtensions.navigate([navItemRoute], {
                     transition: {
                         name: "fade"
                     }
                 });
            }
        });
            //alert('ok');
        }
        else{
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
    }
}
