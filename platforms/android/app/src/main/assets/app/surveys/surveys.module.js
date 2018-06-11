"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../shared/shared.module");
var surveys_routing_module_1 = require("./surveys-routing.module");
var surveys_component_1 = require("./surveys.component");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-checkbox/angular");
var http_1 = require("@angular/common/http");
var SurveysModule = /** @class */ (function () {
    function SurveysModule() {
    }
    SurveysModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                surveys_routing_module_1.SurveysRoutingModule,
                shared_module_1.SharedModule,
                forms_1.NativeScriptFormsModule,
                angular_1.TNSCheckBoxModule,
                http_1.HttpClientModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdXJ2ZXlzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUseURBQXVEO0FBQ3ZELG1FQUFnRTtBQUNoRSx5REFBdUQ7QUFDdkQsb0RBQXFFO0FBQ3JFLHlEQUFrRTtBQUNsRSw2Q0FBd0Q7QUFrQnhEO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBaEJ6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw2Q0FBb0I7Z0JBQ3BCLDRCQUFZO2dCQUNaLCtCQUF1QjtnQkFDdkIsMkJBQWlCO2dCQUNqQix1QkFBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgU3VydmV5c1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zdXJ2ZXlzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBTdXJ2ZXlzQ29tcG9uZW50IH0gZnJvbSBcIi4vc3VydmV5cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFN1cnZleXNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBUTlNDaGVja0JveE1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1cnZleXNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VydmV5c01vZHVsZSB7IH1cbiJdfQ==