import { Component, Input, OnInit } from "@angular/core";
import { EmployeeService } from "./../../services/employee/employee.service";
@Component({
    selector: "MyDrawer",
    moduleId: module.id,
    templateUrl: "./my-drawer.component.html",
    styleUrls: ["./my-drawer.component.scss"]
})
export class MyDrawerComponent implements OnInit {
    UserName:string;
    @Input() selectedPage: string;
constructor(private EmployeeService:EmployeeService){

}
    ngOnInit(): void {
      this.UserName=this.EmployeeService.getEmployeeFN();
    }
    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
}
