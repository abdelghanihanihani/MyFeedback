"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var employee_service_1 = require("./../../services/employee/employee.service");
/* ***********************************************************
* Keep data that is displayed as drawer items in the MyDrawer component class.
*************************************************************/
var MyDrawerItemComponent = /** @class */ (function () {
    function MyDrawerItemComponent(routerExtensions, EmployeeService) {
        this.routerExtensions = routerExtensions;
        this.EmployeeService = EmployeeService;
    }
    MyDrawerItemComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the MyDrawerItemComponent "onInit" event handler to initialize the properties data values.
        *************************************************************/
    };
    /* ***********************************************************
    * Use the "tap" event handler of the GridLayout component for handling navigation item taps.
    * The "tap" event handler of the app drawer item <GridLayout> is used to navigate the app
    * based on the tapped navigationItem's route.
    *************************************************************/
    MyDrawerItemComponent.prototype.onNavItemTap = function (navItemRoute) {
        var _this = this;
        if (navItemRoute == '/login') {
            dialogs.confirm({
                title: "Confirm",
                message: "Are you sure ?",
                okButtonText: "Yes",
                cancelButtonText: "No"
            }).then(function (result) {
                // result argument is boolean
                if (result) {
                    _this.Authent = false;
                    _this.EmployeeService.setAuthent(_this.Authent);
                    _this.routerExtensions.navigate([navItemRoute], {
                        transition: {
                            name: "fade"
                        }
                    });
                }
            });
            //alert('ok');
        }
        else {
            this.routerExtensions.navigate([navItemRoute], {
                transition: {
                    name: "fade"
                }
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerItemComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerItemComponent.prototype, "route", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerItemComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MyDrawerItemComponent.prototype, "isSelected", void 0);
    MyDrawerItemComponent = __decorate([
        core_1.Component({
            selector: "MyDrawerItem",
            moduleId: module.id,
            templateUrl: "./my-drawer-item.component.html",
            styleUrls: ["./my-drawer-item.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, employee_service_1.EmployeeService])
    ], MyDrawerItemComponent);
    return MyDrawerItemComponent;
}());
exports.MyDrawerItemComponent = MyDrawerItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxvQ0FBc0M7QUFFdEMsK0VBQTZFO0FBQzdFOzs4REFFOEQ7QUFPOUQ7SUFPSSwrQkFBb0IsZ0JBQWtDLEVBQVMsZUFBK0I7UUFBMUUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUU5RixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJOztzRUFFOEQ7SUFDbEUsQ0FBQztJQUVEOzs7O2tFQUk4RDtJQUM5RCw0Q0FBWSxHQUFaLFVBQWEsWUFBb0I7UUFBakMsaUJBNEJDO1FBM0JHLEVBQUUsQ0FBQSxDQUFDLFlBQVksSUFBRSxRQUFRLENBQUMsQ0FDMUIsQ0FBQztZQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFlBQVksRUFBRSxLQUFLO2dCQUNuQixnQkFBZ0IsRUFBRSxJQUFJO2FBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNWLDZCQUE2QjtnQkFDN0IsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLENBQ1YsQ0FBQztvQkFBQSxLQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztvQkFDaEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM5QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7d0JBQzFDLFVBQVUsRUFBRTs0QkFDUixJQUFJLEVBQUUsTUFBTTt5QkFDZjtxQkFDSixDQUFDLENBQUM7Z0JBQ1IsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0MsY0FBYztRQUNsQixDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzNDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtpQkFDZjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDRCxDQUFDO0lBaERRO1FBQVIsWUFBSyxFQUFFOzt3REFBZTtJQUNkO1FBQVIsWUFBSyxFQUFFOzt3REFBZTtJQUNkO1FBQVIsWUFBSyxFQUFFOzt1REFBYztJQUNiO1FBQVIsWUFBSyxFQUFFOzs2REFBcUI7SUFMcEIscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUNqRCxDQUFDO3lDQVF3Qyx5QkFBZ0IsRUFBeUIsa0NBQWU7T0FQckYscUJBQXFCLENBbURqQztJQUFELDRCQUFDO0NBQUEsQUFuREQsSUFtREM7QUFuRFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gXCIuLy4uLy4uL3NlcnZpY2VzL2VtcGxveWVlL2VtcGxveWVlLnNlcnZpY2VcIjtcclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBLZWVwIGRhdGEgdGhhdCBpcyBkaXNwbGF5ZWQgYXMgZHJhd2VyIGl0ZW1zIGluIHRoZSBNeURyYXdlciBjb21wb25lbnQgY2xhc3MuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTXlEcmF3ZXJJdGVtXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1kcmF3ZXItaXRlbS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL215LWRyYXdlci1pdGVtLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeURyYXdlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQXV0aGVudDpib29sZWFuO1xyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHJvdXRlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpc1NlbGVjdGVkOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIEVtcGxveWVlU2VydmljZTpFbXBsb3llZVNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAqIFVzZSB0aGUgTXlEcmF3ZXJJdGVtQ29tcG9uZW50IFwib25Jbml0XCIgZXZlbnQgaGFuZGxlciB0byBpbml0aWFsaXplIHRoZSBwcm9wZXJ0aWVzIGRhdGEgdmFsdWVzLlxyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBcInRhcFwiIGV2ZW50IGhhbmRsZXIgb2YgdGhlIEdyaWRMYXlvdXQgY29tcG9uZW50IGZvciBoYW5kbGluZyBuYXZpZ2F0aW9uIGl0ZW0gdGFwcy5cclxuICAgICogVGhlIFwidGFwXCIgZXZlbnQgaGFuZGxlciBvZiB0aGUgYXBwIGRyYXdlciBpdGVtIDxHcmlkTGF5b3V0PiBpcyB1c2VkIHRvIG5hdmlnYXRlIHRoZSBhcHBcclxuICAgICogYmFzZWQgb24gdGhlIHRhcHBlZCBuYXZpZ2F0aW9uSXRlbSdzIHJvdXRlLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG9uTmF2SXRlbVRhcChuYXZJdGVtUm91dGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmKG5hdkl0ZW1Sb3V0ZT09Jy9sb2dpbicpXHJcbiAgICAgICAge2RpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgP1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIlxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cclxuICAgICAgICAgICAgaWYocmVzdWx0KVxyXG4gICAgICAgICAgICB7dGhpcy5BdXRoZW50PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5FbXBsb3llZVNlcnZpY2Uuc2V0QXV0aGVudCh0aGlzLkF1dGhlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2FsZXJ0KCdvaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19