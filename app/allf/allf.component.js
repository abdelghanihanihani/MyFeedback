"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var feedback_service_1 = require("./../services/feedback/feedback.service");
var employee_service_1 = require("./../services/employee/employee.service");
var AllfComponent = /** @class */ (function () {
    function AllfComponent(FeedbackService, EmployeeService) {
        this.FeedbackService = FeedbackService;
        this.EmployeeService = EmployeeService;
        this.ListOfFds = [];
        this.ContextType = ['Employee', 'Project', 'Other'];
        this.selectedContextType = 0;
        this.date = new Date();
        this.currentDay = this.date.getDate();
        this.currentMonth = this.date.getMonth() + 1;
        this.currentYear = this.date.getFullYear();
        this.isBusy = false;
        this.isNothing = false;
    }
    AllfComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.ListOfFds = [];
        this.isContext = false;
        this.isDate = false;
    };
    Object.defineProperty(AllfComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AllfComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    AllfComponent.prototype.onDateChanged = function (args) {
        this.date = args.value;
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        this.DateFd = day + '/' + month + '/' + year;
        this.getAllFDById(this.DateFd);
    };
    AllfComponent.prototype.OnChangeContextType = function (args) {
        if (args.newIndex == 0) {
            this.getAllFEById();
        }
        else if (args.newIndex == 1) {
            this.getAllFPById();
        }
        else if (args.newIndex == 2) {
            this.getAllFOById();
        }
    };
    AllfComponent.prototype.bydate = function () {
        this.date = new Date();
        this.isContext = false;
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        this.DateFd = day + '/' + month + '/' + year;
        this.getAllFDById(this.DateFd);
        //this.ListOfFds=[];
        this.isDate = !this.isDate;
    };
    AllfComponent.prototype.bycontext = function () {
        this.isDate = false;
        this.isContext = !this.isContext;
        if (this.isContext == true) {
            this.getAllFEById();
            this.selectedContextType == 0;
        }
        else {
            this.ListOfFds = [];
        }
    };
    AllfComponent.prototype.getAllFEById = function () {
        var _this = this;
        this.isBusy = true;
        this.FeedbackService.getAllFEById(this.EmployeeService.getEmployee()).subscribe(function (next) {
            _this.ListOfFds = next;
            _this.isNothing = _this.ListOfFds.length == 0;
            _this.isBusy = false;
        });
    };
    AllfComponent.prototype.getAllFPById = function () {
        var _this = this;
        this.isBusy = true;
        this.FeedbackService.getAllFPById(this.EmployeeService.getEmployee()).subscribe(function (next) {
            _this.ListOfFds = next;
            _this.isNothing = _this.ListOfFds.length == 0;
            _this.isBusy = false;
        });
    };
    AllfComponent.prototype.getAllFOById = function () {
        var _this = this;
        this.isBusy = true;
        this.FeedbackService.getAllFOById(this.EmployeeService.getEmployee()).subscribe(function (next) {
            _this.ListOfFds = next;
            _this.isNothing = _this.ListOfFds.length == 0;
            _this.isBusy = false;
        });
    };
    AllfComponent.prototype.getAllFDById = function (DateFd) {
        var _this = this;
        this.isBusy = true;
        this.FeedbackService.getAllFDById(this.EmployeeService.getEmployee(), DateFd).subscribe(function (next) {
            _this.ListOfFds = next;
            _this.isNothing = _this.ListOfFds.length == 0;
            _this.isBusy = false;
        });
    };
    AllfComponent.prototype.onItemTap = function (args) {
        this.isFeedback = true;
        this.feedback = this.ListOfFds[args.index];
    };
    AllfComponent.prototype.OK = function () {
        this.isFeedback = false;
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], AllfComponent.prototype, "drawerComponent", void 0);
    AllfComponent = __decorate([
        core_1.Component({
            selector: "Allf",
            moduleId: module.id,
            templateUrl: "./allf.component.html",
            styleUrls: ["./allf.component.css"],
            providers: [feedback_service_1.FeedbackService, employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [feedback_service_1.FeedbackService, employee_service_1.EmployeeService])
    ], AllfComponent);
    return AllfComponent;
}());
exports.AllfComponent = AllfComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGxmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RDtBQUM1RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBR2hGLDRFQUEwRTtBQUMxRSw0RUFBMEU7QUFVMUU7SUFtQkksdUJBQW9CLGVBQStCLEVBQVMsZUFBK0I7UUFBdkUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBakIzRixjQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUM3QixnQkFBVyxHQUFlLENBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCx3QkFBbUIsR0FBUSxDQUFDLENBQUM7UUFDN0IsU0FBSSxHQUFNLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekMsaUJBQVksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFHOUMsV0FBTSxHQUFTLEtBQUssQ0FBQztRQUdyQixjQUFTLEdBQVMsS0FBSyxDQUFDO0lBTXhCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsc0JBQUksK0NBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFD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QUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FDbEYsVUFBQSxJQUFJO1lBQUcsS0FBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFHWCxDQUFDO0lBQ0QsaUNBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLDBCQUFFLEdBQUY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBL0d3QjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzBEQUFDO0lBaEJwRCxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxTQUFTLEVBQUMsQ0FBQyxrQ0FBZSxFQUFDLGtDQUFlLENBQUM7U0FDOUMsQ0FBQzt5Q0FvQnNDLGtDQUFlLEVBQXlCLGtDQUFlO09BbkJsRixhQUFhLENBZ0l6QjtJQUFELG9CQUFDO0NBQUEsQUFoSUQsSUFnSUM7QUFoSVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5pbXBvcnQgeyBGZWVkYmFja1NlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9mZWVkYmFjay9mZWVkYmFjay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGZWVkYmFjayB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2ZlZWRiYWNrL2ZlZWRiYWNrLm1vZGVsXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQWxsZlwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hbGxmLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FsbGYuY29tcG9uZW50LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6W0ZlZWRiYWNrU2VydmljZSxFbXBsb3llZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFsbGZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuICAgIExpc3RPZkZkczpBcnJheTxGZWVkYmFjaz49W107XG4gICAgQ29udGV4dFR5cGU6QXJyYXk8c3RyaW5nPj1bJ0VtcGxveWVlJywnUHJvamVjdCcsJ090aGVyJ107XG4gICAgc2VsZWN0ZWRDb250ZXh0VHlwZTpudW1iZXI9MDtcbiAgICBkYXRlOkRhdGU9bmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF5OiBudW1iZXIgPSB0aGlzLmRhdGUuZ2V0RGF0ZSgpO1xuICAgIGN1cnJlbnRNb250aDogbnVtYmVyID0gdGhpcy5kYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGN1cnJlbnRZZWFyOiBudW1iZXIgPSB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBpc0NvbnRleHQ6Ym9vbGVhbjtcbiAgICBpc0RhdGU6Ym9vbGVhbjtcbiAgICBpc0J1c3k6Ym9vbGVhbj1mYWxzZTtcbiAgICBEYXRlRmQ6c3RyaW5nO1xuICAgIGlzRmVlZGJhY2s6Ym9vbGVhbjtcbiAgICBpc05vdGhpbmc6Ym9vbGVhbj1mYWxzZTtcbiAgICBmZWVkYmFjazpGZWVkYmFjaztcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBcbiAgICAgICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgRmVlZGJhY2tTZXJ2aWNlOkZlZWRiYWNrU2VydmljZSxwcml2YXRlIEVtcGxveWVlU2VydmljZTpFbXBsb3llZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgICAgICB0aGlzLkxpc3RPZkZkcz1bXTtcbiAgICAgICAgdGhpcy5pc0NvbnRleHQ9ZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEYXRlPWZhbHNlO1xuICAgIH1cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG4gICAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgdGhpcy5kYXRlPWFyZ3MudmFsdWU7XG4gICAgICAgbGV0IGRheT10aGlzLmRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgIGxldCBtb250aD10aGlzLmRhdGUuZ2V0TW9udGgoKSsxO1xuICAgICAgIGxldCB5ZWFyPXRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgIHRoaXMuRGF0ZUZkPWRheSsnLycrbW9udGgrJy8nK3llYXI7XG4gICAgICAgdGhpcy5nZXRBbGxGREJ5SWQodGhpcy5EYXRlRmQpO1xuICAgIH1cbiAgICBPbkNoYW5nZUNvbnRleHRUeXBlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSBcbiAgICB7IFxuICAgICAgICBpZihhcmdzLm5ld0luZGV4PT0wKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdldEFsbEZFQnlJZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYXJncy5uZXdJbmRleD09MSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5nZXRBbGxGUEJ5SWQoKTtcblxuICAgICAgICB9XG4gICAgICAgICBlbHNlIGlmKGFyZ3MubmV3SW5kZXg9PTIpXG4gICAgICAgICB7XG4gICAgICAgICB0aGlzLmdldEFsbEZPQnlJZCgpO1xuICAgICAgICAgfVxuICAgIFxuICAgIH1cbiAgICBieWRhdGUoKXtcbiAgICAgICAgdGhpcy5kYXRlPW5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuaXNDb250ZXh0PWZhbHNlO1xuICAgICAgICBsZXQgZGF5PXRoaXMuZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCBtb250aD10aGlzLmRhdGUuZ2V0TW9udGgoKSsxO1xuICAgICAgICBsZXQgeWVhcj10aGlzLmRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5EYXRlRmQ9ZGF5KycvJyttb250aCsnLycreWVhcjtcbiAgICAgICAgdGhpcy5nZXRBbGxGREJ5SWQodGhpcy5EYXRlRmQpO1xuICAgICAgICAvL3RoaXMuTGlzdE9mRmRzPVtdO1xuICAgICAgICB0aGlzLmlzRGF0ZT0hdGhpcy5pc0RhdGU7XG4gICAgfVxuICAgIGJ5Y29udGV4dCgpXG4gICAgeyAgICBcbiAgICAgICAgdGhpcy5pc0RhdGU9ZmFsc2U7XG4gICAgICAgIHRoaXMuaXNDb250ZXh0PSF0aGlzLmlzQ29udGV4dDtcbiAgICAgICAgaWYodGhpcy5pc0NvbnRleHQ9PXRydWUpXG4gICAgICAgIHt0aGlzLmdldEFsbEZFQnlJZCgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRleHRUeXBlPT0wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge3RoaXMuTGlzdE9mRmRzPVtdO31cbiAgICB9XG4gICAgZ2V0QWxsRkVCeUlkKClcbiAgICB7dGhpcy5pc0J1c3k9dHJ1ZTtcbiAgICAgICAgdGhpcy5GZWVkYmFja1NlcnZpY2UuZ2V0QWxsRkVCeUlkKHRoaXMuRW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlKCkpLnN1YnNjcmliZShcbiAgICAgICAgICAgIG5leHQ9Pnt0aGlzLkxpc3RPZkZkcz1uZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuaXNOb3RoaW5nPXRoaXMuTGlzdE9mRmRzLmxlbmd0aD09MDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQnVzeT1mYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgIH1cbiAgICBnZXRBbGxGUEJ5SWQoKVxuICAgIHt0aGlzLmlzQnVzeT10cnVlO1xuICAgICAgICB0aGlzLkZlZWRiYWNrU2VydmljZS5nZXRBbGxGUEJ5SWQodGhpcy5FbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWUoKSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbmV4dD0+e3RoaXMuTGlzdE9mRmRzPW5leHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pc05vdGhpbmc9dGhpcy5MaXN0T2ZGZHMubGVuZ3RoPT0wO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNCdXN5PWZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgfVxuICAgIGdldEFsbEZPQnlJZCgpXG4gICAge3RoaXMuaXNCdXN5PXRydWU7XG4gICAgICAgIHRoaXMuRmVlZGJhY2tTZXJ2aWNlLmdldEFsbEZPQnlJZCh0aGlzLkVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZSgpKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBuZXh0PT57dGhpcy5MaXN0T2ZGZHM9bmV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTm90aGluZz10aGlzLkxpc3RPZkZkcy5sZW5ndGg9PTA7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0J1c3k9ZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICB9XG4gICAgZ2V0QWxsRkRCeUlkKERhdGVGZClcbiAgICB7dGhpcy5pc0J1c3k9dHJ1ZTtcbiAgICAgICAgdGhpcy5GZWVkYmFja1NlcnZpY2UuZ2V0QWxsRkRCeUlkKHRoaXMuRW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlKCksRGF0ZUZkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBuZXh0PT57dGhpcy5MaXN0T2ZGZHM9bmV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTm90aGluZz10aGlzLkxpc3RPZkZkcy5sZW5ndGg9PTA7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0J1c3k9ZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIFxuICAgIH1cbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzRmVlZGJhY2s9dHJ1ZTtcbiAgICAgICAgdGhpcy5mZWVkYmFjaz10aGlzLkxpc3RPZkZkc1thcmdzLmluZGV4XTtcbiAgICB9XG5PSygpe1xuICAgIHRoaXMuaXNGZWVkYmFjaz1mYWxzZTtcbn1cbn1cblxuIl19