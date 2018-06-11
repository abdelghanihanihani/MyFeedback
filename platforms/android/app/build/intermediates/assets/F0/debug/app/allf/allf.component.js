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
        this.ContextType = ['Employee', 'Project'];
        this.selectedContextType = 0;
        this.date = new Date();
        this.currentDay = this.date.getDate();
        this.currentMonth = this.date.getMonth() + 1;
        this.currentYear = this.date.getFullYear();
        this.isBusy = false;
        this.ListOfFds = [];
    }
    AllfComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
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
            //this.List=this.getListOfEmployee();
        }
        else if (args.newIndex == 1) {
            this.getAllFPById();
        }
    };
    AllfComponent.prototype.bydate = function () {
        this.date = new Date();
        this.isContext = false;
        this.ListOfFds = [];
        this.isDate = !this.isDate;
        // this.date=new Date();
        //  this.isContext=false;
        //  this.isDate=!this.isDate;
        //  if(this.isDate)
        //  {this.getAllFDById(this.date);}
        //  else
        //  {this.ListOfFds=[];}
    };
    AllfComponent.prototype.bycontext = function () {
        this.isDate = false;
        this.isContext = !this.isContext;
        if (this.isContext == true) {
            this.getAllFEById();
            //this.List=this.getListOfEmployee();
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
            _this.isBusy = false;
        });
    };
    AllfComponent.prototype.getAllFPById = function () {
        var _this = this;
        this.isBusy = true;
        this.FeedbackService.getAllFPById(this.EmployeeService.getEmployee()).subscribe(function (next) {
            _this.ListOfFds = next;
            _this.isBusy = false;
        });
    };
    AllfComponent.prototype.getAllFDById = function (DateFd) {
        var _this = this;
        this.isBusy = true;
        this.FeedbackService.getAllFDById(this.EmployeeService.getEmployee(), DateFd).subscribe(function (next) {
            _this.ListOfFds = next;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGxmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RDtBQUM1RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBR2hGLDRFQUEwRTtBQUMxRSw0RUFBMEU7QUFVMUU7SUFrQkksdUJBQW9CLGVBQStCLEVBQVMsZUFBK0I7UUFBdkUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBaEIzRixjQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUM3QixnQkFBVyxHQUFlLENBQUMsVUFBVSxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELHdCQUFtQixHQUFRLENBQUMsQ0FBQztRQUM3QixTQUFJLEdBQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxpQkFBWSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELGdCQUFXLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUc5QyxXQUFNLEdBQVMsS0FBSyxDQUFDO1FBUWpCLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsc0JBQUksK0NBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUNELHlDQUFpQixHQUFqQjtRQUNJLElBQUks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QztJQUNELG9DQUFZLEdBQVosVUFBYSxNQUFNO1FBQW5CLGlCQVFDO1FBUEEsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FDbEYsVUFBQSxJQUFJO1lBQUcsS0FBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFHWCxDQUFDO0lBQ0QsaUNBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLDBCQUFFLEdBQUY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBakd3QjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzBEQUFDO0lBZnBELGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFNBQVMsRUFBQyxDQUFDLGtDQUFlLEVBQUMsa0NBQWUsQ0FBQztTQUM5QyxDQUFDO3lDQW1Cc0Msa0NBQWUsRUFBeUIsa0NBQWU7T0FsQmxGLGFBQWEsQ0FpSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpIRCxJQWlIQztBQWpIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2ZlZWRiYWNrL2ZlZWRiYWNrLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2VtcGxveWVlL2VtcGxveWVlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZlZWRiYWNrIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvZmVlZGJhY2svZmVlZGJhY2subW9kZWxcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJBbGxmXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FsbGYuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYWxsZi5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczpbRmVlZGJhY2tTZXJ2aWNlLEVtcGxveWVlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQWxsZkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgTGlzdE9mRmRzOkFycmF5PEZlZWRiYWNrPj1bXTtcbiAgICBDb250ZXh0VHlwZTpBcnJheTxzdHJpbmc+PVsnRW1wbG95ZWUnLCdQcm9qZWN0J107XG4gICAgc2VsZWN0ZWRDb250ZXh0VHlwZTpudW1iZXI9MDtcbiAgICBkYXRlOkRhdGU9bmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF5OiBudW1iZXIgPSB0aGlzLmRhdGUuZ2V0RGF0ZSgpO1xuICAgIGN1cnJlbnRNb250aDogbnVtYmVyID0gdGhpcy5kYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGN1cnJlbnRZZWFyOiBudW1iZXIgPSB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBpc0NvbnRleHQ6Ym9vbGVhbjtcbiAgICBpc0RhdGU6Ym9vbGVhbjtcbiAgICBpc0J1c3k6Ym9vbGVhbj1mYWxzZTtcbiAgICBEYXRlRmQ6c3RyaW5nO1xuICAgIGlzRmVlZGJhY2s6Ym9vbGVhbjtcbiAgICBmZWVkYmFjazpGZWVkYmFjaztcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBcbiAgICAgICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgRmVlZGJhY2tTZXJ2aWNlOkZlZWRiYWNrU2VydmljZSxwcml2YXRlIEVtcGxveWVlU2VydmljZTpFbXBsb3llZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5MaXN0T2ZGZHM9W107XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgdGhpcy5pc0NvbnRleHQ9ZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEYXRlPWZhbHNlO1xuICAgIH1cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG4gICAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XG4gICAgICBcbiAgICAgICB0aGlzLmRhdGU9YXJncy52YWx1ZTtcbiAgICAgICBsZXQgZGF5PXRoaXMuZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgbGV0IG1vbnRoPXRoaXMuZGF0ZS5nZXRNb250aCgpKzE7XG4gICAgICAgbGV0IHllYXI9dGhpcy5kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgdGhpcy5EYXRlRmQ9ZGF5KycvJyttb250aCsnLycreWVhcjtcbiAgICAgICB0aGlzLmdldEFsbEZEQnlJZCh0aGlzLkRhdGVGZCk7XG4gICAgfVxuICAgIE9uQ2hhbmdlQ29udGV4dFR5cGUoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIFxuICAgIHsgXG4gICAgICAgIGlmKGFyZ3MubmV3SW5kZXg9PTApXG4gICAgICAgIHt0aGlzLmdldEFsbEZFQnlJZCgpO1xuICAgICAgICAgICAgLy90aGlzLkxpc3Q9dGhpcy5nZXRMaXN0T2ZFbXBsb3llZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYXJncy5uZXdJbmRleD09MSlcbiAgICAgICAge3RoaXMuZ2V0QWxsRlBCeUlkKCk7XG5cbiAgICAgICAgfVxuICAgIFxuICAgIH1cbiAgICBieWRhdGUoKXtcbiAgICAgICAgdGhpcy5kYXRlPW5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuaXNDb250ZXh0PWZhbHNlO1xuICAgICAgICB0aGlzLkxpc3RPZkZkcz1bXTtcbiAgICAgICAgdGhpcy5pc0RhdGU9IXRoaXMuaXNEYXRlO1xuICAgICAgICAvLyB0aGlzLmRhdGU9bmV3IERhdGUoKTtcbiAgICAgICAgLy8gIHRoaXMuaXNDb250ZXh0PWZhbHNlO1xuICAgICAgICAvLyAgdGhpcy5pc0RhdGU9IXRoaXMuaXNEYXRlO1xuICAgICAgICAgXG4gICAgICAgIC8vICBpZih0aGlzLmlzRGF0ZSlcbiAgICAgICAgLy8gIHt0aGlzLmdldEFsbEZEQnlJZCh0aGlzLmRhdGUpO31cbiAgICAgICAgLy8gIGVsc2VcbiAgICAgICAgLy8gIHt0aGlzLkxpc3RPZkZkcz1bXTt9XG4gICAgICAgIFxuICAgIH1cbiAgICBieWNvbnRleHQoKVxuICAgIHt0aGlzLmlzRGF0ZT1mYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbnRleHQ9IXRoaXMuaXNDb250ZXh0O1xuICAgICAgICBpZih0aGlzLmlzQ29udGV4dD09dHJ1ZSlcbiAgICAgICAge3RoaXMuZ2V0QWxsRkVCeUlkKCk7XG4gICAgICAgICAgICAvL3RoaXMuTGlzdD10aGlzLmdldExpc3RPZkVtcGxveWVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7dGhpcy5MaXN0T2ZGZHM9W107fVxuICAgIH1cbiAgICBnZXRBbGxGRUJ5SWQoKVxuICAgIHt0aGlzLmlzQnVzeT10cnVlO1xuICAgICAgICB0aGlzLkZlZWRiYWNrU2VydmljZS5nZXRBbGxGRUJ5SWQodGhpcy5FbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWUoKSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbmV4dD0+e3RoaXMuTGlzdE9mRmRzPW5leHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0J1c3k9ZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICB9XG4gICAgZ2V0QWxsRlBCeUlkKClcbiAgICB7dGhpcy5pc0J1c3k9dHJ1ZTtcbiAgICAgICAgdGhpcy5GZWVkYmFja1NlcnZpY2UuZ2V0QWxsRlBCeUlkKHRoaXMuRW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlKCkpLnN1YnNjcmliZShcbiAgICAgICAgICAgIG5leHQ9Pnt0aGlzLkxpc3RPZkZkcz1uZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuaXNCdXN5PWZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgfVxuICAgIGdldEFsbEZEQnlJZChEYXRlRmQpXG4gICAge3RoaXMuaXNCdXN5PXRydWU7XG4gICAgICAgIHRoaXMuRmVlZGJhY2tTZXJ2aWNlLmdldEFsbEZEQnlJZCh0aGlzLkVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZSgpLERhdGVGZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbmV4dD0+e3RoaXMuTGlzdE9mRmRzPW5leHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0J1c3k9ZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIFxuICAgIH1cbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzRmVlZGJhY2s9dHJ1ZTtcbiAgICAgICAgdGhpcy5mZWVkYmFjaz10aGlzLkxpc3RPZkZkc1thcmdzLmluZGV4XTtcbiAgICB9XG5PSygpe1xuICAgIHRoaXMuaXNGZWVkYmFjaz1mYWxzZTtcbn1cbn1cblxuIl19