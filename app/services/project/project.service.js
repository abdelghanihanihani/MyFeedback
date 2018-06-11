"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    // getAllEmployees(){
    //     return this.http.get("http://feedbackserver.fr.openode.io/employee/all");
    // }  
    ProjectService.prototype.getAllProjects = function () {
        return this.http.get("http://feedbackserver.fr.openode.io/project/all");
    };
    ProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFpRDtBQUdqRCxpQ0FBK0I7QUFHL0I7SUFDSSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUVwQyxDQUFDO0lBQ0wscUJBQXFCO0lBQ3JCLGdGQUFnRjtJQUVoRixNQUFNO0lBQ0wsdUNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxpREFBaUQsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFWVyxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBRWlCLGlCQUFVO09BRDNCLGNBQWMsQ0FXMUI7SUFBRCxxQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5tb2RlbFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyBcclxuICAgICAgICBcclxuICAgIH1cclxuLy8gZ2V0QWxsRW1wbG95ZWVzKCl7XHJcbi8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9mZWVkYmFja3NlcnZlci5mci5vcGVub2RlLmlvL2VtcGxveWVlL2FsbFwiKTtcclxuXHJcbi8vIH0gIFxyXG4gZ2V0QWxsUHJvamVjdHMoKTpPYnNlcnZhYmxlPFByb2plY3RbXT57XHJcbiAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2plY3RbXT4oXCJodHRwOi8vZmVlZGJhY2tzZXJ2ZXIuZnIub3Blbm9kZS5pby9wcm9qZWN0L2FsbFwiKTtcclxuIH0gXHJcbn0iXX0=