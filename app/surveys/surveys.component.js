"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var segmented_bar_1 = require("ui/segmented-bar");
var employee_service_1 = require("./../services/employee/employee.service");
var SurveysComponent = /** @class */ (function () {
    function SurveysComponent(EmployeeService) {
        this.EmployeeService = EmployeeService;
        this.items = [];
        this.Surveys = [{ context: 'SurvContext', date: 'date' }, { context: 'SurvContext', date: 'date' }, { context: 'SurvContext', date: 'date' }, { context: 'SurvContext', date: 'date' }, { context: 'SurvContext', date: 'date' }, { context: 'SurvContext', date: 'date' }, { context: 'SurvContext', date: 'date' }, { context: 'SurvContext', date: 'date' }];
        this.Enquires = [{ context: 'EnquiContext', date: 'date' }, { context: 'EnquiContext', date: 'date' }, { context: 'EnquiContext', date: 'date' }, { context: 'EnquiContext', date: 'date' }, { context: 'EnquiContext', date: 'date' }, { context: 'EnquiContext', date: 'date' }, { context: 'EnquiContext', date: 'date' }, { context: 'EnquiContext', date: 'date' }];
        this.questions = ["arfsfsdfsfdsf?", "wfsdfsdfdsfsdfsdfsdf?", "qsdfqsdqsdfqsdqsdqsd?", "dsfdsfsdfsdfsdfds?", "arfsfsdfsfdsf?", "wfsdfsdfdsfsdfsdfsdf?", "qsdfqsdqsdfqsdqsdqsd?", "dsfdsfsdfsdfsdfds?"];
        this.List = [];
        this.item1 = new segmented_bar_1.SegmentedBarItem();
        this.item2 = new segmented_bar_1.SegmentedBarItem();
        this.isSurvey = false;
        this.isListe = true;
        this.q1 = "questionquestionquestionquestionquestionquestionquestion?";
        this.id = "hi";
    }
    SurveysComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.item1.title = "Surveys";
        this.item2.title = "Enquires";
        this.items.push(this.item1);
        this.items.push(this.item2);
        this.isAdmin = this.EmployeeService.getEmpRole() == 'rh';
    };
    Object.defineProperty(SurveysComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    SurveysComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    SurveysComponent.prototype.onSelectedIndexChange = function (args) {
        this.isSurvey = !this.isSurvey;
        if (this.isSurvey) {
            this.List = this.Surveys;
        }
        else {
            this.List = this.Enquires;
        }
    };
    SurveysComponent.prototype.onItemTap = function (args) {
        this.isListe = false;
    };
    SurveysComponent.prototype.FinishSurvey = function () {
        this.isListe = true;
    };
    SurveysComponent.prototype.CreateEnquire = function () {
        this.isListe = true;
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SurveysComponent.prototype, "drawerComponent", void 0);
    SurveysComponent = __decorate([
        core_1.Component({
            selector: "Surveys",
            moduleId: module.id,
            templateUrl: "./surveys.component.html",
            styleUrls: ["./surveys.component.css"],
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], SurveysComponent);
    return SurveysComponent;
}());
exports.SurveysComponent = SurveysComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdXJ2ZXlzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRjtBQUN0Riw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLGtEQUFrRTtBQUVsRSw0RUFBMEU7QUFXMUU7SUFvQkksMEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQW5CckQsVUFBSyxHQUF5QixFQUFFLENBQUM7UUFDakMsWUFBTyxHQUFxQyxDQUFDLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQzlVLGFBQVEsR0FBcUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLE1B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QjNDLGdCQUFnQixDQThENUI7SUFBRCx1QkFBQztDQUFBLEFBOURELElBOERDO0FBOURZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFbXBsb3llZX0gZnJvbSBcIi4vLi4vc2VydmljZXMvZW1wbG95ZWUvZW1wbG95ZWUubW9kZWxcIjtcbiBAQ29tcG9uZW50KHtcbiAgICAgc2VsZWN0b3I6IFwiU3VydmV5c1wiLFxuICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgICB0ZW1wbGF0ZVVybDogXCIuL3N1cnZleXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICAgc3R5bGVVcmxzOltcIi4vc3VydmV5cy5jb21wb25lbnQuY3NzXCJdLFxuICAgICBwcm92aWRlcnM6W0VtcGxveWVlU2VydmljZV1cbiB9KVxuXG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIGl0ZW1zOkFycmF5PFNlZ21lbnRlZEJhckl0ZW0+PVtdO1xuICAgU3VydmV5czpBcnJheTx7Y29udGV4dDpzdHJpbmcsZGF0ZTpzdHJpbmd9Pj1be2NvbnRleHQ6J1N1cnZDb250ZXh0JyxkYXRlOidkYXRlJ30se2NvbnRleHQ6J1N1cnZDb250ZXh0JyxkYXRlOidkYXRlJ30se2NvbnRleHQ6J1N1cnZDb250ZXh0JyxkYXRlOidkYXRlJ30se2NvbnRleHQ6J1N1cnZDb250ZXh0JyxkYXRlOidkYXRlJ30se2NvbnRleHQ6J1N1cnZDb250ZXh0JyxkYXRlOidkYXRlJ30se2NvbnRleHQ6J1N1cnZDb250ZXh0JyxkYXRlOidkYXRlJ30se2NvbnRleHQ6J1N1cnZDb250ZXh0JyxkYXRlOidkYXRlJ30se2NvbnRleHQ6J1N1cnZDb250ZXh0JyxkYXRlOidkYXRlJ31dO1xuICAgRW5xdWlyZXM6QXJyYXk8e2NvbnRleHQ6c3RyaW5nLGRhdGU6c3RyaW5nfT49W3tjb250ZXh0OidFbnF1aUNvbnRleHQnLGRhdGU6J2RhdGUnfSx7Y29udGV4dDonRW5xdWlDb250ZXh0JyxkYXRlOidkYXRlJ30se2NvbnRleHQ6J0VucXVpQ29udGV4dCcsZGF0ZTonZGF0ZSd9LHtjb250ZXh0OidFbnF1aUNvbnRleHQnLGRhdGU6J2RhdGUnfSx7Y29udGV4dDonRW5xdWlDb250ZXh0JyxkYXRlOidkYXRlJ30se2NvbnRleHQ6J0VucXVpQ29udGV4dCcsZGF0ZTonZGF0ZSd9LHtjb250ZXh0OidFbnF1aUNvbnRleHQnLGRhdGU6J2RhdGUnfSx7Y29udGV4dDonRW5xdWlDb250ZXh0JyxkYXRlOidkYXRlJ31dO1xuICAgcXVlc3Rpb25zOkFycmF5PHN0cmluZz49W1wiYXJmc2ZzZGZzZmRzZj9cIixcIndmc2Rmc2RmZHNmc2Rmc2Rmc2RmP1wiLFwicXNkZnFzZHFzZGZxc2Rxc2Rxc2Q/XCIsXCJkc2Zkc2ZzZGZzZGZzZGZkcz9cIixcImFyZnNmc2Rmc2Zkc2Y/XCIsXCJ3ZnNkZnNkZmRzZnNkZnNkZnNkZj9cIixcInFzZGZxc2Rxc2RmcXNkcXNkcXNkP1wiLFwiZHNmZHNmc2Rmc2Rmc2RmZHM/XCJdXG4gICBMaXN0OkFycmF5PHtjb250ZXh0OnN0cmluZyxkYXRlOnN0cmluZ30+PVtdO1xuICAgIGl0ZW0xPW5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgaXRlbTI9bmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICBpc1N1cnZleTpib29sZWFuPWZhbHNlO1xuICAgIGlzTGlzdGU6Ym9vbGVhbj10cnVlO1xuICAgIGlzQWRtaW46Ym9vbGVhbjtcbiAgICBxMTpzdHJpbmc9XCJxdWVzdGlvbnF1ZXN0aW9ucXVlc3Rpb25xdWVzdGlvbnF1ZXN0aW9ucXVlc3Rpb25xdWVzdGlvbj9cIjtcbiAgIFxuICAgIFxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuaWQ6c3RyaW5nPVwiaGlcIjtcblxuICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBFbXBsb3llZVNlcnZpY2U6IEVtcGxveWVlU2VydmljZSkge1xuICAgICAgICBcbiAgICAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgdGhpcy5pdGVtMS50aXRsZT1cIlN1cnZleXNcIjtcbiAgICAgICAgdGhpcy5pdGVtMi50aXRsZT1cIkVucXVpcmVzXCI7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLml0ZW0xKTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMuaXRlbTIpO1xuICAgICAgICB0aGlzLmlzQWRtaW49dGhpcy5FbXBsb3llZVNlcnZpY2UuZ2V0RW1wUm9sZSgpPT0ncmgnO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuXG4gICBcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBvblNlbGVjdGVkSW5kZXhDaGFuZ2UoYXJncykge1xuICAgICAgICB0aGlzLmlzU3VydmV5PSF0aGlzLmlzU3VydmV5O1xuICAgICAgICBpZih0aGlzLmlzU3VydmV5KVxuICAgICAgICB7dGhpcy5MaXN0PXRoaXMuU3VydmV5c1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLkxpc3Q9dGhpcy5FbnF1aXJlcztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKTogdm9pZCB7XG50aGlzLmlzTGlzdGU9ZmFsc2U7XG4gICAgfVxuICAgIEZpbmlzaFN1cnZleSgpe1xuICAgICAgICB0aGlzLmlzTGlzdGU9dHJ1ZTtcbiAgICAgXG4gICAgfVxuICAgIENyZWF0ZUVucXVpcmUoKXtcbiAgICAgICAgdGhpcy5pc0xpc3RlPXRydWU7XG4gICAgICAgIFxuICAgIH1cbn1cblxuIl19