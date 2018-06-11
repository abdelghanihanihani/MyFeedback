"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    // getAllusers(){
    //    return this.http.get("http://192.168.43.137:3002/user/all");
    //   // return this.listPickerCountries;
    // }  
    UserService.prototype.Signin = function (user) {
        return this.http.post("http://feedbackserver.fr.openode.io/user/login", user);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFpRDtBQU1qRDtJQUNJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBRXBDLENBQUM7SUFDTCxpQkFBaUI7SUFDakIsa0VBQWtFO0lBQ2xFLHdDQUF3QztJQUN4QyxNQUFNO0lBQ04sNEJBQU0sR0FBTixVQUFPLElBQVM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sZ0RBQWdELEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQVZZLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFaUIsaUJBQVU7T0FEM0IsV0FBVyxDQVd2QjtJQUFELGtCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4vLyBnZXRBbGx1c2Vycygpe1xyXG4vLyAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly8xOTIuMTY4LjQzLjEzNzozMDAyL3VzZXIvYWxsXCIpO1xyXG4vLyAgIC8vIHJldHVybiB0aGlzLmxpc3RQaWNrZXJDb3VudHJpZXM7XHJcbi8vIH0gIFxyXG5TaWduaW4odXNlcjpVc2VyKTpPYnNlcnZhYmxlPFVzZXI+e1xyXG4gIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPihcImh0dHA6Ly9mZWVkYmFja3NlcnZlci5mci5vcGVub2RlLmlvL3VzZXIvbG9naW5cIix1c2VyKTtcclxufSBcclxufSJdfQ==