"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var SurveysComponent = /** @class */ (function () {
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    function SurveysComponent() {
        this.id = "hi";
        //  this.login=this.employee.login;
        // this.login="jj";
    }
    SurveysComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(SurveysComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    SurveysComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SurveysComponent.prototype, "drawerComponent", void 0);
    SurveysComponent = __decorate([
        core_1.Component({
            selector: "Surveys",
            moduleId: module.id,
            templateUrl: "./surveys.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], SurveysComponent);
    return SurveysComponent;
}());
exports.SurveysComponent = SurveysComponent;
// import { Component, OnInit,ViewChild } from "@angular/core";
// import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
// import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
// @Component({
//     selector: "Surveys",
//     moduleId: module.id,
//     templateUrl: "./surveys.component.html"
// })
// export class SurveysComponent implements OnInit {
//     @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
//         private _sideDrawerTransition: DrawerTransitionBase;
//     constructor() {
//     }
//     ngOnInit(): void {
//         this._sideDrawerTransition = new SlideInOnTopTransition();
//     }
//     get sideDrawerTransition(): DrawerTransitionBase {
//         return this._sideDrawerTransition;
//     }
//     onDrawerButtonTap(): void {
//         this.drawerComponent.sideDrawer.showDrawer();
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdXJ2ZXlzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBVWhGO0lBVUk7O2tFQUU4RDtJQUM5RDtRQUxKLE9BQUUsR0FBUSxJQUFJLENBQUM7UUFTUCxtQ0FBbUM7UUFDcEMsbUJBQW1CO0lBQ25CLENBQUM7SUFDSixtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0JBQUksa0RBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7a0VBRzhEO0lBQzlELDRDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUE3Qm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7NkRBQUM7SUFMcEQsZ0JBQWdCO1FBUDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDOztPQUdVLGdCQUFnQixDQW9DNUI7SUFBRCx1QkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDRDQUFnQjtBQXNDN0IsK0RBQStEO0FBQy9ELGlHQUFpRztBQUNqRyxtRkFBbUY7QUFHbkYsZUFBZTtBQUNmLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLEtBQUs7QUFFTCxvREFBb0Q7QUFDcEQsb0VBQW9FO0FBRXBFLCtEQUErRDtBQUMvRCxzQkFBc0I7QUFFdEIsUUFBUTtBQUVSLHlCQUF5QjtBQUN6QixxRUFBcUU7QUFFckUsUUFBUTtBQUNSLHlEQUF5RDtBQUN6RCw2Q0FBNkM7QUFDN0MsUUFBUTtBQUNSLGtDQUFrQztBQUNsQyx3REFBd0Q7QUFDeEQsUUFBUTtBQUNSLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5cbiBAQ29tcG9uZW50KHtcbiAgICAgc2VsZWN0b3I6IFwiU3VydmV5c1wiLFxuICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgICB0ZW1wbGF0ZVVybDogXCIuL3N1cnZleXMuY29tcG9uZW50Lmh0bWxcIlxuIH0pXG5cblxuZXhwb3J0IGNsYXNzIFN1cnZleXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbmlkOnN0cmluZz1cImhpXCI7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIFxuICAgICAgICAvLyAgdGhpcy5sb2dpbj10aGlzLmVtcGxveWVlLmxvZ2luO1xuICAgICAgIC8vIHRoaXMubG9naW49XCJqalwiO1xuICAgICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgIFxufVxuXG4vLyBpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG4vLyBpbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cblxuLy8gQENvbXBvbmVudCh7XG4vLyAgICAgc2VsZWN0b3I6IFwiU3VydmV5c1wiLFxuLy8gICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4vLyAgICAgdGVtcGxhdGVVcmw6IFwiLi9zdXJ2ZXlzLmNvbXBvbmVudC5odG1sXCJcbi8vIH0pXG5cbi8vIGV4cG9ydCBjbGFzcyBTdXJ2ZXlzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbi8vICAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBcbi8vICAgICAgICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgIFxuLy8gICAgIH1cbiAgXG4vLyAgICAgbmdPbkluaXQoKTogdm9pZCB7XG4vLyAgICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgIFxuLy8gICAgIH1cbi8vICAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuLy8gICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4vLyAgICAgfVxuLy8gICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuLy8gICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbi8vICAgICB9XG4vLyB9XG4iXX0=