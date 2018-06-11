"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./../../services/employee/employee.service");
var MyDrawerComponent = /** @class */ (function () {
    function MyDrawerComponent(EmployeeService) {
        this.EmployeeService = EmployeeService;
    }
    MyDrawerComponent.prototype.ngOnInit = function () {
        this.UserName = this.EmployeeService.getEmployeeFN();
    };
    MyDrawerComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerComponent.prototype, "selectedPage", void 0);
    MyDrawerComponent = __decorate([
        core_1.Component({
            selector: "MyDrawer",
            moduleId: module.id,
            templateUrl: "./my-drawer.component.html",
            styleUrls: ["./my-drawer.component.scss"]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}());
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsK0VBQTZFO0FBTzdFO0lBR0EsMkJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUVuRCxDQUFDO0lBQ0csb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsMENBQWMsR0FBZCxVQUFlLFNBQWlCO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBVFE7UUFBUixZQUFLLEVBQUU7OzJEQUFzQjtJQUZyQixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBSWtDLGtDQUFlO09BSHRDLGlCQUFpQixDQVk3QjtJQUFELHdCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vLi4vc2VydmljZXMvZW1wbG95ZWUvZW1wbG95ZWUuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk15RHJhd2VyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1kcmF3ZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9teS1kcmF3ZXIuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15RHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIFVzZXJOYW1lOnN0cmluZztcclxuICAgIEBJbnB1dCgpIHNlbGVjdGVkUGFnZTogc3RyaW5nO1xyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIEVtcGxveWVlU2VydmljZTpFbXBsb3llZVNlcnZpY2Upe1xyXG5cclxufVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuVXNlck5hbWU9dGhpcy5FbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVGTigpO1xyXG4gICAgfVxyXG4gICAgaXNQYWdlU2VsZWN0ZWQocGFnZVRpdGxlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcGFnZVRpdGxlID09PSB0aGlzLnNlbGVjdGVkUGFnZTtcclxuICAgIH1cclxufVxyXG4iXX0=