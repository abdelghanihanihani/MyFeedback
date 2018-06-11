"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var ApplicationSettings = require("application-settings");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.l = "ss";
    }
    // getAllEmployees(){
    //     return this.http.get("http://feedbackserver.fr.openode.io/employee/all");
    // }  
    EmployeeService.prototype.getAllEmployees = function () {
        return this.http.get("http://feedbackserver.fr.openode.io/employee/all?id=" + ApplicationSettings.getNumber('id'));
    };
    EmployeeService.prototype.Signin = function (employee) {
        return this.http.post("http://feedbackserver.fr.openode.io/employee/login", employee);
    };
    EmployeeService.prototype.setEmployee = function (id, firstname) {
        ApplicationSettings.setNumber('id', id);
        ApplicationSettings.setString('firstname', firstname);
    };
    EmployeeService.prototype.setAuthent = function (authent) {
        ApplicationSettings.setBoolean('athent', authent);
    };
    EmployeeService.prototype.getAuthent = function () {
        return ApplicationSettings.getBoolean('athent');
    };
    EmployeeService.prototype.getEmployee = function () {
        return ApplicationSettings.getNumber('id');
    };
    EmployeeService.prototype.getEmployeeFN = function () {
        return ApplicationSettings.getString('firstname');
    };
    EmployeeService.prototype.removeEmployee = function () {
        ApplicationSettings.clear();
    };
    EmployeeService.prototype.setEmpRole = function (role) {
        ApplicationSettings.setString('role', role);
    };
    EmployeeService.prototype.getEmpRole = function () {
        return ApplicationSettings.getString('role');
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVtcGxveWVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWlEO0FBR2pELGlDQUErQjtBQUMvQiwwREFBNEQ7QUFFNUQ7SUFHSSx5QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUR0QyxNQUFDLEdBQVEsSUFBSSxDQUFDO0lBR1osQ0FBQztJQUNMLHFCQUFxQjtJQUNyQixnRkFBZ0Y7SUFFaEYsTUFBTTtJQUNMLHlDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWEsc0RBQXNELEdBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQUNELGdDQUFNLEdBQU4sVUFBTyxRQUFpQjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVcsb0RBQW9ELEVBQUMsUUFBUSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUNELHFDQUFXLEdBQVgsVUFBWSxFQUFTLEVBQUMsU0FBZ0I7UUFFcEMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxvQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUVoQixtQkFBbUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxvQ0FBVSxHQUFWO1FBRUUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUVFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELHVDQUFhLEdBQWI7UUFFRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCx3Q0FBYyxHQUFkO1FBQ0UsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELG9DQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2QsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBQ0Qsb0NBQVUsR0FBVjtRQUVBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQS9DWSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBSWlCLGlCQUFVO09BSDNCLGVBQWUsQ0FnRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tIFwiLi9lbXBsb3llZS5tb2RlbFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZXJ2aWNlIHtcclxuICBlbXBsb3llOkVtcGxveWVlO1xyXG4gIGw6c3RyaW5nPVwic3NcIjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyBcclxuICAgICAgICBcclxuICAgIH1cclxuLy8gZ2V0QWxsRW1wbG95ZWVzKCl7XHJcbi8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9mZWVkYmFja3NlcnZlci5mci5vcGVub2RlLmlvL2VtcGxveWVlL2FsbFwiKTtcclxuXHJcbi8vIH0gIFxyXG4gZ2V0QWxsRW1wbG95ZWVzKCk6T2JzZXJ2YWJsZTxFbXBsb3llZVtdPntcclxuICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW1wbG95ZWVbXT4oXCJodHRwOi8vZmVlZGJhY2tzZXJ2ZXIuZnIub3Blbm9kZS5pby9lbXBsb3llZS9hbGw/aWQ9XCIrQXBwbGljYXRpb25TZXR0aW5ncy5nZXROdW1iZXIoJ2lkJykpO1xyXG4gfSBcclxuIFNpZ25pbihlbXBsb3llZTpFbXBsb3llZSk6T2JzZXJ2YWJsZTxFbXBsb3llZT57XHJcbiAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PEVtcGxveWVlPihcImh0dHA6Ly9mZWVkYmFja3NlcnZlci5mci5vcGVub2RlLmlvL2VtcGxveWVlL2xvZ2luXCIsZW1wbG95ZWUpO1xyXG59IFxyXG5zZXRFbXBsb3llZShpZDpudW1iZXIsZmlyc3RuYW1lOnN0cmluZylcclxue1xyXG4gIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0TnVtYmVyKCdpZCcsaWQpO1xyXG4gIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCdmaXJzdG5hbWUnLGZpcnN0bmFtZSk7XHJcbn1cclxuc2V0QXV0aGVudChhdXRoZW50KVxyXG57XHJcbiAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKCdhdGhlbnQnLGF1dGhlbnQpO1xyXG59XHJcbmdldEF1dGhlbnQoKTpib29sZWFuXHJcbntcclxuICByZXR1cm4gQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKCdhdGhlbnQnKTtcclxufVxyXG5nZXRFbXBsb3llZSgpOm51bWJlclxyXG57IFxyXG4gIHJldHVybiBBcHBsaWNhdGlvblNldHRpbmdzLmdldE51bWJlcignaWQnKTtcclxufVxyXG5nZXRFbXBsb3llZUZOKCk6c3RyaW5nXHJcbnsgXHJcbiAgcmV0dXJuIEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCdmaXJzdG5hbWUnKTtcclxufVxyXG5yZW1vdmVFbXBsb3llZSgpe1xyXG4gIEFwcGxpY2F0aW9uU2V0dGluZ3MuY2xlYXIoKTtcclxufVxyXG5zZXRFbXBSb2xlKHJvbGUpXHJcbntBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygncm9sZScscm9sZSk7XHJcblxyXG59XHJcbmdldEVtcFJvbGUoKVxyXG57XHJcbnJldHVybiBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygncm9sZScpO1xyXG59XHJcbn0iXX0=