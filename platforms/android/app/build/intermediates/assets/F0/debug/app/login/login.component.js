"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { RouterExtensions } from "nativescript-angular/router";
var page_1 = require("tns-core-modules/ui/page");
var employee_service_1 = require("./../services/employee/employee.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, page, EmployeeService) {
        this.router = router;
        this.page = page;
        this.EmployeeService = EmployeeService;
        this.employee = { id: 0, firstname: '', lastname: '', login: 'h', password: 'h' };
        this.login = { login: 'hani', password: 'aaa' };
        this.isBusy = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        if (this.EmployeeService.getAuthent()) {
            this.router.navigate(["/allf"]);
        }
        else {
            this.EmployeeService.removeEmployee();
        }
    };
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
    LoginComponent.prototype.Signin = function () {
        var _this = this;
        this.isBusy = true;
        this.EmployeeService.Signin(this.employee).subscribe(function (next) {
            _this.Authent = true;
            _this.EmployeeService.setAuthent(_this.Authent);
            _this.EmployeeService.setEmployee(next.id, next.firstname);
            _this.router.navigate(["/allf"]);
            _this.isBusy = false;
        }, function (error) { _this.CantConnect = true; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page, employee_service_1.EmployeeService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF1QztBQUN2QyxpRUFBaUU7QUFDakUsaURBQWdEO0FBR2hELDRFQUEwRTtBQVcxRTtJQU1JLHdCQUFvQixNQUFjLEVBQVMsSUFBVSxFQUFTLGVBQStCO1FBQXpFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTDdGLGFBQVEsR0FBVSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxDQUFDO1FBQzFFLFVBQUssR0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxDQUFDO1FBRXZDLFdBQU0sR0FBUyxLQUFLLENBQUM7SUFJdEIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUNyQyxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUNuQyxJQUFJLENBQ0osQ0FBQztZQUFBLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFBQSxDQUFDO0lBQzVDLENBQUM7SUFHTCxjQUFjO0lBQ2QsU0FBUztJQUNULDZGQUE2RjtJQUM3RixPQUFPO0lBQ1AsNENBQTRDO0lBQzVDLFFBQVE7SUFDUixVQUFVO0lBQ1YsT0FBTztJQUNQLGtDQUFrQztJQUNsQyxTQUFTO0lBRVQsU0FBUztJQUNSLCtCQUFNLEdBQU47UUFBQSxpQkFhUztRQVpOLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQzFDLFVBQUEsSUFBSTtZQUVGLEtBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4RCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUNBLFVBQUEsS0FBSyxJQUFHLEtBQUksQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQTdDRyxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUMsQ0FBQyxrQ0FBZSxDQUFDO1NBRTlCLENBQUM7eUNBTzhCLGVBQU0sRUFBZSxXQUFJLEVBQXlCLGtDQUFlO09BTnBGLGNBQWMsQ0E4QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG4vL2ltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL3VzZXIvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgRW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvZW1wbG95ZWUvZW1wbG95ZWUuc2VydmljZVwiO1xuaW1wb3J0IHsgRW1wbG95ZWV9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2VtcGxveWVlL2VtcGxveWVlLm1vZGVsXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczpbRW1wbG95ZWVTZXJ2aWNlXVxuICAgXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlbXBsb3llZTpFbXBsb3llZT17aWQ6MCxmaXJzdG5hbWU6JycsbGFzdG5hbWU6JycsIGxvZ2luOidoJyxwYXNzd29yZDonaCd9O1xuICAgIGxvZ2luOmFueT17bG9naW46J2hhbmknLHBhc3N3b3JkOidhYWEnfTtcbiAgICBDYW50Q29ubmVjdDpib29sZWFuO1xuICAgICBpc0J1c3k6Ym9vbGVhbj1mYWxzZTtcbiAgICAgQXV0aGVudDpib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBwYWdlOiBQYWdlLHByaXZhdGUgRW1wbG95ZWVTZXJ2aWNlOkVtcGxveWVlU2VydmljZSkge1xuICAgIFxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgIFxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgaWYodGhpcy5FbXBsb3llZVNlcnZpY2UuZ2V0QXV0aGVudCgpKVxuICAgICAgICB7IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hbGxmXCJdKTt9XG4gICAgICAgIGVsc2VcbiAgICAgICAge3RoaXMuRW1wbG95ZWVTZXJ2aWNlLnJlbW92ZUVtcGxveWVlKCk7fVxuICAgIH1cblxuICAgXG4vLyAgICBTaWduaW4oKVxuLy8gICAgICB7XG4vLyAgICAgICBpZigodGhpcy5pbnB1dC5sb2dpbj09dGhpcy5sb2dpbi5sb2dpbikmJih0aGlzLmlucHV0LnBhc3N3b3JkPT10aGlzLmxvZ2luLnBhc3N3b3JkKSlcbi8vICAgIHtcbi8vICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbi8vICAgICB9XG4vLyAgICBlbHNlXG4vLyAgICB7XG4vLyAgICAgICAgICB0aGlzLkNhbnRDb25uZWN0PXRydWU7XG4vLyAgICAgIH1cbiAgICAgIFxuLy8gICAgICB9XG4gU2lnbmluKCl7XG4gICAgdGhpcy5pc0J1c3k9dHJ1ZTtcbiAgIHRoaXMuRW1wbG95ZWVTZXJ2aWNlLlNpZ25pbih0aGlzLmVtcGxveWVlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgbmV4dD0+e1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICB0aGlzLkF1dGhlbnQ9dHJ1ZTtcbiAgICAgICAgICAgICAgIHRoaXMuRW1wbG95ZWVTZXJ2aWNlLnNldEF1dGhlbnQodGhpcy5BdXRoZW50KTtcbiAgICAgICAgICAgICAgICAgdGhpcy5FbXBsb3llZVNlcnZpY2Uuc2V0RW1wbG95ZWUobmV4dC5pZCxuZXh0LmZpcnN0bmFtZSk7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FsbGZcIl0pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc0J1c3k9ZmFsc2U7XG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3I9Pnt0aGlzLkNhbnRDb25uZWN0PXRydWU7fSlcbiAgICAgICAgIH1cbn1cblxuIl19