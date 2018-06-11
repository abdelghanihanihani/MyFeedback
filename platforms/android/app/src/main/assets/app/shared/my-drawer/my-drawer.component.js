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
            styleUrls: ["./my-drawer.component.scss"],
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}());
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsK0VBQTZFO0FBUTdFO0lBR0EsMkJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUVuRCxDQUFDO0lBQ0csb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsMENBQWMsR0FBZCxVQUFlLFNBQWlCO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBVFE7UUFBUixZQUFLLEVBQUU7OzJEQUFzQjtJQUZyQixpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLFNBQVMsRUFBQyxDQUFDLGtDQUFlLENBQUM7U0FDOUIsQ0FBQzt5Q0FJa0Msa0NBQWU7T0FIdEMsaUJBQWlCLENBWTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi8uLi9zZXJ2aWNlcy9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTXlEcmF3ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL215LWRyYXdlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL215LWRyYXdlci5jb21wb25lbnQuc2Nzc1wiXSxcclxuICAgIHByb3ZpZGVyczpbRW1wbG95ZWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlEcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgVXNlck5hbWU6c3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2VsZWN0ZWRQYWdlOiBzdHJpbmc7XHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgRW1wbG95ZWVTZXJ2aWNlOkVtcGxveWVlU2VydmljZSl7XHJcblxyXG59XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5Vc2VyTmFtZT10aGlzLkVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUZOKCk7XHJcbiAgICB9XHJcbiAgICBpc1BhZ2VTZWxlY3RlZChwYWdlVGl0bGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBwYWdlVGl0bGUgPT09IHRoaXMuc2VsZWN0ZWRQYWdlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==