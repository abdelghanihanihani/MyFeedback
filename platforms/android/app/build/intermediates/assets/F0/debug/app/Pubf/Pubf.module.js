"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../shared/shared.module");
var Pubf_routing_module_1 = require("./Pubf-routing.module");
var Pubf_component_1 = require("./Pubf.component");
var angular_1 = require("nativescript-drop-down/angular");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("@angular/common/http");
var angular_2 = require("nativescript-checkbox/angular");
var PubfModule = /** @class */ (function () {
    function PubfModule() {
    }
    PubfModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                Pubf_routing_module_1.PubfRoutingModule,
                shared_module_1.SharedModule,
                angular_1.DropDownModule,
                forms_1.NativeScriptFormsModule,
                http_1.HttpClientModule,
                angular_2.TNSCheckBoxModule
            ],
            declarations: [
                Pubf_component_1.PubfComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], PubfModule);
    return PubfModule;
}());
exports.PubfModule = PubfModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHViZi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQdWJmLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUseURBQXVEO0FBQ3ZELDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFDakQsMERBQWdFO0FBQ2hFLG9EQUFxRTtBQUNyRSw2Q0FBd0Q7QUFDeEQseURBQWtFO0FBbUJsRTtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBakJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQix1Q0FBaUI7Z0JBQ2pCLDRCQUFZO2dCQUNaLHdCQUFjO2dCQUNkLCtCQUF1QjtnQkFDdkIsdUJBQWdCO2dCQUNoQiwyQkFBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IFB1YmZSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vUHViZi1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgUHViZkNvbXBvbmVudCB9IGZyb20gXCIuL1B1YmYuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFB1YmZSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQdWJmQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFB1YmZNb2R1bGUgeyB9XG4iXX0=