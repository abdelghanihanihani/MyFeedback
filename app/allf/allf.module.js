"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../shared/shared.module");
var allf_routing_module_1 = require("./allf-routing.module");
var allf_component_1 = require("./allf.component");
var angular_1 = require("nativescript-drop-down/angular");
var http_1 = require("@angular/common/http");
var AllfModule = /** @class */ (function () {
    function AllfModule() {
    }
    AllfModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                allf_routing_module_1.AllfRoutingModule,
                shared_module_1.SharedModule,
                angular_1.DropDownModule,
                http_1.HttpClientModule
            ],
            declarations: [
                allf_component_1.AllfComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AllfModule);
    return AllfModule;
}());
exports.AllfModule = AllfModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsZi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGxmLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUseURBQXVEO0FBQ3ZELDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFDakQsMERBQWdFO0FBQ2hFLDZDQUF3RDtBQWdCeEQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWZ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQix1Q0FBaUI7Z0JBQ2pCLDRCQUFZO2dCQUNaLHdCQUFjO2dCQUNkLHVCQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgQWxsZlJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hbGxmLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBbGxmQ29tcG9uZW50IH0gZnJvbSBcIi4vYWxsZi5jb21wb25lbnRcIjtcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQWxsZlJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgRHJvcERvd25Nb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBbGxmQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFsbGZNb2R1bGUgeyB9XG4iXX0=