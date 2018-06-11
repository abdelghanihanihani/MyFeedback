"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var employee_service_1 = require("./../services/employee/employee.service");
var project_service_1 = require("./../services/project/project.service");
var feedback_service_1 = require("./../services/feedback/feedback.service");
var PubfComponent = /** @class */ (function () {
    //ErrorOther:boolean= this.other=="";
    function PubfComponent(EmployeeService, ProjectService, FeedbackService) {
        //     this.selectedContext==0;
        //    // this.Contexts=[];
        //     this.feedback.targets=[];
        //     this.EmployeeService.getAllEmployees().subscribe(
        //         next =>{this.ListOfEmployee=next;
        this.EmployeeService = EmployeeService;
        this.ProjectService = ProjectService;
        this.FeedbackService = FeedbackService;
        this.selectedContextType = 0;
        this.selectedContext = 0;
        this.selectedType = 0;
        this.selectedMode = 0;
        this.Modes = ["Public", "Private", "Personalized"];
        this.Types = ["Positive", "Négative"];
        this.ListOfContexts = ["Employee", "Project", "Other"];
        this.Contexts = [];
        this.Targets = [this.EmployeeService.getEmployee()];
        this.Other = false;
        this.Context = "Employee :";
        this.ErrorOther = false;
        this.List = false;
        this.feedback = { id: null, contextType: 'Employee', context: '', type: 'Positive', mode: 'Public', value: '', date: '', targets: null };
        // fdpb:{id_e:number,feedback:Feedback}={id_e:null,feedback:this.feedback};
        // list:Array<{status:boolean,employee:Employee}>=[];
        this.count = 0;
        this.isBusy = false;
        //              for(let i=0;i<=this.ListOfEmployee.length;i++)
        //              {
        //                  this.Contexts.push(this.ListOfEmployee[i].firstname+" "+this.ListOfEmployee[i].lastname);
        //             this.Targets.push(this.ListOfEmployee[i].id);
        //             // this.list[i].status=false;
        //             // this.list[i].employee=this.ListOfEmployee[i];
        //              }
        //         });
        //         this.ProjectService.getAllProjects().subscribe(
        //             next =>{this.ListOfProjects=next;});
    }
    PubfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.selectedContext == 0;
        // this.Contexts=[];
        this.feedback.targets = [];
        this.EmployeeService.getAllEmployees().subscribe(function (next) {
            _this.ListOfEmployee = next;
            for (var i = 0; i <= _this.ListOfEmployee.length; i++) {
                _this.Contexts.push(_this.ListOfEmployee[i].firstname + " " + _this.ListOfEmployee[i].lastname);
                _this.Targets.push(_this.ListOfEmployee[i].id);
                // this.list[i].status=false;
                // this.list[i].employee=this.ListOfEmployee[i];
            }
        });
        this.ProjectService.getAllProjects().subscribe(function (next) { _this.ListOfProjects = next; });
    };
    Object.defineProperty(PubfComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    PubfComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    PubfComponent.prototype.OnChangeContextType = function (args) {
        if (args.newIndex == 0) {
            this.ErrorOther = false;
            this.feedback.contextType = this.ListOfContexts[args.newIndex];
            this.Context = "Employee :";
            this.Other = false;
            this.Contexts = [];
            for (var i = 0; i <= this.ListOfEmployee.length; i++) {
                this.Contexts.push(this.ListOfEmployee[i].firstname + " " + this.ListOfEmployee[i].lastname);
            }
        }
        else if (args.newIndex == 1) {
            this.ErrorOther = false;
            this.feedback.contextType = this.ListOfContexts[args.newIndex];
            this.Context = "Project :";
            this.Other = false;
            this.Contexts = [];
            for (var i = 0; i <= this.ListOfProjects.length; i++) {
                this.Contexts.push(this.ListOfProjects[i].name);
            }
        }
        else if (args.newIndex == 2) {
            //this.feedback.context=this.other;
            this.Other = true;
            this.ErrorOther = true;
            this.feedback.contextType = this.ListOfContexts[args.newIndex];
        }
    };
    PubfComponent.prototype.onTextChange = function (args) {
        var textField = args.object;
        this.other = textField.text;
    };
    PubfComponent.prototype.OnChangeContext = function (args) {
        this.feedback.context = this.Contexts[args.newIndex];
    };
    PubfComponent.prototype.OnChangeType = function (args) {
        this.feedback.type = this.Types[args.newIndex];
    };
    PubfComponent.prototype.OnChangeMode = function (args) {
        this.feedback.mode = this.Modes[args.newIndex];
        if (args.newIndex == 0) {
            this.Targets = [this.EmployeeService.getEmployee()];
            for (var i = 0; i <= this.ListOfEmployee.length; i++) {
                this.Targets.push(this.ListOfEmployee[i].id);
            }
        }
        else if (args.newIndex == 1) {
            this.Targets = [this.EmployeeService.getEmployee()];
        }
        else if (args.newIndex == 2) {
            this.Targets = [this.EmployeeService.getEmployee()];
            this.count = this.Targets.length;
            this.List = true;
        }
    };
    PubfComponent.prototype.onSetupItemView = function (args) {
        args.view.context.third = (args.index % 3 === 0);
    };
    PubfComponent.prototype.onItemTap = function (args) {
        //this.isTaped=!this.isTaped;
        // if((this.list[args.index].status==false)&&(this.list[args.index].employee==this.ListOfEmployee[args.index]))
        // {this.list[args.index].status=! this.list[args.index].status;
        //     this.isTaped=true;}
        //alert(args.view);
        this.isAdded = this.searchById(this.ListOfEmployee[args.index].id);
        if (this.isAdded == -1) {
            this.Targets.push(this.ListOfEmployee[args.index].id);
            this.count = this.Targets.length;
        }
        else {
            this.Targets.splice(this.isAdded, 1);
            alert({ title: "Remind", message: this.ListOfEmployee[args.index].firstname + " " + this.ListOfEmployee[args.index].lastname + " is removed", okButtonText: "OK" });
            this.count = this.Targets.length;
        }
        //    alert('Item with index: ' + args.index + ' tapped');
    };
    PubfComponent.prototype.submit = function (text) {
        if (text == '') {
            this.ErrorOther = true;
        }
        else {
            this.other = text;
            this.ErrorOther = false;
        }
    };
    PubfComponent.prototype.reset = function () {
        this.Context = "Employee :";
        this.selectedContext = 0;
        this.other = '';
        this.selectedType = 0;
        this.selectedMode = 0;
        this.feedback.value = '';
        this.resetTargets();
        this.selectedContextType = 0;
        this.Other = false;
        this.Contexts = [];
        for (var i = 0; i <= this.ListOfEmployee.length; i++) {
            this.Contexts.push(this.ListOfEmployee[i].firstname + " " + this.ListOfEmployee[i].lastname);
        }
    };
    PubfComponent.prototype.publish = function () {
        var _this = this;
        if (this.feedback.contextType == 'Other') {
            this.feedback.context = this.other;
        }
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        this.feedback.date = day + '/' + month + '/' + year;
        // this.Targets.push(this.EmployeeService.getEmployee());
        this.feedback.targets = this.Targets;
        //this.feedback.context=this.other;
        //this.fdpb.id_e=this.EmployeeService.getEmployee();
        this.isBusy = true;
        this.FeedbackService.addFeedback(this.feedback).subscribe(function (next) {
            _this.isBusy = false;
            alert("Your feedback is added successfully");
        }, 
        //alert(JSON.stringify(next));},
        function (error) {
            _this.isBusy = false;
            alert("Unfortunately we were unable to add your feedback.");
        });
    };
    PubfComponent.prototype.finish = function () {
        this.List = false;
        if (this.Targets.length == 0) {
            this.selectedMode = 0;
            for (var i = 0; i <= this.ListOfEmployee.length; i++) {
                this.Targets.push(this.ListOfEmployee[i].id);
            }
        }
        else {
            this.selectedMode = 2;
            // this.feedback.targets=this.Targets
        }
    };
    PubfComponent.prototype.resetTargets = function () {
        this.Targets = [this.EmployeeService.getEmployee()];
        this.count = this.Targets.length;
    };
    PubfComponent.prototype.searchById = function (id) {
        var i = 0;
        while ((this.Targets[i] != id) && (i <= this.Targets.length)) {
            i++;
        }
        if (i > this.Targets.length) {
            return -1;
        }
        else {
            return i;
        }
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], PubfComponent.prototype, "FirstCheckBox", void 0);
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], PubfComponent.prototype, "drawerComponent", void 0);
    PubfComponent = __decorate([
        core_1.Component({
            selector: "Pubf",
            moduleId: module.id,
            templateUrl: "./Pubf.component.html",
            styleUrls: ["./Pubf.component.css"],
            providers: [employee_service_1.EmployeeService, project_service_1.ProjectService, feedback_service_1.FeedbackService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, project_service_1.ProjectService, feedback_service_1.FeedbackService])
    ], PubfComponent);
    return PubfComponent;
}());
exports.PubfComponent = PubfComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHViZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQdWJmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFDLHNDQUF3RTtBQUN6RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBR2hGLDRFQUEwRTtBQUUxRSx5RUFBc0U7QUFHdEUsNEVBQTBFO0FBVzFFO0lBMEJJLHFDQUFxQztJQUNyQyx1QkFBb0IsZUFBK0IsRUFBUyxjQUE2QixFQUFTLGVBQStCO1FBQ2pJLCtCQUErQjtRQUMvQiwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDLHdEQUF3RDtRQUN4RCw0Q0FBNEM7UUFMeEIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUExQmpJLHdCQUFtQixHQUFRLENBQUMsQ0FBQztRQUM3QixvQkFBZSxHQUFRLENBQUMsQ0FBQztRQUN6QixpQkFBWSxHQUFRLENBQUMsQ0FBQztRQUN0QixpQkFBWSxHQUFRLENBQUMsQ0FBQztRQUN0QixVQUFLLEdBQWUsQ0FBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hELFVBQUssR0FBZSxDQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxtQkFBYyxHQUFlLENBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUc1RCxhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMzRCxVQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBUSxZQUFZLENBQUM7UUFHNUIsZUFBVSxHQUFTLEtBQUssQ0FBQztRQUN6QixTQUFJLEdBQVMsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBVSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsV0FB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LEdBQVYsVUFBVyxFQUFTO1FBQ2hCLElBQUksQ0FBQyxHQUFRLENBQUMsQ0FBQztRQUNmLE9BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQ3RELENBQUM7WUFBQyxDQUFDLEVBQUUsQ0FBQztRQUFBLENBQUM7UUFDUCxFQUFFLENBQUEsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FDekIsQ0FBQztZQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUM7UUFDWixJQUFJLENBQ0wsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDO0lBRWQsQ0FBQztJQXhPYztRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBZ0IsaUJBQVU7d0RBQUM7SUF3QnZCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7MERBQUM7SUFqRHBELGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNOLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFNBQVMsRUFBQyxDQUFDLGtDQUFlLEVBQUMsZ0NBQWMsRUFBQyxrQ0FBZSxDQUFDO1NBQzlELENBQUM7eUNBNEJzQyxrQ0FBZSxFQUF3QixnQ0FBYyxFQUF5QixrQ0FBZTtPQTNCeEgsYUFBYSxDQXdRekI7SUFBRCxvQkFBQztDQUFBLEFBeFFELElBd1FDO0FBeFFZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCxFbGVtZW50UmVmICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFbXBsb3llZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2VtcGxveWVlL2VtcGxveWVlLm1vZGVsXCI7XG5pbXBvcnQgeyBQcm9qZWN0U2VydmljZX0gZnJvbSBcIi4vLi4vc2VydmljZXMvcHJvamVjdC9wcm9qZWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9wcm9qZWN0L3Byb2plY3QubW9kZWxcIjtcbmltcG9ydCB7IEZlZWRiYWNrIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvZmVlZGJhY2svZmVlZGJhY2subW9kZWxcIjtcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2ZlZWRiYWNrL2ZlZWRiYWNrLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XG5pbXBvcnQge1NldHVwSXRlbVZpZXdBcmdzfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICAgc2VsZWN0b3I6IFwiUHViZlwiLFxuICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgICB0ZW1wbGF0ZVVybDogXCIuL1B1YmYuY29tcG9uZW50Lmh0bWxcIixcbiAgICAgc3R5bGVVcmxzOiBbXCIuL1B1YmYuY29tcG9uZW50LmNzc1wiXSxcbiAgICAgcHJvdmlkZXJzOltFbXBsb3llZVNlcnZpY2UsUHJvamVjdFNlcnZpY2UsRmVlZGJhY2tTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQdWJmQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzZWxlY3RlZENvbnRleHRUeXBlOm51bWJlcj0wO1xuICAgIHNlbGVjdGVkQ29udGV4dDpudW1iZXI9MDtcbiAgICBzZWxlY3RlZFR5cGU6bnVtYmVyPTA7XG4gICAgc2VsZWN0ZWRNb2RlOm51bWJlcj0wO1xuICAgIE1vZGVzOkFycmF5PHN0cmluZz49W1wiUHVibGljXCIsXCJQcml2YXRlXCIsXCJQZXJzb25hbGl6ZWRcIl07XG4gICAgVHlwZXM6QXJyYXk8c3RyaW5nPj1bXCJQb3NpdGl2ZVwiLFwiTsOpZ2F0aXZlXCJdO1xuICAgIExpc3RPZkNvbnRleHRzOkFycmF5PHN0cmluZz49W1wiRW1wbG95ZWVcIixcIlByb2plY3RcIixcIk90aGVyXCJdO1xuICAgIExpc3RPZkVtcGxveWVlOkFycmF5PEVtcGxveWVlPjtcbiAgICBMaXN0T2ZQcm9qZWN0czpBcnJheTxQcm9qZWN0PjtcbiAgICBDb250ZXh0czpBcnJheTxzdHJpbmc+PVtdO1xuICAgIFRhcmdldHM6QXJyYXk8bnVtYmVyPj1bdGhpcy5FbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWUoKV07XG4gICAgT3RoZXI6Ym9vbGVhbj1mYWxzZTtcbiAgICBDb250ZXh0OnN0cmluZz1cIkVtcGxveWVlIDpcIjtcbiAgICBwYXNzd29yZDpzdHJpbmc7XG4gICAgb3RoZXI6c3RyaW5nO1xuICAgIEVycm9yT3RoZXI6Ym9vbGVhbj1mYWxzZTtcbiAgICBMaXN0OmJvb2xlYW49ZmFsc2U7XG4gICAgZmVlZGJhY2s6RmVlZGJhY2s9e2lkOm51bGwsY29udGV4dFR5cGU6J0VtcGxveWVlJyxjb250ZXh0OicnLHR5cGU6J1Bvc2l0aXZlJyxtb2RlOidQdWJsaWMnLHZhbHVlOicnLGRhdGU6JycsdGFyZ2V0czpudWxsfTtcbiAgICAvLyBmZHBiOntpZF9lOm51bWJlcixmZWVkYmFjazpGZWVkYmFja309e2lkX2U6bnVsbCxmZWVkYmFjazp0aGlzLmZlZWRiYWNrfTtcbiAgICAvLyBsaXN0OkFycmF5PHtzdGF0dXM6Ym9vbGVhbixlbXBsb3llZTpFbXBsb3llZX0+PVtdO1xuICAgIGNvdW50Om51bWJlcj0wO1xuICAgIGlzQWRkZWQ6bnVtYmVyO1xuICAgIGlzQnVzeTpib29sZWFuPWZhbHNlO1xuICAgIGlzVGFwZWQ6Ym9vbGVhbjtcbiAgICBAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XG4gICAgLy9FcnJvck90aGVyOmJvb2xlYW49IHRoaXMub3RoZXI9PVwiXCI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBFbXBsb3llZVNlcnZpY2U6RW1wbG95ZWVTZXJ2aWNlLHByaXZhdGUgUHJvamVjdFNlcnZpY2U6UHJvamVjdFNlcnZpY2UscHJpdmF0ZSBGZWVkYmFja1NlcnZpY2U6RmVlZGJhY2tTZXJ2aWNlKXtcbiAgICAvLyAgICAgdGhpcy5zZWxlY3RlZENvbnRleHQ9PTA7XG4gICAgLy8gICAgLy8gdGhpcy5Db250ZXh0cz1bXTtcbiAgICAvLyAgICAgdGhpcy5mZWVkYmFjay50YXJnZXRzPVtdO1xuICAgIC8vICAgICB0aGlzLkVtcGxveWVlU2VydmljZS5nZXRBbGxFbXBsb3llZXMoKS5zdWJzY3JpYmUoXG4gICAgLy8gICAgICAgICBuZXh0ID0+e3RoaXMuTGlzdE9mRW1wbG95ZWU9bmV4dDtcbiAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPD10aGlzLkxpc3RPZkVtcGxveWVlLmxlbmd0aDtpKyspXG4gICAgLy8gICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgIHRoaXMuQ29udGV4dHMucHVzaCh0aGlzLkxpc3RPZkVtcGxveWVlW2ldLmZpcnN0bmFtZStcIiBcIit0aGlzLkxpc3RPZkVtcGxveWVlW2ldLmxhc3RuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5UYXJnZXRzLnB1c2godGhpcy5MaXN0T2ZFbXBsb3llZVtpXS5pZCk7XG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5saXN0W2ldLnN0YXR1cz1mYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmxpc3RbaV0uZW1wbG95ZWU9dGhpcy5MaXN0T2ZFbXBsb3llZVtpXTtcbiAgICAvLyAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB0aGlzLlByb2plY3RTZXJ2aWNlLmdldEFsbFByb2plY3RzKCkuc3Vic2NyaWJlKFxuICAgIC8vICAgICAgICAgICAgIG5leHQgPT57dGhpcy5MaXN0T2ZQcm9qZWN0cz1uZXh0O30pO1xuICAgICAgICAgICAgICAgIFxuICAgIH1cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRleHQ9PTA7XG4gICAgICAgIC8vIHRoaXMuQ29udGV4dHM9W107XG4gICAgICAgICB0aGlzLmZlZWRiYWNrLnRhcmdldHM9W107XG4gICAgICAgICB0aGlzLkVtcGxveWVlU2VydmljZS5nZXRBbGxFbXBsb3llZXMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgbmV4dCA9Pnt0aGlzLkxpc3RPZkVtcGxveWVlPW5leHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPD10aGlzLkxpc3RPZkVtcGxveWVlLmxlbmd0aDtpKyspXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db250ZXh0cy5wdXNoKHRoaXMuTGlzdE9mRW1wbG95ZWVbaV0uZmlyc3RuYW1lK1wiIFwiK3RoaXMuTGlzdE9mRW1wbG95ZWVbaV0ubGFzdG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0cy5wdXNoKHRoaXMuTGlzdE9mRW1wbG95ZWVbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAvLyB0aGlzLmxpc3RbaV0uc3RhdHVzPWZhbHNlO1xuICAgICAgICAgICAgICAgICAvLyB0aGlzLmxpc3RbaV0uZW1wbG95ZWU9dGhpcy5MaXN0T2ZFbXBsb3llZVtpXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIHRoaXMuUHJvamVjdFNlcnZpY2UuZ2V0QWxsUHJvamVjdHMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgIG5leHQgPT57dGhpcy5MaXN0T2ZQcm9qZWN0cz1uZXh0O30pO1xuICAgICAgICAgICAgICAgICBcbiAgICB9XG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIE9uQ2hhbmdlQ29udGV4dFR5cGUoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIFxuICAgICB7XG4gICAgICAgICBpZihhcmdzLm5ld0luZGV4PT0wKVxuICAgICAgICAge3RoaXMuRXJyb3JPdGhlcj1mYWxzZTtcbiAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrLmNvbnRleHRUeXBlPXRoaXMuTGlzdE9mQ29udGV4dHNbYXJncy5uZXdJbmRleF07XG4gICAgICAgICAgICAgdGhpcy5Db250ZXh0PVwiRW1wbG95ZWUgOlwiO1xuICAgICAgICAgICAgIHRoaXMuT3RoZXI9ZmFsc2U7XG4gICAgICAgICAgICAgdGhpcy5Db250ZXh0cz1bXTtcbiAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPD10aGlzLkxpc3RPZkVtcGxveWVlLmxlbmd0aDtpKyspXG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICB0aGlzLkNvbnRleHRzLnB1c2godGhpcy5MaXN0T2ZFbXBsb3llZVtpXS5maXJzdG5hbWUrXCIgXCIrdGhpcy5MaXN0T2ZFbXBsb3llZVtpXS5sYXN0bmFtZSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgZWxzZSBpZihhcmdzLm5ld0luZGV4PT0xKVxuICAgICAgICAgeyAgIHRoaXMuRXJyb3JPdGhlcj1mYWxzZTtcbiAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrLmNvbnRleHRUeXBlPXRoaXMuTGlzdE9mQ29udGV4dHNbYXJncy5uZXdJbmRleF07XG4gICAgICAgICAgICAgdGhpcy5Db250ZXh0PVwiUHJvamVjdCA6XCI7XG4gICAgICAgICB0aGlzLk90aGVyPWZhbHNlO1xuICAgICAgICAgICAgIHRoaXMuQ29udGV4dHM9W107XG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPD10aGlzLkxpc3RPZlByb2plY3RzLmxlbmd0aDtpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db250ZXh0cy5wdXNoKHRoaXMuTGlzdE9mUHJvamVjdHNbaV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2UgaWYoYXJncy5uZXdJbmRleD09MilcbiAgICAgICAgIHtcbiAgICAgICAgICAgIC8vdGhpcy5mZWVkYmFjay5jb250ZXh0PXRoaXMub3RoZXI7XG4gICAgICAgICAgICB0aGlzLk90aGVyPXRydWU7XG4gICAgICAgICAgICB0aGlzLkVycm9yT3RoZXI9dHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2suY29udGV4dFR5cGU9dGhpcy5MaXN0T2ZDb250ZXh0c1thcmdzLm5ld0luZGV4XTtcblxuICAgICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgb25UZXh0Q2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgICAgICAgICAgdGhpcy5vdGhlciA9IHRleHRGaWVsZC50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIE9uQ2hhbmdlQ29udGV4dChhcmdzOlNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKXtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2suY29udGV4dD10aGlzLkNvbnRleHRzW2FyZ3MubmV3SW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIE9uQ2hhbmdlVHlwZShhcmdzOlNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKXtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2sudHlwZT10aGlzLlR5cGVzW2FyZ3MubmV3SW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIE9uQ2hhbmdlTW9kZShhcmdzOlNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKXtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2subW9kZT10aGlzLk1vZGVzW2FyZ3MubmV3SW5kZXhdO1xuICAgICAgICAgICAgaWYoYXJncy5uZXdJbmRleD09MClcbiAgICAgICAgICAgIHt0aGlzLlRhcmdldHM9W3RoaXMuRW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlKCldO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8PXRoaXMuTGlzdE9mRW1wbG95ZWUubGVuZ3RoO2krKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICB0aGlzLlRhcmdldHMucHVzaCh0aGlzLkxpc3RPZkVtcGxveWVlW2ldLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGFyZ3MubmV3SW5kZXg9PTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRzPVt0aGlzLkVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYXJncy5uZXdJbmRleD09MilcbiAgICAgICAgICAgIHt0aGlzLlRhcmdldHM9W3RoaXMuRW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlKCldO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQ9dGhpcy5UYXJnZXRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLkxpc3Q9dHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvblNldHVwSXRlbVZpZXcoYXJnczogU2V0dXBJdGVtVmlld0FyZ3MpIHtcbiAgICAgICAgICAgIGFyZ3Mudmlldy5jb250ZXh0LnRoaXJkID0gKGFyZ3MuaW5kZXggJSAzID09PSAwKTtcbiAgICAgICAgfVxuICAgICAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICAgICAgLy90aGlzLmlzVGFwZWQ9IXRoaXMuaXNUYXBlZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYoKHRoaXMubGlzdFthcmdzLmluZGV4XS5zdGF0dXM9PWZhbHNlKSYmKHRoaXMubGlzdFthcmdzLmluZGV4XS5lbXBsb3llZT09dGhpcy5MaXN0T2ZFbXBsb3llZVthcmdzLmluZGV4XSkpXG4gICAgICAgICAgICAvLyB7dGhpcy5saXN0W2FyZ3MuaW5kZXhdLnN0YXR1cz0hIHRoaXMubGlzdFthcmdzLmluZGV4XS5zdGF0dXM7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5pc1RhcGVkPXRydWU7fVxuICAgICAgICAgICAgLy9hbGVydChhcmdzLnZpZXcpO1xuICAgICAgICAgICAgdGhpcy5pc0FkZGVkPXRoaXMuc2VhcmNoQnlJZCh0aGlzLkxpc3RPZkVtcGxveWVlW2FyZ3MuaW5kZXhdLmlkKTtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNBZGRlZD09LTEpXG4gICAgICAgICAgICB7dGhpcy5UYXJnZXRzLnB1c2godGhpcy5MaXN0T2ZFbXBsb3llZVthcmdzLmluZGV4XS5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudD10aGlzLlRhcmdldHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRzLnNwbGljZSh0aGlzLmlzQWRkZWQsMSk7XG4gICAgICAgICAgICAgICAgYWxlcnQoe3RpdGxlOlwiUmVtaW5kXCIsbWVzc2FnZTp0aGlzLkxpc3RPZkVtcGxveWVlW2FyZ3MuaW5kZXhdLmZpcnN0bmFtZStcIiBcIit0aGlzLkxpc3RPZkVtcGxveWVlW2FyZ3MuaW5kZXhdLmxhc3RuYW1lK1wiIGlzIHJlbW92ZWRcIixva0J1dHRvblRleHQ6IFwiT0tcIn0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQ9dGhpcy5UYXJnZXRzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgYWxlcnQoJ0l0ZW0gd2l0aCBpbmRleDogJyArIGFyZ3MuaW5kZXggKyAnIHRhcHBlZCcpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgc3VibWl0KHRleHQpIHtcbiAgICAgICAgICAgIGlmKHRleHQ9PScnKVxuICAgICAgICAgICB7IHRoaXMuRXJyb3JPdGhlcj10cnVlO31cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHt0aGlzLm90aGVyID0gdGV4dDtcbiAgICAgICAgICAgIHRoaXMuRXJyb3JPdGhlcj1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXNldCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLkNvbnRleHQ9XCJFbXBsb3llZSA6XCI7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29udGV4dD0wO1xuICAgICAgICAgICAgdGhpcy5vdGhlcj0nJztcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUeXBlPTA7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTW9kZT0wO1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFjay52YWx1ZT0nJztcbiAgICAgICAgICAgIHRoaXMucmVzZXRUYXJnZXRzKCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29udGV4dFR5cGU9MDtcbiAgICAgICAgICAgIHRoaXMuT3RoZXI9ZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAgICAgdGhpcy5Db250ZXh0cz1bXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTw9dGhpcy5MaXN0T2ZFbXBsb3llZS5sZW5ndGg7aSsrKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29udGV4dHMucHVzaCh0aGlzLkxpc3RPZkVtcGxveWVlW2ldLmZpcnN0bmFtZStcIiBcIit0aGlzLkxpc3RPZkVtcGxveWVlW2ldLmxhc3RuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHB1Ymxpc2goKVxuICAgICAgICB7IGlmKHRoaXMuZmVlZGJhY2suY29udGV4dFR5cGU9PSdPdGhlcicpXG4gICAgICAgIHt0aGlzLmZlZWRiYWNrLmNvbnRleHQ9dGhpcy5vdGhlcjt9XG4gICAgICAgICAgICBsZXQgZGF0ZT1uZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IGRheT1kYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGxldCBtb250aD1kYXRlLmdldE1vbnRoKCkrMTtcbiAgICAgICAgICAgIGxldCB5ZWFyPWRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2suZGF0ZT1kYXkrJy8nK21vbnRoKycvJyt5ZWFyO1xuICAgICAgICAgICAvLyB0aGlzLlRhcmdldHMucHVzaCh0aGlzLkVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZSgpKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2sudGFyZ2V0cz10aGlzLlRhcmdldHM7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvL3RoaXMuZmVlZGJhY2suY29udGV4dD10aGlzLm90aGVyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL3RoaXMuZmRwYi5pZF9lPXRoaXMuRW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlKCk7XG4gICAgICAgICAgICB0aGlzLmlzQnVzeT10cnVlO1xuICAgICAgICAgICAgdGhpcy5GZWVkYmFja1NlcnZpY2UuYWRkRmVlZGJhY2sodGhpcy5mZWVkYmFjaykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIG5leHQ9Pnt0aGlzLmlzQnVzeT1mYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgZmVlZGJhY2sgaXMgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vYWxlcnQoSlNPTi5zdHJpbmdpZnkobmV4dCkpO30sXG4gICAgICAgICAgICAgICAgZXJyb3I9PiB7dGhpcy5pc0J1c3k9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBhZGQgeW91ciBmZWVkYmFjay5cIik7fVxuICAgICAgICAgICAgKVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGZpbmlzaCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuTGlzdD1mYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMuVGFyZ2V0cy5sZW5ndGg9PTApXG4gICAgICAgICAgICB7dGhpcy5zZWxlY3RlZE1vZGU9MDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPD10aGlzLkxpc3RPZkVtcGxveWVlLmxlbmd0aDtpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRzLnB1c2godGhpcy5MaXN0T2ZFbXBsb3llZVtpXS5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge3RoaXMuc2VsZWN0ZWRNb2RlPTI7XG4gICAgICAgICAgICAvLyB0aGlzLmZlZWRiYWNrLnRhcmdldHM9dGhpcy5UYXJnZXRzXG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXNldFRhcmdldHMoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLlRhcmdldHM9W3RoaXMuRW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlKCldO1xuICAgICAgICAgICAgdGhpcy5jb3VudD10aGlzLlRhcmdldHMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICBzZWFyY2hCeUlkKGlkOm51bWJlcil7XG4gICAgICAgICAgIGxldCBpOm51bWJlcj0wO1xuICAgICAgICAgICB3aGlsZSgodGhpcy5UYXJnZXRzW2ldIT1pZCkmJihpPD10aGlzLlRhcmdldHMubGVuZ3RoKSlcbiAgICAgICAgICB7IGkrKzt9XG4gICAgICAgICAgaWYoaT50aGlzLlRhcmdldHMubGVuZ3RoKVxuICAgICAgICAgIHtyZXR1cm4gLTE7fVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgIHsgcmV0dXJuIGk7fVxuXG4gICAgICAgfVxuICAgICAgICAvLyAgcHVibGljIG9uVGV4dENoYW5nZShhcmdzOlRleHRGaWVsZCkge1xuICAgICAgICAvLyBpZih0aGlzLmlucHV0Lm90aGVyPT1cIlwiKVxuICAgICAgICAvLyAgICAgdGhpcy5FcnJvck90aGVyPXRydWU7XG4gICAgICAgIC8vICAgICBlbHNlXG4gICAgICAgIC8vICAgIHRoaXMuRXJyb3JPdGhlcj1mYWxzZTtcbiAgICAgICAgLy8gfVxufSJdfQ==