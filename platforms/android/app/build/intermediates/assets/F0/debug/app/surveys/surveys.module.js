"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../shared/shared.module");
var surveys_routing_module_1 = require("./surveys-routing.module");
var surveys_component_1 = require("./surveys.component");
var forms_1 = require("nativescript-angular/forms");
var SurveysModule = /** @class */ (function () {
    function SurveysModule() {
    }
    SurveysModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                surveys_routing_module_1.SurveysRoutingModule,
                shared_module_1.SharedModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                surveys_component_1.SurveysComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SurveysModule);
    return SurveysModule;
}());
exports.SurveysModule = SurveysModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdXJ2ZXlzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUseURBQXVEO0FBQ3ZELG1FQUFnRTtBQUNoRSx5REFBdUQ7QUFDdkQsb0RBQXFFO0FBZXJFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBZHpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDZDQUFvQjtnQkFDcEIsNEJBQVk7Z0JBQ1osK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IFN1cnZleXNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc3VydmV5cy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgU3VydmV5c0NvbXBvbmVudCB9IGZyb20gXCIuL3N1cnZleXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgU3VydmV5c1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdXJ2ZXlzQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1cnZleXNNb2R1bGUgeyB9XG4iXX0=